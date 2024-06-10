import type { NextApiRequest, NextApiResponse } from 'next'
import * as jose from 'jose'
import {settings} from "../../../globalsettings"

const PASSWORD = settings.SLIDING_TILE_PASSCODE

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' })
  if (req.body.password === undefined) return res.status(400).json({ message: 'Missing password' })

  if (req.body.password !== PASSWORD) return res.status(401).json({ message: 'Invalid password' })

  const EXPIRATION = 30 * 24 * 3600
  const token = await new jose.SignJWT({})
    .setExpirationTime(EXPIRATION + "s")
    .setProtectedHeader({ alg: 'HS256' })
    .sign(new TextEncoder().encode("thisSecretShouldBeStoredInAnEnvironmentVariable"))

  res.setHeader('Set-Cookie', `jwt=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=${EXPIRATION}`)

  res.status(200).json({ name: 'Entry granted' })
}
