import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Contacts from './components/pages/Contacts.vue'
import Home from './components/pages/Home.vue'
import Accept from './components/pages/Accept.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/', redirect: "/home"},
    { path: '/home', component : Home, name: 'main'},
    { path: '/contacts', component : Contacts, name: 'contacts'},
    { path: '/accept', component : Accept, name: 'accept'}
];
const router = new VueRouter({routes, mode: "history"});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
