import type { NextApiRequest } from 'next'

export default function getIP(request: Request | NextApiRequest) {
  console.log("🚀 ~ file: get-ip.ts:4 ~ getIP ~ request:", request)
  const xff =
    request instanceof Request
      ? request.headers.get('x-forwarded-for')
      : request.headers['x-forwarded-for']

  console.log("🚀 ~ file: get-ip.ts:5 ~ getIP ~ xff:", xff)
  return xff ? (Array.isArray(xff) ? xff[0] : xff.split(',')[0]) : '127.0.0.1'
}
