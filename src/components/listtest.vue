<template>
<div>
    <h1>{{ title }}</h1>
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>Picked: {{ picked }}</span>
    </div>
</template>

<script>
export default {
  name: 'listtest',
  props: {
    title: {
      type: String,
      default: 'title is nothing is specified',
    },
    likes: Number,
    picked: Boolean,
    commentIds: Array,
    author: Object,
  },
};

</script>

<style>

</style>
