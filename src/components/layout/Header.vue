<template>
    <div>
        <header class="header" :class="{'header--full': full}" v-if="state">
            <router-link :to="link" class="header__logo" :class="{'header__logo--full': full}">
                <img  src="/assets/svg/logo.svg" alt="">
            </router-link>
        </header>
    </div>
</template>

<script>
    export default {
        name: "header-app",
        data: () => {
            return {
                state: true,
                full: true,
                link: "/contacts",
            }
        },
        methods:{
            checkState: function(to){
                switch (to.name) {
                    case 'accept':
                        this.state = false;
                        this.full = false;
                        break;
                    case 'main': case '':
                        this.state = true;
                        this.full = true;
                        this.link ='/contacts';
                        break;
                    case 'contacts':
                        this.state = true;
                        this.full = false;
                        this.link ='/home';
                        break;
                    default:
                        this.state = true;
                        this.full = true;
                        this.link ='/home';
                }
            }
        },
        mounted() {
            console.log(this.$route.name);
            this.checkState(this.$route);
            this.$router.beforeEach((to, from, next) => {
                this.checkState(to);
                next();
            })
        }
    }
</script>

<style scoped>

</style>