import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from "./companents/pages/home.vue";

import Products from "./companents/pages/Products.vue";
import ProdMore from "./companents/pages/products/ProductMore.vue";
import ProdAll from "./companents/pages/products/All.vue";

import Team from "./companents/pages/Team.vue";
import Contacts from "./companents/pages/Contacts.vue";
import Faq from "./companents/pages/Faq.vue";


Vue.use(VueRouter);

const routes = [
    {
        path: '/products', component: Products,
        children: [

            {path: '', name: "All", component: ProdAll},
            {path: 'cell', name: "Cell", component: ProdMore},
            {path: 'rack', name: "Rack", component: ProdMore},
            {path: 'crisper', name: "Crisper", component: ProdMore}
        ]
    },

    {path: '', component: Home},
    {path: '/home', component: Home},
    {path: '/Contacts', component: Contacts},
    {path: '/team', component: Team},
    {path: '/faq', component: Faq}
];

const router = new VueRouter({
    routes,
    //mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0};
    }
});

router.beforeEach((to, from, next) => {

    if ($(".navbar__toggler").hasClass("open")) {
        $(".navbar__toggler").removeClass("open");
        $(".navbar__collapse").removeClass("open");
    }

    next();
});


const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
