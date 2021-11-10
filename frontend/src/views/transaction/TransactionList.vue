<template>
  <div class="transaction-list container">
    <h1>Transactions</h1>
    <TransactionListEntry v-for="transaction in transactions" :coin="transaction.coin" :amount="transaction.amount" :transactionDate="new Date(transaction.transaction_date)"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TransactionListEntry from '@/components/transaction/TransactionListEntry.vue';
import TransactionDataService from '@/services/TransactionDataService';

export default {
  name: 'TransactionList',
  components: {
    TransactionListEntry,
  },
  data() {
    return {
      transactions: new Array()
    }
  },
  methods: {
    async findAllTransactions() {
      try{
        const transactionResult = await TransactionDataService.findAll();
        this.transactions = transactionResult.data.data;
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.findAllTransactions();
  },
};
</script>
