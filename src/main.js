import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy';




import Bulma from 'bulma/bulma.sass';
import 'buefy/dist/buefy.css';


// Vue.use(Buefy, {
//     defaultIconPack: 'far',
// });
Vue.use(Bulma);



Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router,
    data: {
        name: "App"
    }
}).$mount('#app')