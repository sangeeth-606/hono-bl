import { Hono } from 'hono'
import { Prisma, PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'


const app = new Hono()


app.post('/api/v1/signup', async (c) => {
  try {
    // Access the prisma client in your route
    const prisma = new PrismaClient({
      datasourceUrl: env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    // Your signup logic here
    return c.text('Signup endpoint')
  } catch (error) {
    return c.json({ error: error.message }, 500)
  }
})
app.post('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})
app.put('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})
app.get('/api/v1/blog/:id', (c) => {
  return c.text('Hello Hono!')
})

export default app
