const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })  //获取next是开发环境还是生产环境
const handle= app.getRequestHandler()


app.prepare().then(() => {
    const server =new Koa()
    const router=new Router()

    router.get('/a/:id',async (ctx) => {
        const id = ctx.params.id
        await handle(ctx.req, ctx.res, {
            pathname: '/a',
            query: {
                id:1
            }
        })
        ctx.respond = false
    })

    server.use(router.routes())

    // router.get('/test/:id',(ctx) => {
        
    //     // ctx.body=`<p>request /test ${ctx.params.id}</p>`
    //     ctx.body ={ success:true }
    //     ctx.set('Content-Type','application/json')        //返回给前端的格式
    // })


    // server.use(async (ctx,next)=> {
    //     // const path =ctx.path
    //     // const mathod = ctx.method
    //     // ctx.body=`<span>Koa Render${mathod} ${path}</span>`
    //     await next()
    // })


    // server.use(router.routes())
    // server.use(async (ctx,next)=> {
    //     ctx.body='<span>Koa Render2</span>'
    // })


    server.use(async(ctx,next)=> {     //中间件就是一个函数
        await handle(ctx.req, ctx.res)
        ctx.respond = false
    })

    server.listen(3000,() => {
        console.log('koa server 3000')
    })
})