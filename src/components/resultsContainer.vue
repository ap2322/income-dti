<template>
    <div>
        <h2>Income Level</h2>
        <!-- show total monthly and annual Income
        show Area Median Income % -->

        <h2>Debt-to-Income Ratio (DTI)</h2>
        <p>With a monthly income of XXX and monthly debt obligations of YYY, your debt-to-income ratio 
            estimate is <strong>ZZZ</strong> and your household size is {{ hhSize }}</p>
    </div>
</template>

<script>
import formWizScratch from './formWizScratch.vue';

export default {
    name: 'results',
    props: {
        hhSize: Number,

    },
    components: {
        formWizScratch,
    }
}
</script>

<style>

</style>
