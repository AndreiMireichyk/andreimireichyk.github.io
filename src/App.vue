<template>
    <div id="app">
        <header-app></header-app>
        <transition name="router">
            <router-view></router-view>
        </transition>
        <footer-app/>
    </div>
</template>

<script>
    import HeaderApp from './components/layout/Header.vue'
    import FooterApp from './components/layout/Footer.vue'

    export default {
        name: 'app',
        components: {
            HeaderApp,
            FooterApp
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style lang="scss">

</style>
