import Router from "@koa/router";
import { Transaction } from "../models/transaction.js";

export const router = new Router();

const baseUrl = "/api/v1";


router.get( `${baseUrl}/transactions`, async (ctx) => {

    try{
        const allTransactions = await Transaction.findAll();
        ctx.body = { data: allTransactions };
    } catch (error) {
        ctx.throw( 400, {
            error: {
                code: 400, message: 'Error requesting all transactions'
            }
        } );
    }

} );


router.get( `${baseUrl}/transaction/:id`, async (ctx) => {

    const request = ctx.request.params;
    const transactionID = request.id;

    if( !transactionID ){
        ctx.throw( 400, {
            error: {
                code: 400, message: "Error requesting transaction (0x1)"
            }
        } );
    }
    else{
        try{
            const transaction = await Transaction.find( transactionID );
            ctx.body = { data: transaction };
        } catch (error) {
            ctx.throw( 400, {
                error: {
                    code: 400, message: "Error requesting transaction (0x2)"
                }
            } );
        }   
    }

} );


router.post( `${baseUrl}/transaction`, async (ctx) => {
    
    const request = ctx.request.body;
    let transaction = new Transaction(request);

    try{
        await transaction.save();
        ctx.body = { data: transaction };
    } catch (error){
        ctx.throw( 400, {
            error: {
                code: 400, message: 'Error saving transaction (0x1)'
            }
        } )
    }

} );


router.put( `${baseUrl}/transaction/:id`, async (ctx) => {
    
    const request = ctx.request.body;
    let transaction = new Transaction(request);

    if( transaction.id == null ){
        ctx.throw( 400, {
            error: {
                code: 400, message: 'Error saving transaction (0x2)'
            }
        } );
    } else {
        try{
            await transaction.save();
            ctx.body = { data: transaction };
        } catch (error){
            ctx.throw( 400, {
                error: {
                    code: 400, message: 'Error saving transaction (0x3)'
                }
            } )
        }
    }  
    
} );
