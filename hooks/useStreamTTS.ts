import { useEffect, useState } from "react";

const useStreamTTs = () => {
  const [loading, setLoading] = useState(false);
  const [audioSrc, setAudioSrc] = useState<string | null>(null);

  const speak = async (text: string) => {
    const storedBase64Audio = localStorage.getItem(`tts-${text}`);
    if (storedBase64Audio) {
      setAudioSrc(`data:audio/wav;base64,${storedBase64Audio}`);
      return;
    }

    setLoading(true);
    const response = await fetch(`http://127.0.0.1:5000/tts`, {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: { "Content-Type": "application/json" },
    });
    const arrayBuffer = await response.arrayBuffer();
    const base64Audio = bufferToBase64(arrayBuffer);
    setAudioSrc(`data:audio/wav;base64,${base64Audio}`);
    setLoading(false);
    localStorage.setItem(`tts-${text}`, base64Audio);
  };

  const bufferToBase64 = (buffer: ArrayBuffer) => {
    const uint8Array = new Uint8Array(buffer);
    const binaryString = Array.from(uint8Array)
      .map((byte) => String.fromCharCode(byte))
      .join("");
    return btoa(binaryString);
  };

  useEffect(() => {
    if (audioSrc) {
      const audio = new Audio(audioSrc);
      audio.play();
      audio.onended = () => {
        setAudioSrc(null);
      };
    }
  }, [audioSrc]);

  return { speak, loading };
};

export default useStreamTTs;
