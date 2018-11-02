<template>
<!-- TODO1: make this income container receive data from income.vue, incomeCoApplicant.vue, 
and incomeAdditional.vue... and parent formWizScratch.vue  -->
<!-- TODO2: conditionally show incomeCoapplicant form and incomeAdditional form -->
<!-- TODO3: Show information from this container up to parent formWizScratch.vue.-->
    <div>
        <income/> <!-- primary income form, always show -->
        <incomeCoApplicant v-if='showCoapplicant'        
        />
        <incomeAdditional v-if='showIncomeAdditional'/>
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
        showCoapplicant: Boolean,
        showIncomeAdditional: Boolean,
    },
    data() {
        return {
            coapplicant: false,
            showCoapplicant: false,
            showIncomeAdditional: false,
        }
    },
    components: {
        householdInfo,
        income,
        incomeCoApplicant,
        incomeAdditional,
    },
  
    methods: {
        // showIncomeForm(yesno){
        //     this.showIncome = yesno;
        // }
        showCoapplicantForm(yesno) {
            this.showCoapplicant = yesno;
        },
        showIncomeAdditionalForm(yesno) {
            console.log('we clicked this button');
            this.showIncomeAdditional = yesno;
        }
    }
}
</script>

<style>

</style>
