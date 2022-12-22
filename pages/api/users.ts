import { sha256 } from 'js-sha256'
import { nanoid } from 'nanoid'
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../utils/prisma'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') get(req, res)
  if (req.method === 'POST') post(req, res)
}

async function get(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const users = await prisma.user.findMany({
    select: {
      name: true,
      photoURL: true,
      password: true
    }
  }) as any[]

  users.map((user) => {
    if (user.password) {
      user.isLocked = true
    } else {
      user.isLocked = false
    }

    delete user.password
    return user
  })

  res.json(users)
}

async function post(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, password, photoURL } = req.body

  if (name && photoURL) {
    try {
      const existsUser = await prisma.user.findUnique({ 
        where: {
          name
        }
      })

      if (existsUser) {
        res.json({ ok: false, error: 'name exists' })
        return
      }

      if (password) {
        const salt = nanoid(48)
  
        await prisma.user.create({
          data: {
            name,
            password: sha256(password + salt),
            salt,
            photoURL
          }
        })
  
        return
      }
  
      await prisma.user.create({
        data: {
          name,
          photoURL
        }
      })
    } catch (err) {
      res.json({ ok: false, reason: 'server error' })
      console.log(err)
    }
  } else {
    res.json({ ok: false, reason: 'invalid body' })
  }
}
