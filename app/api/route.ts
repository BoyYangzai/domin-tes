import { headers } from 'next/headers'

export async function GET(request: Request) {
  const headersList = headers()

  return new Response('Hello, Next.js!', {
    status: 200,
  })
}
