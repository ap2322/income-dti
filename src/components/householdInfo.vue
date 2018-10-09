<template>
    <div>
        <h2>Household</h2> 
        <p>Will you be applying for a Habitat home with a spouse/partner?</p>
        <select v-model="coapplicant">
        <option disabled value="">Please select one</option>
            <option value = 1>Yes</option>
            <option value = 2>No</option>
        </select>
        <br>
        <p>What is your household size?</p>

        <select v-model="selected" id = "household">
            <option disabled value = 1>Number of people including yourself </option>
            <option v-for="person in hhSize" :key="option.value" selected = option.value>
                {{ option.value }}
            </option>
            </select>
    </div>
</template>

<script>
export default {
    name: "household",
    data: {
        coapplicant: 0,
        hhSize:1,
        selected: 1,
        options: [
            { text: 'One', value: 1 },
            { text: 'Two', value: 2 },
            { text: 'Three', value: 3 }
            ],
    },
    methods: {

    }
}
</script>

<style>

</style>
