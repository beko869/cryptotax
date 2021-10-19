import dotenv from 'dotenv';
dotenv.config();
import Koa from "koa";
import KoaBodyParser from "koa-bodyparser";

export const app = new Koa();

app.use( KoaBodyParser({ enableTypes: ["json"] }) );

app.use(async (ctx, next) => {
    try {
      await next();
    } catch (error) {
      console.log(error);
    }
  });

import {router as baseRouter} from "./routes/base.js";
import {router as transactionRouter} from "./routes/transaction.js";

app.use( baseRouter.routes() );
app.use( baseRouter.allowedMethods() );

app.use( transactionRouter.routes() );
app.use( transactionRouter.allowedMethods() );

const server = app.listen(3000);
console.log( "Server listening on port 3000" );
