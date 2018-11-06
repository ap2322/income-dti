<template>
    <div>
        <h2>Household</h2>
        <p>Will you be applying for an affordable home mortgage with a spouse/partner?</p>

        <div>
            <button v-on:click="setCoapplicant(true)">Yes</button>
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
            v-model="hhSize"
            id = "hhSize"
            value="hhSize"
            @input="setHHSize(hhSize)"/>
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
      hhSize: '',
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
  },
};
</script>

<style>

</style>
