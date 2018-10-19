<template>
    <div id = 'formWizScratch'>
        <form-wizard>
            <tab-content title='Household' icon="ti ti-user">
                <householdInfo />
            </tab-content>
            <tab-content title='Income' icon="ti ti-money">
                <income/>
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

export default {
    name: 'formWizScratch',
    props: {
        title: {
            type: String,
            default: 'Awesome Wizard'
        },
        subtitle: {
            type: String,
            default: 'Split a complicated flow in multiple steps'
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
            default: '#e74c3c' //circle, border and text color
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
    }
}
</script>

<style>

</style>
