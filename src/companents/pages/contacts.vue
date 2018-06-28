<template>
    <div>
        <main id="contacts" class="contacts">
            <h3 class="contacts__title">Служба поддержки</h3>
            <p class="contacts__desc"><a class="btn btn-link" href="mailto:support@bixbit.io">support@bixbit.io</a></p>
            <h3 class="contacts__title">Отдел продаж</h3>
            <p class="contacts__desc"><a class="btn btn-link" href="mailto:sales@bixbit.ioo">sales@bixbit.io</a></p>
            <h3 class="contacts__title">Адрес</h3>

            <p class="contacts__desc">
                Юридический адрес: г Смоленск, пос. Пронино, здание АБК, 214022<br>
                Производство Россия: г Смоленск, пос. Пронино, здание АБК, 214022<br>
                Производство Польша: Ogrodowa 38, Sokółka, Polska
            </p>
        </main>
    </div>
</template>

<script>
    export default {
        name: "contacts",
        mounted() {
            document.title = "Контакты";
        }
    }
</script>

<style scoped>

</style>