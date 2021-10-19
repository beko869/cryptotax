import Router from "@koa/router";

export const router = new Router();

const baseUrl = "/api/v1";


router.get( `${baseUrl}`, (ctx) => {
    ctx.body = {
        data : { message : "Hi there" }
    };
} );
