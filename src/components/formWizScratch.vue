<template>
    <div id = 'formWizScratch'>
        <form-wizard color="#ff671f"
            title = 'Household Income and Debt Calculator'
            subtitle = 'Calculate your total household income and debt-to-income ratio'>
            <tab-content title='Household' icon="ti ti-user">
                <householdInfo
                    v-bind:coapplicant = 'coapplicant'
                    @coapplicantSpecified="setCoapplicant"
                />
            </tab-content>
            <tab-content title='Income' icon="ti ti-money">
                <income
                    v-bind:coapplicant = 'coapplicant'
                    v-bind:showCoapplicant ='showCoapplicant'
                    @showCoapplicantInputs='showCoapplicantForm'
                />
                <incomeCoApplicant v-if='showCoapplicant'/>
            </tab-content>
            <tab-content title='Debt'>
                Debt
            </tab-content>
            <tab-content title='Results'>
                Results
            </tab-content>
        </form-wizard>
    </div>
</template>

<script>

import householdInfo from './householdInfo.vue'
import income from './income.vue'
import incomeCoApplicant from './incomeCoApplicant.vue'

export default {
    name: 'formWizScratch',
    data: function() {
        return {
            coapplicant: false,
            showCoapplicant: false,
        };
    },
    props: {
        title: {
            type: String,
            default: 'Household Income and Debt Calculator'
        },
        subtitle: {
            type: String,
            default: 'Calculate your total household income and debt-to-income ratio'
        },
        nextButtonText: {
            type: String,
            default: 'Next'
        },
        backButtonText: {
            type: String,
            default: 'Back'
        },
        finishButtonText: {
            type: String,
            default: 'Finish'
        },
        stepSize: {
            type: String,
            default: 'md',
            validator: (value) => {
            let acceptedValues = ['xs', 'sm', 'md', 'lg']
            return acceptedValues.indexOf(value) !== -1
            }
        },
        /***
         *  Sets validation (on/off) for back button. By default back button ignores validation
         */
        validateOnBack: Boolean,
        /***
         * Applies to text, border and circle
         */
        color: {
            type: String,
            default: '#ff671f' //circle, border and text color
        },
        /***
         *  Is set to current step and text when beforeChange function fails 
         */
        errorColor: {
            type: String,
            default: '#8b0000'
        },
        /**
         * Can take one of the following values: 'circle|square|tab`
         */
        shape: {
            type: String,
            default: 'circle'
        },
        /**
         * name of the transition when transition between steps
         */
        transition: {
            type: String,
            default: '' //name of the transition when transition between steps
        },
        /***
         * Index of the initial tab to display
         */
        startIndex: {
            type: Number,
            default: 0
        }
    },
    components: {
        householdInfo,
        income,
        incomeCoApplicant,
    },

    methods: {
        setCoapplicant: function(yesno){
            this.coapplicant = yesno;
        },
        showCoapplicantForm: function(yesno){
            this.showCoapplicant = yesno;
        }
    }
}
</script>

<style>

</style>
