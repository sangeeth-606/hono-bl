import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Bindings } from 'hono/types'

//@ts-ignore
const app = new Hono()

//@ts-ignore
app.post('/api/v1/signup', async (c) => {
  try {
    //@ts-ignore
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()
    await prisma.user.create({
      data:{
        email:c.body.email,
        password:c.body.password
      }
    })

    return c.text('Signup endpoint')
  } catch (error: any) {
    console.error("Signup error:", error);
    return c.json({ error: error.message }, 500)
  }
})
//@ts-ignore
app.post('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})
//@ts-ignore
app.put('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})
//@ts-ignore
app.get('/api/v1/blog/:id', (c) => {
  return c.text('Hello Hono!')
})