<template>
    <div>
        <h2>Additional Income</h2>
        <p>SNAP/WIC Food Assistance 
        <input
            type="number" name="SNAPWic"
            placeholder="$0.00/month"
            min="0.00"
            v-model.number="SNAPWic"
            id = "SNAPWic"
            value="SNAPWic"
            @input='sendIncomeAdditionalSubtotal(otherIncomeSubtotal)'
        /> per month
        <!-- <span class="validity"></span> -->
        </p>
        <p>Temporary Assistance for Needy Families (TANF) 
        <input
            type="number" name="TANF"
            placeholder="$0.00/month"
            min="0.00" 
            v-model.number="TANF"
            id = "TANF"
            value="TANF"
            @input='sendIncomeAdditionalSubtotal(otherIncomeSubtotal)'
        /> per month
        <!-- <span class="validity"></span> -->
        </p>

        <p>Supplemental Security Income (SSI) 
        <input
            type="number" name="SSI"
            placeholder="$0.00/month"
            min="0.00" 
            v-model.number="SSI"
            id = "SSI"
            value="SSI"
            @input='sendIncomeAdditionalSubtotal(otherIncomeSubtotal)'
        /> per month
        <!-- <span class="validity"></span> -->
        </p>

        <p>Social Security Disability Insurance (SSDI)
        <input
            type="number" name="SSDI"
            placeholder="$0.00/month"
            min="0.00" 
            v-model.number="SSDI"
            id = "SSDI"
            value="SSDI"
            @input='sendIncomeAdditionalSubtotal(otherIncomeSubtotal)'
        /> per month
        <!-- <span class="validity"></span> -->
        </p>
        
        <p>Alimony
          <input
              type="number" name="alimony"
              placeholder="$0.00/month"
              min="0.00" 
              v-model.number="alimony"
              id = "alimony"
              value="alimony"
              @input='sendIncomeAdditionalSubtotal(otherIncomeSubtotal)'
          /> per month
        <!-- <span class="validity"></span> -->
        </p>
        <p>Child Support
          <input
              type="number" name="childSupport"
              placeholder="$0.00/month"
              min="0.00" 
              v-model.number="childSupport"
              id = "childSupport"
              value="childSupport"
              @input='sendIncomeAdditionalSubtotal(otherIncomeSubtotal)'
          /> per month
        <!-- <span class="validity"></span> -->
        </p>
        <p>Pension or Retirement
          <input
              type="number" name="pensionRetirement"
              placeholder="$0.00/month"
              min="0.00" 
              v-model.number="pensionRetirement"
              id = "pensionRetirement"
              value="pensionRetirement"
              @input='sendIncomeAdditionalSubtotal(otherIncomeSubtotal)'
          /> per month
        <!-- <span class="validity"></span> -->
        </p>        
        <!-- <p>Your additional income subtotal is {{ otherIncomeSubtotal }}</p> -->
    </div>
</template>

<script>

export default {
  name: 'incomeAdditional',
  props: {
    coapplicant: Boolean,
    incomeSubtotal: Number,
    incomeSubtotalCoApplicant: Number,
  },

  data() {
    return {
      SNAPWic: 0,
      TANF: 0,
      SSI: 0,
      SSDI: 0,
      alimony: 0,
      childSupport: 0,
      pensionRetirement: 0,
    };
  },

  computed: {
    otherIncomeSubtotal() {
      return (this.SNAPWic + this.TANF + this.SSI + this.SSDI + this.alimony + this.childSupport + this.pensionRetirement);
    },

  },
  methods:{
    sendIncomeAdditionalSubtotal(otherIncomeSubtotal){
      this.$emit('incomeAddSubCalc', otherIncomeSubtotal);
    },
  }
};
</script>

<style <style lang="scss" scoped>
p {
  max-width: 90%;
  text-align: right;
}
</style>
>

</style>
