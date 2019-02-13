<template>
    <div>
        <h2>Income Level</h2>
            <div class = 'resultsOutput'>
                <h3>Household Summary</h3>
                    <ul>
                        <li>Household Size: {{ hhSize }}</li>
                        <li>Monthly household income estimate: {{ totalIncome | currency }}</li>
                        <li>Annual household income estimate: {{ annualIncome | currency }} </li>

                        <br>
                        <li>Monthly debt obligations estimate: {{ debtSubtotal | currency }}</li>
                        <li><strong>Debt-to-Income Ratio (DTI) </strong>estimate: {{ dtiEstimate | round }}%</li>

                    </ul>
                <h3>Area Median Income</h3>
                    <p>Your income and household size is {{ individualAMI | round }}% of the
                    area median income. The metro Denver area median income for a household of {{ hhSize}} is
                    {{ medianIncomebyHouseholdSize[(hhSize-1)].ami100 | currency }} per year.</p>
                    
                    <hr>
            <h3>Estimated Program Qualifications</h3>
            <h4>Income</h4>
                <div v-if='lowIncome(annualIncome, hhSize, medianIncomebyHouseholdSize)'>
                    <lowIncomeContent/><span>No homes are available at this income level, but
                    an affordable mortgage payment calculated at 30% of your monthly income
                    would be about {{ mortgageEstimate | currency }}.</span>
                </div>
                <div v-if='highIncome(annualIncome, hhSize, medianIncomebyHouseholdSize)'>
                    <highIncomeContent/>
                </div>
                
                <div v-if='midlowIncome(annualIncome, hhSize, medianIncomebyHouseholdSize)'>
                    <midlowIncomeContent/><span>Your affordable mortgage costs, calculated at 30% of your monthly income
                    is estimated at {{ mortgageEstimate | currency }}.</span><br>
                </div>
            
            <h4>Debt-to-Income Ratio</h4>
                <div v-if='dtiNoMortgage >= dtiThresholdNoMortgage'>
                    <dtiHighContent/> 
                    <!-- TODO: Pass debt information into dtiHighContent componenet -->
                </div>
                <div v-else> Your current estimated debt-to-income ratio is {{ dtiNoMortgage | round }}%. This level of debt obligation
                    is in the acceptable range to qualify for an affordable home mortgage.
                </div>
            </div>
    </div>
</template>

<script>
import formWizScratch from './formWizScratch.vue';
import lowIncomeContent from './resultsLowIncome.vue';
import highIncomeContent from './resultsHighIncome.vue';
import midlowIncomeContent from './resultsMidLowIncome.vue';
import dtiHighContent from './resultsDTIHigh.vue'

export default {
    name: 'results',
    props: {
        hhSize: Number,
        totalIncome: Number,
        debtSubtotal: Number,
    },
    data: function(){
        return{
            medianIncomebyHouseholdSize:[
                { housesize: 1, ami100: 62938 },
                { housesize: 2, ami100: 71938 },
                { housesize: 3, ami100: 80938 },
                { housesize: 4, ami100: 89875 },
                { housesize: 5, ami100: 97125 },
                { housesize: 6, ami100: 104313 },
                { housesize: 7, ami100: 111500 },
                { housesize: 8, ami100: 118688 },
                { housesize: 9, ami100: 125875 },
                { housesize: 10, ami100: 133063 },
            ],
            dtiThreshold: 43,
            dtiThresholdNoMortgage: 13,
        }
    },
    components: {
        formWizScratch,
        lowIncomeContent,
        highIncomeContent,
        midlowIncomeContent,
        dtiHighContent,
    },
    filters: {
        round: function(longNum) {
            return longNum.toFixed(2);
        },

        currency: function(num) {
            return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        },
    },

    computed:{
        mortgageEstimate() {
            return this.totalIncome*.3;
        },
        dtiNoMortgage() {
            return 100*this.debtSubtotal/this.totalIncome; //as a percent 
        },
        debtsInclMortgage(){
            return 100*(this.debtSubtotal + this.mortgageEstimate); //as a percent
        },
        dtiEstimate(){
            return this.debtsInclMortgage/this.totalIncome;
        },
        annualIncome(){
            return this.totalIncome*12;
        },
        individualAMI(){
            return (100*this.annualIncome/this.medianIncomebyHouseholdSize[this.hhSize-1].ami100)
        }
    },
    methods: {
        lowIncome(annualIncome, hhSize, medianIncomebyHouseholdSize) {
             var lowami = .5*this.medianIncomebyHouseholdSize[(this.hhSize-1)].ami100;
             if (annualIncome < lowami){
                 return true;
             }
        },
        highIncome(annualIncome, hhSize, medianIncomebyHouseholdSize) {
            var highami = .8*this.medianIncomebyHouseholdSize[(this.hhSize-1)].ami100;
            if (annualIncome > highami){
                return true;
            }
        },

        midlowIncome(annualIncome, hhSize, medianIncomebyHouseholdSize) {
            var highami = .8*this.medianIncomebyHouseholdSize[(this.hhSize-1)].ami100;
            var lowami = .5*this.medianIncomebyHouseholdSize[(this.hhSize-1)].ami100;
            if (annualIncome > lowami && annualIncome < highami){
                return true;
            }
        },
        
    }
}
</script>

<style style lang="scss" scoped>
    .resultsOutput {
        max-width: 600px;
        margin: auto;
        text-align: left;
    }
</style>
