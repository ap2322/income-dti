<template>
    <div>
        <h2>Income</h2>
        <p>What is your income from your primary job?</p>
        <label for="incomePrimary">Applicant Primary Income</label>
        <input 
            type="number" name="incomePrimary"
            placeholder="$0.00/hr"
            min="0.00" max="200.00" 
            v-model="incomePrimary" 
            id = "incomePrimary" 
            value="incomePrimary"
            oninput="annualIncome()"/>
        <!-- <span class="validity"></span> -->
        <p>Your annual income is {{ annualIncome }}</p>
    </div>
</template>

<script>
export default {
    name: 'income',
    data: function(){
        return {
            incomeApplicant: 0,
            incomeCoapplicant: 0,
            incomeOther: 0,
            totalIncome: 0,
            annualIncome: 0,
        }

    },
    methods:{
        annualIncome(){
            annualIncome = incomeApplicant * 40 * 50
        },
        totalIncome(){
            totalIncome = incomeApplicant + incomeCoapplicant + incomeOther
        }
    }

}
</script>

<style>

</style>
