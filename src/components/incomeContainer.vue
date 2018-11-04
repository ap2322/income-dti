<template>
<!-- TODO3: Show information from this container up to parent formWizScratch.vue.-->
    <div>
        <p>Debugging: Coapplicant? {{ coapplicant }}</p>
        <income
            v-bind:incomeSubtotal = 'incomeSubtotal'
        /> <!-- primary income form, always show -->
        <button v-if= 'coapplicant' @click='showCoapplicantForm(true); showIncomeAddButton(true)'> Ready to add your spouse/partner/coapplicant's income?</button>
        <incomeCoApplicant v-show='showCoapplicant' v-bind:incomeSubtotalCoApplicant = 'incomeSubtotalCoApplicant'/>
        <button v-if='!coapplicant || adFormButton' @click='showIncomeAdditionalForm(true)'>What other types of income do you collect?</button>
        <incomeAdditional v-if='showIncomeAdditional' v-bind:otherIncomeSubtotal = 'otherIncomeSubtotal'/>

        <!-- calculate total household income -->
        <p>Your annual wage income is {{ incomeSubtotal}} and your co-applicant's annual wage income is {{ incomeSubtotalCoApplicant}}</p>
        <p>Combined all household income is {{ totalIncome }}</p>
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
        incomeSubtotal: Number,
        incomeSubtotalCoApplicant: Number,
        otherIncomeSubtotal: Number,
    },
    data() {
        return {
            showCoapplicant: false,
            showIncomeAdditional: false,
            adFormButton: false,
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
        incomeSubtotalCalc(incomeSubtotal){
            this.incomeSubtotal = incomeSubtotal;
        }

    }
}
</script>

<style>

</style>
