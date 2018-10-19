<template>
    <div>
        <h2>Household</h2> 
        <p>Will you be applying for a Habitat home with a spouse/partner?</p>

        <div id="example-3" select v-bind="coapplicant">
            <button v-on:click="coapplicant = true">Yes</button>
            <button v-on:click="coapplicant = false">No</button>
        </div>
        <p> Applying with a coapplicant? {{ coapplicant }} </p>
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
            coapplicant: false,
            hhSize:'',
            selected: 1,
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
