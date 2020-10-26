const koa = require("koa");
const app = new koa();
const Router = require("@koa/router");

const router = new Router();
// app.use(async ctx=>{
//   ctx.body = 'Hello World'
// })
router.get("/test", async (ctx, next) => {
  // ctx.router available
   ctx.body = "Hello koa";
});

router.post("/post", async (ctx, next) => {
  // ctx.router available
   ctx.body = "post add";
});

router.get("/post", async (ctx, next) => {
  // ctx.router available
   ctx.body = "post";
});


app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
  console.log("端口3000");
});
