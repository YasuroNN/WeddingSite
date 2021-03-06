import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import VueCountdownTimer from 'vuejs-countdown-timer';
import './styles/styles.scss'

Vue.config.productionTip = false
Vue.use(VueCountdownTimer);

new Vue({
    vuetify,
    store,
    router,
    render: h => h(App)
}).$mount('#app')
