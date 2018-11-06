<template>
    <div>
        <h2>Co-Applicant Income</h2>
        <p>What is the hourly income from their primary job in $/hour?
        <input
            type="number" name="incomePrimary"
            placeholder="$0.00/hr"
            min="0.00" max="200.00" step="0.01"
            v-model.number="incomePrimary"
            id = "incomePrimary"
            value="incomePrimary"
            @input="sendCoIncomeSubtotal(incomeSubtotalCoApplicant)"
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
            @input="sendCoIncomeSubtotal(incomeSubtotalCoApplicant)"
        />

        <p>Do they have another job?</p>
        <div id="anotherJob" select v-bind="anotherJob">
            <button v-on:click="anotherJob = true">Yes</button>
            <button v-on:click="anotherJob = false">No</button>
        </div>

        <div v-if=anotherJob>
        <p> What is their hourly income from this job?
            <input
                type="number" name="incomeSecondary"
                placeholder="$0.00/hr"
                min="0.00" max="200.00" step="0.01"
                v-model.number="incomeSecondary"
                id = "incomeSecondary"
                value="incomeSecondary"
                @input="sendCoIncomeSubtotal(incomeSubtotalCoApplicant)"
            />
        </p>
        <p>On average, how many hours per week do they work?</p>
            <label for="hoursSecondary">Hours per week </label>
            <input
                type="number" name="hoursSecondary"
                placeholder="20"
                min="0" max="168"
                v-model.number="hoursSecondary"
                id = "hoursSecondary"
                value="hoursSecondary"
                @input="sendCoIncomeSubtotal(incomeSubtotalCoApplicant)"
            />
        </div>

        <!-- <p>Your co-applicant's primary income is {{ incomePrimary }}/hr and {{ monthlyIncome }} monthly.</p>
        <p>Your co-applicant's secondary income is {{ incomeSecondary }}/hr and {{ monthlyIncomeSecondary }} monthly.</p>
        <p>Together, your co-applicant's earned income is {{ incomeSubtotalCoApplicant }}</p> -->

    </div>
</template>

<script>

export default {
  name: 'incomeCoApplicant',

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

    incomeSubtotalCoApplicant() {
      return this.monthlyIncome + this.monthlyIncomeSecondary;
    }
  },
  methods:{
    sendCoIncomeSubtotal(incomeSubtotalCoApplicant){
      this.$emit('incomeCoSubCalc', incomeSubtotalCoApplicant);
    },
  }
}

</script>

<style>

</style>
