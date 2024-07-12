import { Button, ButtonProps } from "antd";
import React from "react";

export default function MainButton({
  children,
  style,
  ...props
}: {
  children: React.ReactNode;
} & ButtonProps) {
  return (
    <Button
      style={{
        background: "linear-gradient(to right, #A5FF6D, #32F799)",
        ...style,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
