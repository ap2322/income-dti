<template>
    <div>
        <h2>Income</h2>
        <p>What is your hourly income from your primary job?
        <!-- <label for="incomePrimary">Applicant Primary Income</label> -->
        <input
            type="number" name="incomePrimary"
            placeholder="$0.00/hr"
            min="0.00" max="200.00" step="0.01"
            v-model="incomePrimary"
            id = "incomePrimary"
            value="incomePrimary"
        />
        <!-- <span class="validity"></span> -->
        </p>

        <p>On average, how many hours per week do you work?</p>
        <label for="hoursPerWeek">Hours per week </label>
        <input
            type="number" name="hoursPerWeek"
            placeholder="40"
            min="0" max="168"
            v-model="hoursPerWeek"
            id = "hoursPerWeek"
            value="hoursPerWeek"
        />

        <p>Do you have another job?</p>
        <div id="anotherJob" select v-bind="anotherJob">
            <button v-on:click="anotherJob = true">Yes</button>
            <button v-on:click="anotherJob = false">No</button>
        </div>

        <div v-if=anotherJob>
        <p> What is your hourly income from this job?
            <input
                type="number" name="incomeSecondary"
                placeholder="$0.00/hr"
                min="0.00" max="200.00" step="0.01"
                v-model="incomeSecondary"
                id = "incomeSecondary"
                value="incomeSecondary"
            />
        </p>
        <p>On average, how many hours per week do you work?</p>
            <label for="hoursSecondary">Hours per week </label>
            <input
                type="number" name="hoursSecondary"
                placeholder="20"
                min="0" max="168"
                v-model="hoursSecondary"
                id = "hoursSecondary"
                value="hoursSecondary"
            />
        </div>

        <p>Your primary income is {{ incomePrimary }}/hr and {{ annualIncome }} annually.</p>
        <p>Your secondary income is {{ incomeSecondary }}/hr and {{ annualIncomeSecondary }} annually.</p>
        <p>Together, your earned income is {{ totalIncome }}</p>

        <button v-show='coapplicant' v-on:click='showCoapplicantForm(true)'> Ready to add your spouse/partner/coapplicant's income?</button>
        <button v-show='additionalIncome' v-on:click='showIncomeAdditionalForm(true)'>What other types of income do you collect?</button>

    </div>
</template>

<script>

export default {
  name: 'income',
  props: {
    coapplicant: Boolean,
    showCoapplicant: Boolean,
    showIncomeAdditional: Boolean,
  },

  data() {
    return {
      incomePrimary: 0,
      hoursPerWeek: 40,
      incomeSecondary: 0,
      hoursSecondary: 20,
      anotherJob: false,
    };
  },
  computed: {
    annualIncome() {
      return this.incomePrimary * this.hoursPerWeek * 50;
    },

    annualIncomeSecondary() {
      return this.incomeSecondary * this.hoursPerWeek * 50;
    },

    totalIncome() {
      return this.annualIncome + this.annualIncomeSecondary;
    },
  },
  methods: {
    showCoapplicantForm(yn) {
      this.$emit('showCoapplicantInputs', yn);
    },
    showIncomeAdditionalForm(yn) {
      this.$emit('showIncomeAdditionalInputs', yn);
    }
  },


};
</script>

<style>

</style>
