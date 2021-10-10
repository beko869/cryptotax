import Router from "@koa/router";
import { Transaction } from "../models/transaction.js";

export const router = new Router();

const baseUrl = "/api/v1";

router.get( `${baseUrl}/transactions`, async (ctx) => {

    //TODO -> move to controller
    const transaction = new Transaction();

    try{
        const allTransactions = await transaction.findAll();
        ctx.body = allTransactions;
    } catch (error) {
        ctx.throw( 400, {
            error: {
                code: 400, message: 'Error requesting all transactions'
            }
        } );
    }

} );
