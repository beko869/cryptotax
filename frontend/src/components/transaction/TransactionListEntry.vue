<template>
    <div class="row transaction-list-entry">
      <div class="col-12">
        <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="col text-left pb-2 pt-2">
                <div class="d-inline-flex">
                  <img class="crypto-logo" src="@/assets/bitcoin.png"/>
                  <h3>{{ coin }} {{ amount }} {{ transactionDate }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <progress min="0" max="100" :value="computedProgressValue"></progress>
          </div>
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
  computed: {
    computedProgressValue() {
      const timeDiffInMsNowTransactionDate = Date.now() - Date.parse( this.transactionDate );
      const hodlDays = timeDiffInMsNowTransactionDate / 1000 / 60 / 60 / 24;
      return hodlDays/365 * 100;
    }
  }

};
</script>

<style lang="scss">
  .transaction-list-entry {
     background-color: $primary;
  }

  .crypto-logo {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
  }
</style>

