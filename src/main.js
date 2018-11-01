import Vue from 'vue';
import VueFormWizard from 'vue-form-wizard';
import App from './App.vue';

import 'vue-form-wizard/dist/vue-form-wizard.min.css';
// import '@icon/themify-icons'
// import '@icon/themify-icons/themify-icons.css'
// import '@icon/themify-icons/themify-icons.svg'
import './assets/styles.scss';

Vue.use(VueFormWizard);


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
