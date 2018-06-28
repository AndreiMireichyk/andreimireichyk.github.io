<template>

        <footer id="footer">
            <div class="wrap">

                <div class="breadcrumbs">
                    <a href="index.html" class="btn btn-link-f-b">Главная</a>
                    <a href="team.html" class="btn btn-link-f-b">Команда</a>
                </div>

                <div class="menu">
                    <ul class="footer-menu">
                        <li v-for="item in items">
                            <router-link :to="item.to" class="btn btn-link-f-m">{{item.name}}</router-link>
                        </li>

                    </ul>

                    <ul class="footer-menu">
                        <li><a class="btn btn-link-f-m"  target="_blank" href="/src/assets/specification.pdf">Спецификация</a></li>
                    </ul>
                </div>


                <div class="social">
                    <ul class="social-list">
                        <li>
                            <a class="btn btn-social" target="_blank" href="https://vk.com/bixbit_io">
                                <i class="icon icon-vk"></i>
                            </a>
                        </li>
                        <li>
                            <a class="btn btn-social" target="_blank" href="https://medium.com/@bixbit">
                                <i class="icon icon-medium"></i>
                            </a>
                        </li>
                        <li>
                            <a class="btn btn-social" href="https://www.facebook.com/Bixbit-510136746072299">
                                <i class="icon icon-fb"></i>
                            </a>
                        </li>
                        <li>
                            <a class="btn btn-social" target="_blank" href="https://www.linkedin.com/company/bixbit-company">
                                <i class="icon icon-in"></i>
                            </a>
                        </li>
                    </ul>
                    <form class="t--r">
                        <input class="input subscribe" type="text">
                        <button class="btn btn-link-dark inverse">Подписаться</button>
                    </form>
                </div>
            </div>
        </footer>
</template>

<script>
    export default {
        name: "footer-layout",
        data(){
            return {
                items : [
                    {name: "Продукты", to: "/products"},
                    {name: "Команда", to: "/team"},
                    {name: "Контакты", to: "/contacts"},
                    {name: "FAQ", to: "/faq"},
                ]
            }
        }
    }
</script>

<style scoped>

</style>