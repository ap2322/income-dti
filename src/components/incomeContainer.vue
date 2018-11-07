<template>
    <div>
        <income
            v-bind:incomeSubtotal = 'incomeSubtotal'
            @incomeSubCalc="makeIncomeSubCalc"
        /> <!-- primary income form, always show -->
        <button v-if= 'coapplicant' @click='showCoapplicantForm(true); showIncomeAddButton(true)'> Ready to add your spouse/partner/coapplicant's income?</button>
        <incomeCoApplicant 
            v-show='showCoapplicant' 
            v-bind:incomeSubtotalCoApplicant = 'incomeSubtotalCoApplicant'
            @incomeCoSubCalc="coIncomeSubCalc"
        />
        <button v-if='!coapplicant || adFormButton' @click='showIncomeAdditionalForm(true)'>Click to add additional sources of income</button>
        <incomeAdditional 
            v-if='showIncomeAdditional' 
            v-bind:otherIncomeSubtotal = 'otherIncomeSubtotal'
            @incomeAddSubCalc="otherIncomeSubCalc"
        />
        <p>Your approximate monthly income is ${{totalIncome}}. Does this look correct?</p>
        <button v-on:click="sendIncomeTotal(totalIncome)">Yes</button>

        <!-- calculate total household income -->
        <!-- <p>Your annual wage income is {{ incomeSubtotal }} and your co-applicant's annual wage income is {{ incomeSubtotalCoApplicant}}</p>
        <p>Combined all household income is {{ totalIncome }}</p> -->
    </div>
</template>

<script>
import income from './income.vue';
import incomeCoApplicant from './incomeCoApplicant.vue';
import incomeAdditional from './incomeAdditional.vue';
import formWizScratch from './formWizScratch.vue'

export default {
    name: 'incomeContainer',
    props: {
        coapplicant: Boolean,
    },
    data() {
        return {
            showCoapplicant: false,
            showIncomeAdditional: false,
            adFormButton: false,
            incomeSubtotal: 0,
            incomeSubtotalCoApplicant: 0,
            otherIncomeSubtotal: 0,
        }
    },
    components: {
        income,
        incomeCoApplicant,
        incomeAdditional,
    },
    computed:{
        totalIncome() {
            return this.otherIncomeSubtotal + this.incomeSubtotal + this.incomeSubtotalCoApplicant;
        },
    },
  
    methods: {
        showCoapplicantForm(yesno) {
            this.showCoapplicant = yesno;
        },
        showIncomeAddButton(yesno){
            this.adFormButton = yesno;
        },
        showIncomeAdditionalForm(yesno) {
            this.showIncomeAdditional = yesno;
        },
        makeIncomeSubCalc(incomeSubtotal) {
            this.incomeSubtotal = incomeSubtotal;
        },
        coIncomeSubCalc(incomeSubtotalCoApplicant){
            this.incomeSubtotalCoApplicant = incomeSubtotalCoApplicant;
        },
        otherIncomeSubCalc(otherIncomeSubtotal) {
            this.otherIncomeSubtotal = otherIncomeSubtotal;
        },
        sendIncomeTotal(totalIncome){
            this.$emit('totalIncomeCalc', totalIncome);
        },
    }
}
</script>

<style <style lang="scss" scoped>

button {
    background: #494b4c;
color: white; }
a.button.grey:hover, a.button.grey:focus, button.grey:hover, button.grey:focus {
    background: #626566;
    color: white; 
}

</style>


</style>
