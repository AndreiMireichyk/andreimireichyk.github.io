<template>
    <div>
        <div ref="amoform"></div>
    </div>
</template>

<script>
    export default {
        name: "amoform",
        mounted(){
            let elem = document.createElement('script');
            elem.setAttribute('src', 'https://forms.amocrm.ru/forms/assets/js/amoforms.js');
            elem.setAttribute('async', 'async');
            elem.setAttribute('id', 'amoforms_script');
            this.$refs.amoform.appendChild(elem);
        }
    }
</script>

<style scoped>

</style>