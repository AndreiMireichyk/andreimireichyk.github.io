<template>

        <div class="product__props props">
            <div class="product__breadcrumbs breadcrumbs">
                <router-link to="/home" class="btn btn-link-f-b">Главная</router-link>
                <router-link to="/products" class="btn btn-link-f-b">Продукты</router-link>
                <router-link :to="rout" class="btn btn-link-f-b">{{product.prod_type}}</router-link>
            </div>

            <h1 class="product__title"><span class="title_sub">{{product.prod_type}}</span> {{product.name}}</h1>
            <div class="props__desc">
                {{product[device].min_desc}}
            </div>

            <div class="props__options devices_type">
                <div class="options__title">Выберите тип оборудования:</div>

                <div class="radio_group">
                    <div class="radio_product">
                        <input type="radio" id="foot_10" v-model="device" value="type_a"/>
                        <label for="foot_10">10 футов</label>
                    </div>
                    <div class="radio_product">
                        <input type="radio" id="foot_20" v-model="device" value="type_b"/>
                        <label for="foot_20">20 футов</label>
                    </div>
                    <div class="radio_product">
                        <input type="radio" id="foot_40" v-model="device" value="type_c"/>
                        <label for="foot_40">40 футов</label>
                    </div>
                </div>

            </div>
            <div class="props__price">
                <div class="price_value" :class="[device == 'type_a' ? 'active' : '']">$799.99</div>
                <div class="price_value" :class="[device == 'type_b' ? 'active' : '']">$999.99</div>
                <div class="price_value" :class="[device == 'type_c' ? 'active' : '']">от $699.99</div>
            </div>
            <div class="props__list">
                <ul class="prop_list">
                    <!--default options-->
                    <li class="prop_list__item"
                    v-for="prop in product[device].default_options">

                        <span class="prop_list__item__title">{{prop.name}}</span>

                        <span class="prop_list__item__value">{{prop.value}}</span>
                    </li>
                    <!--default options-->
                </ul>
            </div>
            <div class="props__btn">
                <a @click="showIt()" class="btn btn-dark ind"></a>
                <a href="/src/assets/specification.pdf" target="_blank" class="btn btn-link">Спецификация</a>
            </div>
        </div>

</template>

<script>
    import {default as Vuedals, Component as Vuedal, Bus as VuedalsBus} from 'vuedals';
    import amoform from '../../layout/amoform.vue';
    export default {
        name: "Crisper",
        props: ['product'],

        data () {
            return {device: "type_a", rout: ""}
        },
        mounted(){
            console.log(this.product['type_c'].default_options)
            this.rout = this.$route.path
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