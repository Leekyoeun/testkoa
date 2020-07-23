import Koa, {Context} from "koa";
import Router from "koa-router";

const app = new Koa();
const router = new Router();

// Welcome!

router.get('/test', async (ctx: Context) => {
  // TODO: Please implement your code here
  ctx.body = 'Hello World';
});

router.get('/', async (ctx: Context) => {
  ctx.body = 'Welcome';
});

app.use(router.routes());

app.listen(3000);
