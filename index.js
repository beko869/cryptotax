import Koa from "koa";
import KoaBodyParser from "koa-bodyparser";

export const app = new Koa();

app.use(async (ctx, next) => {
    try {
      await next();
    } catch (error) {
      //
    }
  });

import {router as baseRouter} from "./routes/base.js";

app.use( KoaBodyParser({ enableTypes: ["json"] }) );

app.use( baseRouter.routes() );
app.use( baseRouter.allowedMethods() );

const server = app.listen(3000);
console.log( "Server listening on port 3000" );
