<template>
    <div>
        <h2>Household</h2>
        <p>Will you be applying for an affordable home mortgage with a spouse/partner?</p>

        <div>
            <button class="button green" v-on:click="setCoapplicant(true)">Yes</button>
            <button v-on:click="setCoapplicant(false)">No</button>
        </div>
        <!-- <p> Applying with a coapplicant? {{ coapplicant }} </p> -->
        <br>
        <p>What is your household size?</p>
        <label for="hhSize">Household Size</label>
        <input
            type="number" name="householdSize"
            placeholder="Min: 1, Max: 10"
            min="1" max="10"
            v-model.number="hhSize"
            id="out-of-range-input"
            value="hhSize"
            @input="setHHSize(hhSize)"/>
        <span v-show='!validInput(hhSize)' class="help-text"></span>
        <!-- <span class="validity"></span> -->
        <!-- <p>Your household size is {{hhSize}}</p> -->
    </div>
</template>

<script>
export default {
  name: 'householdInfo',
  props: {
    coapplicant: Boolean,
  },
  data() {
    return {
      hhSize: 1,
      selected: 1,
    };
  },
  methods: {
    setCoapplicant(yn) {
      this.$emit('coapplicantSpecified', yn);
      if (yn) {
        this.hhSize = 2;
      }
    },
    setHHSize(hhSize) {
      this.$emit('hhSizeInput', hhSize);
    },
    validInput(hhSize){
      if (typeof(hhSize) == Number){
        if (hhSize >0 && hhSize <= 10){
          return true;
        }
      }
      return false;
    }
  },
};
</script>

<style>

</style>
