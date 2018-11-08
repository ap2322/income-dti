<template>
    <div id = 'formWizScratch'>
      <!-- <p>Value passing check: coapplicant {{coapplicant}}; 
        household size {{ hhSize }}; totalIncome {{ totalIncome }}; total debts {{debtSubtotal}}</p> -->
        <form-wizard color="#ff671f"
            title = 'Household Income and Debt Calculator'
            subtitle = 'Calculate your total household income and estimated debt-to-income ratio in 
            preparation for applying for an affordable home.'>
            <tab-content title='Household' icon="ti ti-user">
                <householdInfo
                    v-bind:coapplicant = 'coapplicant'
                    v-bind:hhSize = 'hhSize'
                    @coapplicantSpecified="setCoapplicant"
                    @hhSizeInput = "setHHSize"
                />
            </tab-content>
            <tab-content title='Income' icon="ti ti-money">
                <incomeContainer
                  v-bind:coapplicant = 'coapplicant'
                  v-bind:totalIncome = 'totalIncome'
                  @totalIncomeCalc = 'sendIncomeTotal'
                />
            </tab-content>
            <tab-content title='Debt' icon= "ti ti-receipt">
                <debtForm
                  v-bind:debtSubtotal = 'debtSubtotal'
                  @debtCalc = 'sendDebtSubtotal'
                />
            </tab-content>
            <tab-content title='Results' icon="ti ti-bar-chart">
                <results
                v-bind:hhSize = 'hhSize'
                v-bind:totalIncome = 'totalIncome'
                v-bind:debtSubtotal = 'debtSubtotal'
                />
            </tab-content>
        </form-wizard>
    </div>
</template>

<script>

import householdInfo from './householdInfo.vue';
import incomeContainer from './incomeContainer.vue';
import debtForm from './debt.vue';
import results from './resultsContainer.vue';

export default {
  name: 'formWizScratch',
  data() {
    return {
      coapplicant: false,
      hhSize: 1,
      totalIncome: 0,
      debtSubtotal: 0,
    };
  },
  props: {
    title: {
      type: String,
      default: 'Household Income and Debt Calculator',
    },
    subtitle: {
      type: String,
      default: 'Calculate your total household income and debt-to-income ratio',
    },
    nextButtonText: {
      type: String,
      default: 'Next',
    },
    backButtonText: {
      type: String,
      default: 'Back',
    },
    finishButtonText: {
      type: String,
      default: 'Finish',
    },
    stepSize: {
      type: String,
      default: 'md',
      validator: (value) => {
        const acceptedValues = ['xs', 'sm', 'md', 'lg'];
        return acceptedValues.indexOf(value) !== -1;
      },
    },
    /** *
         *  Sets validation (on/off) for back button. By default back button ignores validation
         */
    validateOnBack: Boolean,
    /** *
         * Applies to text, border and circle
         */
    color: {
      type: String,
      default: '#ff671f', // circle, border and text color
    },
    /** *
         *  Is set to current step and text when beforeChange function fails
         */
    errorColor: {
      type: String,
      default: '#8b0000',
    },
    /**
         * Can take one of the following values: 'circle|square|tab`
         */
    shape: {
      type: String,
      default: 'circle',
    },
    /**
         * name of the transition when transition between steps
         */
    transition: {
      type: String,
      default: '', // name of the transition when transition between steps
    },
    /** *
         * Index of the initial tab to display
         */
    startIndex: {
      type: Number,
      default: 0,
    },
  },
  components: {
    householdInfo,
    incomeContainer,
    debtForm,
    results,
  },

  methods: {
    setCoapplicant(yesno) {
      this.coapplicant = yesno;
    },
    setHHSize(hhSize) {
      this.hhSize = hhSize;
    },
    sendIncomeTotal(totalIncome) {
      this.totalIncome = totalIncome;
    },
    sendDebtSubtotal(debtSubtotal) {
      this.debtSubtotal = debtSubtotal;
    },
  },
};
</script>

<style>
</style>
