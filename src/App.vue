<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <listtest /> -->
    <!-- <formWiz/> -->
    <formWizScratch/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import listtest from './components/listtest.vue' 
// import formWiz from './components/formWiz.vue'
import formWizScratch from './components/formWizScratch.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    // listtest,
    // formWiz,
    formWizScratch,
    // FormWizard,
    // TabContent
  }
}
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
