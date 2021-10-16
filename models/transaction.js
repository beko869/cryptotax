import {query} from '../db/db.js';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

export class Transaction{
    
    constructor( paraDataObject ) {
        
        this.id                                 = !paraDataObject.id ? null : paraDataObject.id;
        this.coin                               = paraDataObject.coin;
        this.amount                             = paraDataObject.amount;
        this.currency                           = paraDataObject.currency;
        this.currencyValueAtTransactionDate     = paraDataObject.currency_value_at_transaction_date;
        this.transactionDate                    = paraDataObject.transaction_date;
        this.isDeleted                          = paraDataObject.is_deleted;
        this.creationDate                       = paraDataObject.creation_date;
        this.modifiedDate                       = paraDataObject.modified_date;

    }

    static findAll = () => {
        return query( `SELECT * FROM transaction WHERE is_deleted = 0` );
    }

    save = async() => {
        if( this.id == null ) { 
            //insert
            console.log( 'inserting to transaction table...' );
            try{
                this.currencyValueAtTransactionDate = await this.getCurrencyExchangeRateForDate( this.transactionDate );

                let insertResult = await query( `INSERT INTO 
                                    transaction (coin,amount,currency_value_at_transaction_date,currency,transaction_date,creation_date) 
                                    VALUES 
                                            (?,?,?,?,?,?)`,
                                    [ this.coin, this.amount, this.currencyValueAtTransactionDate, this.currency, this.transactionDate, this.creationDate ] );

                this.id = insertResult.insertId;
                return insertResult;
            }
            catch(error){
                throw error;
            }

        } else {
            //update
            console.log( 'updating transaction table...' );
            return query( `UPDATE 
                                transaction 
                           SET 
                                coin = ?, amount = ?, currency_value_at_transaction_date = ?, currency = ?, transaction_date = ?, creation_date = ?, modified_date = ?, is_deleted = ?
                           WHERE id = ?`,
                           [ this.coin, this.amount, this.currencyValueAtTransactionDate, this.currency, this.transactionDate, this.creationDate, this.modifiedDate, this.isDeleted, this.id ] );
        }
    }

    getCurrencyExchangeRateForDate = async( paraDate ) => {
        
        try{
            const response = await fetch( `${process.env.COINAPI_BASE_URL}/v1/exchangerate/${this.coin}/${this.currency}?time=${paraDate}`, {
                method: 'get',
                //body: JSON.stringify(body),
                headers: {"X-CoinAPI-Key" : process.env.COINAPI_API_KEY } 
            } );

            const responseJson = await response.json();

            return parseFloat( responseJson.rate * this.amount );
            
        } catch (error) {

             throw error;
        }

    }

}