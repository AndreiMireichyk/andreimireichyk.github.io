<template>
    <div id="app">
        <header-layout></header-layout>
        <router-view></router-view>
        <footer-layout></footer-layout>
    </div>
</template>

<script>
    import header from './companents/layout/header.vue';
    import footer from './companents/layout/footer.vue';
    import modal from './companents/layout/modal.vue';

    export default {
        name: 'app',
        components: {
            "header-layout": header,
            "footer-layout": footer,
            "modal": modal,
        },
        data() {
            return {

            };
        }
    }
</script>

<style lang="scss">

</style>
