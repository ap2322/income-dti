<template>
    <div>
        <h2>Additional Income</h2>
        <p>SNAP/WIC Food Assistance 
        <input
            type="number" name="SNAPWic"
            placeholder="$0.00/hr"
            min="0.00"
            v-model="incomePrimary"
            id = "SNAPWic"
            value="SNAPWic"
        />
        <!-- <span class="validity"></span> -->
        </p>
        <p>Temporary Assistance for Needy Families (TANF) 
        <input
            type="number" name="TANF"
            placeholder="$0.00/hr"
            min="0.00" 
            v-model="incomePrimary"
            id = "TANF"
            value="TANF"
        />
        <!-- <span class="validity"></span> -->
        </p>
        <p>Your additional income subtotal is {{ otherIncomeSubtotal}}</p>
    </div>
</template>

<script>

export default {
  name: 'incomeAdditional',
  props: {
    coapplicant: Boolean,
    showCoapplicant: Boolean,
    showIncomeAdditional: Boolean,
  },

  data() {
    return {
      SNAPWic: 0,
      TANF: 40,
    };
  },
  computed: {
    otherIncomeSubtotal() {
      return this.SNAPWic + this.TANF;
    },

    annualIncomeSecondary() {
      return this.incomeSecondary * this.hoursPerWeek * 50;
    },

    totalIncome() {
      return this.annualIncome + this.annualIncomeSecondary;
    },
  },
  methods: {
    showCoapplicantForm(yn) {
      this.$emit('showIncomeAdditional', yn);
    },
  },


};
</script>

<style>

</style>
