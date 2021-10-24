<template>
    <div class="transaction-list-entry">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col text-left">
              {{ coin }} {{ amount }}
            </div>
            <div class="col text-right">
              {{ transactionDate }}
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          TBD
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'TransactionListEntry',
  props: {
    coin: String,
    amount: Number,
    transactionDate: Date,
  },
};
</script>
