<template>
    <div id="app">
        <header-layout></header-layout>
        <router-view></router-view>
        <footer-layout></footer-layout>
        <vuedal><div>asd asdas asdasd asdas</div></vuedal>
    </div>
</template>

<script>
    import header from './companents/layout/header.vue';
    import footer from './companents/layout/footer.vue';
    import {default as Vuedals, Component as Vuedal, Bus as VuedalsBus} from 'vuedals';

    export default {
        name: 'app',
        components: {
            "header-layout": header,
            "footer-layout": footer,
            Vuedal
        },
        data() {
            return {

            };
        }
    }
</script>

<style lang="scss">

</style>
