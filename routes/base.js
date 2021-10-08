import Router from "@koa/router";

export const router = new Router();

const baseUrl = "/api/v1";

router.get( "/", (ctx) => {
    ctx.body = {
        data : { message : "Hi there" }
    };
} );
