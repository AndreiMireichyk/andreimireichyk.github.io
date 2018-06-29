<template>
    <div class="wrapper">

        <section id="one">
            <div class="screen">
                <div class="screen__inf">
                    <h1 class="screen__inf__title text--h1">Больше чем просто майнинг</h1>
                    <p class="screen__inf__desc text--desc">BiXBiT Miner - это компактный, легкомасштабируемый мобильный
                        майнер,
                        оснащённый
                        системой иммерсионного охлажения, жизнеобеспечения и удаленного администрирования.</p>
                    <router-link to="/products" class="screen__inf__btn btn btn-link">Продукты</router-link>
                </div>

                <div class="screen__img"></div>
            </div>

            <div class="more">
                <div class="more__line"></div>
                <div class="more__text">ПОДРОБНЕЕ О ТЕХНОЛОГИЯХ</div>
                <i class="more__icon icon icon-arrow"></i>

            </div>

        </section>
        <div class="sticky">
            <nav class="float-nav">
                <ul class="t--r">
                    <li class="active">
                        <a href="#one" class="btn btn-link-fl-n active">Главная</a>
                    </li>
                    <li><a href="#two" class="btn btn-link-fl-n">Охлаждение</a></li>
                    <li><a href="#three" class="btn btn-link-fl-n">Конструкция</a></li>
                    <li><a href="#four" class="btn btn-link-fl-n">Экономика</a></li>
                </ul>
            </nav>

            <section id="two" class="t--c">

                <div class="screen">
                    <h4 class="screen__title text--h1">Иммерсионное охлаждение</h4>
                    <p class="screen__desc text--desc">Компоненты оборудования полностью погружаются в диэлектрическую
                        жидкость.
                        Такой вид
                        охлаждения
                        обеспечивает оптимальные условия для большого количества вычислительных устройств, так рабочая
                        температура
                        оборудования поддерживается в нужном диапазоне, а за счет полного погружения тепло равномерно
                        отводится
                        от
                        всех
                        элементов и защищает оборудование от внешних негативных воздействий, таких как пыль или
                        насекомые.
                    </p>
                    <!--<a href="#" class="screen__btn btn btn-link">Продукт</a>-->
                </div>


                <ul class="list">
                    <li>
                        <i class="list__icon icon icon-sostav"></i>
                        <span class="list__desc">Уникальный состав</span>
                    </li>
                    <li>
                        <i class="list__icon icon icon-obsluzivanie"></i>
                        <span class="list__desc">Легкость обслуживания</span>
                    </li>
                    <li>
                        <i class="list__icon icon icon-bio"></i>
                        <span class="list__desc">Экологичность</span>
                    </li>
                    <li>
                        <i class="list__icon icon icon-thermometer"></i>
                        <span class="list__desc">Термостабильность</span>
                    </li>
                </ul>

                <img class="image" src="/src/assets/img/bg2.png" alt="Иммерсионное охлаждение">
            </section>

            <section id="three" class="t--c">
                <div class="screen">
                    <h4 class="screen__title text--h1">Конструкция</h4>
                    <p class="screen__desc text--desc">Благодаря применению иммерсионной системы охлаждения удалось
                        достичь
                        столь
                        высокой
                        плотности
                        размещения устройств внутри контейнера, а вертикальная конструкция стоек позволяет разместить
                        больше
                        единиц
                        оборудования, чем горизонтальная. Опционально оснащается градирней для эффективной утилизации
                        тепла.
                        Промышленное производство обеспечивает механическую прочность и устойчивость всей конструкции.
                    </p>
                </div>

                <img class="image" src="/src/assets/img/bg3.png" alt="Спецификация">

                <ul class="list">
                    <li>
                        <i class="list__icon icon icon-mobil"></i>
                        <span class="list__desc">Мобильность</span>
                    </li>
                    <li>
                        <i class="list__icon icon icon-mashtabiruemost"></i>
                        <span class="list__desc">масштабируемость</span>
                    </li>
                    <li>
                        <i class="list__icon icon icon-bezopasn"></i>
                        <span class="list__desc">Безопасность</span>
                    </li>
                    <li>
                        <i class="list__icon icon icon-gibkost"></i>
                        <span class="list__desc">Гибкость конфигурации</span>
                    </li>
                </ul>

                <a class="btn btn-link-dark" @click="showIt()">Оформить заказ</a>
            </section>

            <section id="four" class="t--c">
                <div class="screen">


                    <h4 class="screen__title text--h1">Экономика</h4>

                    <ul class="list">
                        <li>
                            <i class="list__icon icon icon-recycle"></i>
                            <span class="list__desc">Утилизация тепла</span>
                        </li>
                        <li>
                            <i class="list__icon icon icon-guarantee"></i>
                            <span class="list__desc">Гарантия 3 года</span>
                        </li>
                        <li>
                            <i class="list__icon icon icon-energoeffect"></i>
                            <span class="list__desc">Энергоэффективность</span>
                        </li>
                        <li>
                            <i class="list__icon icon icon-bars"></i>
                            <span class="list__desc">Производительность</span>
                        </li>
                    </ul>

                    <p class="screen__desc text--desc">
                        Использование иммерсионного охлаждения создаёт ряд экономических эффектов, которые позволяют не
                        только
                        уменьшить затраты на охлаждение в целом, но и обеспечить стабильную работу устройств в режиме
                        максимальной производительности. Дополнительная прибыль значительно сокращает срок окупаемости
                        оборудования.
                    </p>

                    <!--<a href="#" class="screen__btn btn btn-link">Продукт</a>-->
                </div>
            </section>

        </div>
        <section id="five" class="t--c">

            <div class="screen">
                <div ref="amoform"></div>
                <h4 class="screen__title text--h1">Индивидуальная конфигурация</h4>

                <p class="screen__desc text--desc">Благодаря модульности конструкции сохраняется возможность для
                    индивидуального
                    решения, которое
                    легко может быть совмещено с текущим оборудованием заказчика
                </p>

                <a class="btn btn-link-light-border" @click="showIt()">Связаться</a>

                <router-link to="/products" class="screen__btn btn btn-link">Подробнее о продукте</router-link>
            </div>

        </section>
    </div>
</template>

<script>
    import {default as Vuedals, Component as Vuedal, Bus as VuedalsBus} from 'vuedals';
    import amoform from '../layout/amoform.vue';
    export default {
        name: "home", components: {
            Vuedal
        },
        data(){
            return {src : "ulr_script"}
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
        },
        mounted() {
            document.title = "Главная";

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
        }
    }
</script>

<style scoped lang="scss">


</style>