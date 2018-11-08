<template>
    <div>
        <h2>Income Level</h2>
        <!-- https://vuejs.org/v2/guide/computed.html#Computed-Setter -->
        <p>hhSize {{ hhSize }}, totalIncome {{ totalIncome }}, debts {{debtSubtotal}}

        <h2>Debt-to-Income Ratio (DTI)</h2>
        <p>With a monthly income of {{ totalIncome }} and monthly debt obligations of {{ debtSubtotal }}, your debt-to-income ratio 
            estimate is <strong>{{ dtiEstimate }}</strong> 
            your mortgage estimate is {{ mortgageEstimate }};
            your debts including a mortage are {{ debtsInclMortgage}};
            and your household size is {{ hhSize }}
            without a mortgage, your dti estimate is {{ dtiNoMortgage }}
        </p>
        <span>{{medianIncomebyHouseholdSize.monthly}}</span>
        <!-- Output 1: Income too low <
            Output 1.5: Income too high -->
        <!-- Output 2: DTI too high -->
        <!-- Output 3: Income 80-120% -->

    </div>
</template>

<script>
import formWizScratch from './formWizScratch.vue';

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
                { housesize:1, ami100: 62938 },
                { housesize:2, ami100: 71938 },
                { housesize:3, ami100: 80938 },
                { housesize:4, ami100: 89875 },
                { housesize:5, ami100: 97125 },
                { housesize:6, ami100: 104313 },
                { housesize:7, ami100: 111500 },
                { housesize:8, ami100: 118688 },
                { housesize:9, ami100: 125875 },
                { housesize:10, ami100: 133063 },
            ],
        }
    },
    components: {
        formWizScratch,
    },
    computed:{
        mortgageEstimate() {
            return this.totalIncome*.3;
        },
        dtiNoMortgage() {
            return this.debtSubtotal/this.totalIncome;
        },
        debtsInclMortgage(){
            return (this.debtSubtotal + this.mortgageEstimate);
        },
        dtiEstimate(){
            return this.debtsInclMortgage/this.totalIncome;
        },
    },
    methods: {
        
    }
}
</script>

<style>

</style>
