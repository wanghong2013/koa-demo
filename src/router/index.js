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

module.exports = router