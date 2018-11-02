<template>
  <div id="app">
    <formWizScratch/>
  </div>
</template>

<script>
import formWizScratch from './components/formWizScratch.vue';

export default {
  name: 'app',
  components: {
    formWizScratch,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #202c38;
  margin-top: 60px;
}
</style>
