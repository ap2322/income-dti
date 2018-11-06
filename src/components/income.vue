<template>
    <div>
        <h2>Income</h2>
        <p>What is your hourly income from your primary job?
        <!-- <label for="incomePrimary">Applicant Primary Income</label> -->
        <input
            type="number" name="incomePrimary"
            placeholder="$0.00/hr"
            min="0.00" max="200.00" step="0.01"
            v-model.number="incomePrimary"
            id = "incomePrimary"
            value="incomePrimary"
            @input='sendIncomeSubtotal(incomeSubtotal)'
        />
        <!-- <span class="validity"></span> -->
        </p>

        <p>On average, how many hours per week do you work?</p>
        <label for="hoursPerWeek">Hours per week </label>
        <input
            type="number" name="hoursPerWeek"
            placeholder="40"
            min="0" max="168"
            v-model.number="hoursPerWeek"
            id = "hoursPerWeek"
            value="hoursPerWeek"
            @input='sendIncomeSubtotal(incomeSubtotal)'
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
                v-model.number="incomeSecondary"
                id = "incomeSecondary"
                value="incomeSecondary"
                @input='sendIncomeSubtotal(incomeSubtotal)'
            />
        </p>
        <p>On average, how many hours per week do you work?</p>
            <label for="hoursSecondary">Hours per week </label>
            <input
                type="number" name="hoursSecondary"
                placeholder="20"
                min="0" max="168"
                v-model.number="hoursSecondary"
                id = "hoursSecondary"
                value="hoursSecondary"
                @input='sendIncomeSubtotal(incomeSubtotal)'
            />
        </div>

        <!-- <p>Your primary income is {{ incomePrimary }}/hr and {{ monthlyIncome }} monthly.</p>
        <p>Your secondary income is {{ incomeSecondary }}/hr and {{ monthlyIncomeSecondary }} monthly.</p>
        <p>All together, your earned income is {{ incomeSubtotal }} every month.</p> -->

    </div>
</template>

<script>

export default {
  name: 'income',
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
    monthlyIncome() {
      return this.incomePrimary * this.hoursPerWeek * 4;
    },

    monthlyIncomeSecondary() {
      return this.incomeSecondary * this.hoursSecondary * 4;
    },

    incomeSubtotal() {
      return this.monthlyIncome + this.monthlyIncomeSecondary;
    },
  },
  methods:{
    sendIncomeSubtotal(incomeSubtotal){
      this.$emit('incomeSubCalc', incomeSubtotal);
    },
  }
};
</script>

<style>

</style>
