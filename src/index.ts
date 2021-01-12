import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as bodyParser from 'koa-bodyParser'
import Calculate from './controll'

const app = new Koa()
const router = new Router()
const port: number = 3030

app.use(bodyParser())

router.get('/', async (ctx, next) => {
  const caculate = new Calculate(1, 2)
  ctx.body = caculate.sum()
})

app.use(router.routes())

app.listen(3030, () => {
  console.log('http://localhost:3030')
})