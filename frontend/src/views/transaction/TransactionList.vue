<template>
  <div class="transaction-list container">
    <h1>Transactions</h1>
    <TransactionListEntry coin="BTC" amount=0.0302 transactionDate="2020-05-05"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TransactionListEntry from '@/components/transaction/TransactionListEntry.vue';

export default {
  name: 'TransactionList',
  components: {
    TransactionListEntry,
  },
};
</script>
