<template>
    <div>


        <div class="sticky">
            <nav class="float-nav">
                <ul class="t--r">
                    <li class="active"><a href="#prod" class="btn btn-link-fl-n active">О ПРОДУКТЕ</a></li>
                    <li><a href="#cell" class="btn btn-link-fl-n">ЯЧЕЙКА</a></li>
                    <li><a href="#rack" class="btn btn-link-fl-n">СТОЙКА</a></li>
                    <li><a href="#crisper" class="btn btn-link-fl-n">КОНТЕЙНЕР</a></li>
                </ul>
            </nav>


            <section id="prod" class="prod">
                <h1 class="prod__title text--h1">Продукция BiXBiT</h1>
                <img src="/src/assets/img/prod_prod.png" alt="Продукты компании" class="prod__image">
                <div class="prod__desc desc">
                    <div class="desc__action action">
                        <a href="assets/specification.pdf" target="_blank" class="action__link btn btn-dark">Спецификация</a>
                        <br>
                        <span class="action__file_size">PDF 4.5mb</span>
                    </div>
                    <div class="desc__desc text--desc">
                        Мы разработали универсальную модульную инфраструктуру, при которой каждый
                        компонент установки BiXBiT является частью “матрешки” и может использоваться самостоятельно, в
                        то время
                        как унификация всех узлов оставляет возможность для дальнейшего расширения дата-центра или
                        фермы.
                    </div>
                </div>

            </section>

            <section id="cell" class="cell">
                <h1 class="cell__title text--h1">Ячейка</h1>
                <div class="cell__desc desc">
                    <p class="desc__desc text--desc">
                        Конструкция выполнена из прочного, долговечного и инертного материала, который не подвержен
                        коррозии и надежно удерживает теплоноситель в течении нескольких десятков лет. В одной ячейке
                        может быть расположено до 27 видеокарт типа GeForce GTX 1070 или до 9 ASIC типа Antminer S9.
                    </p>
                    <router-link to="/products/cell" class="desc__link btn btn-link">Подробнее</router-link>
                </div>

                <ul class="ico_group line">
                    <li class="ico_group__item item">
                        <span class="item__title">750мм</span>
                        <i class="item__ico ico icon-length"></i>
                        <span class="item__desc">Длина</span>
                    </li>
                    <li class="ico_group__item item">
                        <span class="item__title">440мм</span>
                        <i class="item__ico ico icon-width"></i>
                        <span class="item__desc">Ширина</span>
                    </li>
                    <li class="ico_group__item item">
                        <span class="item__title">380мм</span>
                        <i class="item__ico ico icon-height"></i>
                        <span class="item__desc">Высота</span>
                    </li>
                </ul>
                <img src="/src/assets/img/prod_cell.png" alt="Ячейка" class="cell__image">


            </section>

            <section id="rack" class="rack">
                <h1 class="rack__title text--h1">Стойка</h1>
                <div class="rack__desc desc">
                    <p class="desc__desc text--desc">
                        Технология заводской сварки обеспечивает механическую прочность и устойчивость
                        конструкции. Вертикальная компоновка стойки позволяет разместить четыре выдвижных ячейки, с
                        общей вместительностью до 108 видеокарт или 36 ASIC.
                    </p>
                    <router-link to="/products/rack" class="desc__link btn btn-link">Подробнее</router-link>
                </div>

                <ul class="ico_group line">
                    <li class="ico_group__item item">
                        <span class="item__title">626мм</span>
                        <i class="item__ico ico icon-length"></i>
                        <span class="item__desc">Длина</span>
                    </li>
                    <li class="ico_group__item item">
                        <span class="item__title">750мм</span>
                        <i class="item__ico ico icon-width"></i>
                        <span class="item__desc">Ширина</span>
                    </li>
                    <li class="ico_group__item item">
                        <span class="item__title">2050мм</span>
                        <i class="item__ico ico icon-height"></i>
                        <span class="item__desc">Высота</span>
                    </li>
                </ul>
                <img src="/src/assets/img/prod_rack.png" alt="Стойка рабочее название" class="rack__image">
            </section>

            <section id="crisper" class="crisper">
                <h1 class="crisper__title text--h1">Контейнер</h1>
                <div class="crisper__desc desc">
                    <p class="desc__desc text--desc">
                        Для размещения вычислительного оборудования используется стандартный морской контейнер. В одном
                        10-ти футовом контейнере может быть расположено 8 стоек с 864 видеокартами или 288 ASIC.
                        Является наиболее востребованной логистическая тарой и может быть доставлен в место с дешевой
                        электроэнергией. Решение предусматривает применение выделямого тепла в различных
                        инфраструктурах.
                    </p>
                    <router-link to="/products/crisper" class="desc__link btn btn-link">Подробнее</router-link>
                </div>
                <img src="/src/assets/img/prod_crisper.png" alt="Стойка рабочее название" class="crisper__image">
                <ul class="ico_group">
                    <li class="ico_group__item item">
                        <i class="item__ico ico icon-bio"></i>
                    </li>
                    <li class="ico_group__item item">
                        <i class="item__ico ico icon-bio"></i>
                    </li>
                    <li class="ico_group__item item">
                        <i class="item__ico ico icon-bio"></i>
                    </li>
                    <li class="ico_group__item item">
                        <i class="item__ico ico icon-bio"></i>
                    </li>

                </ul>
            </section>
        </div>
        <section id="conf" class="conf">
            <h1 class="conf__title text--h1">Индивидуальная конфигурация</h1>
            <div class="conf__desc desc">
                <div class="desc__desc text--desc">
                    Благодаря модульности конструкции сохраняется возможность для индивидуального решения, которое легко
                    может быть совмещено с текущим оборудованием заказчика.
                </div>
                <a @click="showIt()" class="desc__link btn btn-outline-light">Оставить заявку</a>
                <a class="desc__link btn btn-link" href="/src/assets/specification.pdf" target="_blank">Спецификация</a>
            </div>

        </section>
    </div>
</template>

<script>
    import amoform from '../../layout/amoform.vue';
    import {default as Vuedals, Component as Vuedal, Bus as VuedalsBus} from 'vuedals';
    export default {
        name: "product-all",
        mounted() {
            document.title = "Продукция компании BiXbiT";

            function checkOffset(el) {
                //centred menu
                $(el).addClass("absolute");

                var top = ($(document).scrollTop() - $(".sticky").offset().top) + (window.innerHeight - $(el).outerHeight()) / 2;
                var start = 10;
                var end = $(".sticky").outerHeight() - $(el).outerHeight() - 10;
                //start point
                top = top <= start ? start : top;
                //end point
                top = top >= end ? end : top;
                $(el).css("top", top + 'px');
            }


            $(document).bind('scroll', function () {
                checkOffset(".float-nav");

            });
            $(document).scrollTop(1);

            $(function () {
                $('.float-nav').onePageNav({
                    currentClass: 'active',
                    changeHash: false,
                    scrollSpeed: 750,
                    filter: '',
                    easing: 'swing',
                    begin: function () {
                        $(".float-nav").hide();
                    },
                    end: function () {
                        $(".float-nav").show();
                    },
                    scrollChange: function ($currentListItem) {

                        //I get fired when you enter a section and I pass the list item of the section
                    }
                });
            });
        },
        destroyed() {
            $(document).unbind('scroll');
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