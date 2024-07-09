import { headers } from 'next/headers'

export async function GET(request: Request) {

  return new Response('', {
    status: 200,
  })
}
