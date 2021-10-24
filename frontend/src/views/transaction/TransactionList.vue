<template>
  <div class="transaction-list container">
    <h1>Transactions</h1>
    <TransactionListEntry coin="BTC" amount=0.0302 transactionDate="2020-05-05"/>
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
    findAllTransactions: async() => {
      try{
        const transactionResult = await TransactionDataService.findAll();
        this.transactions = transactionResult.data;
        console.log(this.transactions);
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.findAllTransactions();
  },
};
</script>
