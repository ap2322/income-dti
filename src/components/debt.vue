<template>
<!-- TODO 3: create debtIncomeRatio component, connect total household income and debt information to the component -->

    <div>
        <h2>Debt</h2>
        <p>Please enter your total <strong>minimum</strong> monthly payment obligations on the following kinds of debts:</p>
        <div v-for="debt in debts" :key="debt.name">
            <p>{{ debt.name }} 
            <input type="number" 
                id = 'debtInputs'
                name = 'debtInputs'
                v-model.number="debt.minPayment"
                placeholder = '$0.00/month'
                min='0'
                value='minPayment'
            />
            </p>
        </div>
        <p>{{ debtSubtotal }}</p>
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
            },
            
            { 
            name: "Car loan(s)",
            minPayment: 0,
            },
            { 
            name: "Student loan(s)",
            minPayment: 0,
            },
            { 
            name: "Medical payment(s)",
            minPayment: 0,
            },
            {
            name: "Other payments",
            minPayment: 0,
            },
        ],
      }
  },
  computed:{
      debtSubtotal(){
        var sum = this.debts.reduce((accumulator, debts) => accumulator + debts.minPayment, 0);
        console.log(sum);
        return sum;
      }
  }

}
</script>

<style>

</style>
