<template>
    <div>
        <h2>Household</h2> 
        <p>Will you be applying for a Habitat home with a spouse/partner?</p>
        <select v-bind="coapplicant">
        <option disabled value="">Please select one</option>
            <option value = 1>Yes</option>
            <option value = 2>No</option>
        </select>
        <!-- <p> {{ data.coapplicant }} </p> -->
        <br>
        <p>What is your household size?</p>

        <!-- <select v-model="selected" id = "household">
            <option disabled value = 1 >Number of people including yourself </option>
        </select> -->
        <label for="hhSize">Household Size</label>
        <input 
            type="number" name="householdSize"
            placeholder="Min: 1, Max: 10"
            min="1" max="10" 
            v-model="hhSize" 
            id = "hhSize" 
            value="hhSize"
            oninput="admessage()"/>
        <!-- <span class="validity"></span> -->
        <p>Your household size is {{hhSize}}</p>
    </div>
</template>

<script>
export default {
    name: "household",
    data: function(){
        return{
            coapplicant:0,
            hhSize:'',
            selected: 1,
            options: [
                { text: 'One', value: 1 },
                { text: 'Two', value: 2 },
                { text: 'Three', value: 3 }
                ],
        }
    },

    methods: {
        admessage(id){
            console.log(this.hhSize)
        }
    }
}
</script>

<style>

</style>
