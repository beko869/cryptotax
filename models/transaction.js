import {query} from '../db/db.js';

export class Transaction{
    
    constructor(){

    }

    findAll = () => {
        return query( "SELECT * FROM transaction" );
    }

}