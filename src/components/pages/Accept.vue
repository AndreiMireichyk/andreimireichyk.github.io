<template>
    <div>
        <section class="accept"
        @click="$router.push('/home')">
            <div class="accept__icon">
                <div class="check_mark">
                    <div class="sa-icon sa-success animate">
                        <span class="sa-line sa-tip animateSuccessTip"></span>
                        <span class="sa-line sa-long animateSuccessLong"></span>
                        <div class="sa-placeholder"></div>
                        <div class="sa-fix"></div>
                    </div>
                </div>
            </div>
            <div class="accept__title">
                Message accepted
            </div>
            <div class="accept__tagline">
                Coming soon with you
            </div>

        </section>
    </div>
</template>

<script>
    export default {
        name: "accept",
        data(){return{
            timer : {}
        }},
        methods:{

        },
        mounted(){
           this.timer = setTimeout(()=>{this.$router.push("/home")}, 10000);
        },
        destroyed(){
            clearTimeout(this.timer);
        }
    }
</script>

<style scoped>

</style>