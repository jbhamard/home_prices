import Koa from 'koa'

const app = new Koa()

app.use(async ctx => {
  ctx.body = 'Hello World'
})

console.log('jbh test')

app.listen(3000)
