import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import store from './store'
import WebpPlugun from 'vue-webp-plugin';



Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(WebpPlugun);

const router = new VueRouter({
    routes
});
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')