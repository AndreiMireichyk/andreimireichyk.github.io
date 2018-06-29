<template>

    <header id="header" class="light">
        <nav class="navbar">
            <router-link to="/home" class="navbar__brand">
                <i class="icon icon-logo"></i>
                <i class="icon icon-logo-text"></i>
            </router-link>

            <div class="navbar__fix_position">
                <a href="#" class="navbar__toggler">
                    <i class="icon icon-menu"></i>
                </a>
                <a href="#" class="navbar__shopping">
                    <i class="icon icon-shopping"></i>
                </a>

            </div>

            <div class="navbar__collapse">
                <ul class="nav">
                    <li class="nav__item" v-for="item in items">
                        <router-link :to="item.to" class="btn nav__link">{{item.name}}</router-link>
                    </li>
                    <li class="nav__item">
                        <a class="btn btn-dark" @click="showIt()">Оформить заказ</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    import {default as Vuedals, Component as Vuedal, Bus as VuedalsBus} from 'vuedals';
    import amoform from './amoform.vue';

    export default {
        name: "header-layout",
        data() {
            return {
                items: [
                    {name: "Продукты", to: "/products"},
                    {name: "Команда", to: "/team"},
                    {name: "Контакты", to: "/contacts"},
                    {name: "FAQ", to: "/faq"},
                ]
            }
        }, components: {
            Vuedal
        },
        methods: {
            showIt() {
                VuedalsBus.$emit('new', {
                    name: 'AmoForm',
                    size: 'sm',
                    title : "Заполните форму",
                    component: amoform
                });
            }
        }
    }
</script>

<style scoped>

</style>