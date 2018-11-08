<template>
    <div>
        <h2>Income Level</h2>
            <p>With a household size of {{ hhSize }} and calculated monthly income of ${{ totalIncome }},
                you earn approximately ${{ annualIncome }} annually.</p>
            <p>For the metro Denver area, this means you earn apprixmately {{ individualAMI }}% of the
                area median income. The median income for a household of {{ hhSize}} is
                {{ medianIncomebyHouseholdSize[(hhSize-1)].ami100 }} </p>

        <h2>Debt-to-Income Ratio (DTI)</h2>
            <p>With monthly debt obligations of {{ debtSubtotal }}, your debt-to-income ratio 
                estimate is <strong>{{ dtiEstimate }}% </strong></p>
            <!-- <div v-for="oneMedIncHH in medianIncomebyHouseholdSize" :key="oneMedIncHH.housesize">
                <p>{{ oneMedIncHH.housesize }} </p>      
            </div> -->
            <div v-if='lowIncome(annualIncome, hhSize, medianIncomebyHouseholdSize)'>
                <lowIncomeContent/><span>Though we don't have homes available at this income level,
                an affordable mortgage payment calculated at 30% of your monthly income
                would be about ${{ mortgageEstimate }}.</span>
            </div>
            <div v-if='highIncome(annualIncome, hhSize, medianIncomebyHouseholdSize)'>
                <highIncomeContent/>
            </div>
            
            <div v-if='midlowIncome(annualIncome, hhSize, medianIncomebyHouseholdSize)'>
                <midlowIncomeContent/><span>Your affordable mortgage costs, calculated at 30% of your monthly income
                would be about ${{ mortgageEstimate }}.</span>
            </div>
            
            <div v-if='dtiNoMortgage >= dtiThresholdNoMortgage'>
                <dtiHighContent/> 
                <!-- TODO: Pass debt information into dtiHighContent componenet -->
            </div>
            <div v-else> Looks like you have a healthy DTI at {{ dtiNoMortgage }}% without a mortgage.
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

<style>

</style>
