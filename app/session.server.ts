import { createCookieSessionStorage, redirect } from '@remix-run/node'
import type { InternalUser } from './modules/Users'

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: '__session',
      httpOnly: true,
      maxAge: 60,
      path: '/',
      sameSite: 'lax',
      secrets: [ENV.SESSION_SECRET],
      secure: true,
    },
  })

const getLoggedUser = async (request: Request) => {
  const session = await getSession(request.headers.get('Cookie'))

  if (!session.has('user')) {
    throw redirect('/login')
  }

  return session.get('user') as InternalUser
}

export { getSession, commitSession, destroySession, getLoggedUser }
