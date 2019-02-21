<template>
    <div>
        <h2>Debt</h2>
        <p> test {{ debts[2]}} </p>
        <p> test2 {{ debts[2].name}}</p>
        <p> test3 {{ debts[2].deferredAmt }}</p>

        <p>Please enter your total <strong>minimum</strong> monthly payment obligations on the following kinds of debts:</p>
        <div v-for="debt in debts" :key="debt.name" class='debtlist'>
            <p>{{ debt.name }} 
            <input type="number" 
                id = 'debtInputs'
                name = 'debtInputs'
                v-model.number="debt.minPayment"
                placeholder = '$0.00/month'
                min=0
                value='minPayment'
                @input='sendDebtSubtotal(debtSubtotal)'
            /> 
            </p>
        </div>
        <p><strong>Do you currently have deferred loans?</strong> 
            Loans you don't have to make payments on at this time.        
        </p>
        <div>
            <button class="button green" v-on:click="haveDeferred=true">Yes</button>
            <button v-on:click="haveDeferred=false">No</button>
        </div>
        <div v-if="haveDeferred">
            <p>Please enter the <strong>total deferred loan amount</strong></p>
            <label for="debts[2]"> {{ debts[2].name}}</label>
            <input type="number" 
                id = 'debtInputs'
                name = 'debtInputs'
                v-model.number="debts[2].deferredAmt"
                min=0
                value='debts[2].deferredAmt'
                @input='sendDebtSubtotal(debtSubtotal)'
                />
        </div>
    </div>
</template>

<script>
export default {
  name: 'debtForm',
  data: function(){
      return {
        debts: [
            { 
            name: "Credit card(s)", 
            minPayment: 0,
            deferredAmt: 0,            
            },
            
            { 
            name: "Car loan(s)",
            minPayment: 0,
            deferredAmt: 0,            
            },
            { 
            name: "Student loan(s)",
            minPayment: 0,
            deferredAmt: 0,
            },
            { 
            name: "Medical payment(s)",
            minPayment: 0,
            deferredAmt: 0,
            },
            {
            name: "Other payments",
            minPayment: 0,
            deferredAmt: 0,
            },
        ],
        haveDeferred: false,
      }
  },
  computed:{
      debtSubtotal1(){
        var sum = this.debts.reduce((accumulator, debts) => accumulator + debts.minPayment, 0);
        console.log(sum);
        return sum;
      },
      deferredSubtotal() {
          var sum1percent = (this.debts.reduce((accumulator, debts) => accumulator + debts.deferredAmt, 0))*.01;
          console.log(sum1percent);
          return sum1percent;
      },
      debtSubtotal() {
          return this.debtSubtotal1 + this.deferredSubtotal;
      }
  },
  methods: {
    sendDebtSubtotal(debtSubtotal){
        this.$emit('debtCalc', debtSubtotal);
    },
    },
}
</script>

<style style lang="scss" scoped>
    .debtlist {
        max-width: 390px;
        margin: auto;
        text-align: right;
    }
</style>
