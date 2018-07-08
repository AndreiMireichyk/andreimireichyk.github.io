<template>
    <div>
        <section class="contacts hidden">
            <form action="#" class="form">
                <div class="form__control" :class="{'has-error': errors.name}">
                    <input class="input input--name" type="text" placeholder="Name Yourself" autocomplete="off"
                           name="name"
                           v-model="name">
                    <div class="form__error"><span class="form__error-text">Enter your name</span></div>
                </div>
                <div class="form__control" :class="{'has-error': errors.contacts}">
                    <input class="input input--contacts" type="text" placeholder="Contacts" autocomplete="off"
                           name="contacts"
                           v-model="contacts">
                    <div class="form__error">Enter your contacts</div>
                </div>
                <div class="form__control" :class="{'has-error': errors.description}">
                    <textarea name="description" class="input input--desc"
                              placeholder="Feel free to type anything here…"
                              autocomplete="off" required
                              v-model="description"></textarea>
                    <div class="form__error">Enter your text</div>
                </div>
                <a class="btn btn-outline-dark" data-send
                   @click="sendForm">
                    Send
                    <div class="rippleJS"></div>
                </a>
            </form>
        </section>
    </div>
</template>

<script>
    export default {
        name: "contacts",
        data: () => {
            return {
                name: "",
                contacts: "",
                description: "",
                errors: {
                    name: false,
                    contacts: false,
                    description: false,
                }

            }
        },
        watch: {
            name: function () {
                if (this.name !== "")
                    this.errors.name = false;

            },
            contacts: function () {
                if (this.contacts !== "")
                    this.errors.contacts = false;
            },
            description: function () {
                if (this.description !== "")
                    this.errors.description = false;
            }
        },
        methods: {
            checkForm: function () {
                if (this.name === "") {
                    this.errors.name = true;
                    return false;
                }

                if (this.contacts === "") {
                    this.errors.contacts = true;
                    return false;
                }

                if (this.description === "") {
                    this.errors.description = true;
                    return false;
                }
                return true;
            },
            sendForm: function () {

                const vm = this;

                if (this.checkForm()) {
                    const data = {
                        name: this.name,
                        contacts: this.contacts,
                        description: this.description,
                    };

                    $.post("/server/mail.php", data).done(function (data) {
                        const response = JSON.parse(data);
                        if (response.status) {
                            vm.$router.push('/accept');
                        } else {
                            alert("Ошибка");
                        }
                    });
                }
            }
        },
        mounted() {
            $("input").keypress(function (event) {
                let inputName = $(this).prop('name');
                if (event.keyCode == 13 && !$(this).is(":button")) {

                    $('input, textarea').each(function (k, v) {
                        if ($(v).prop('name') === inputName) {
                            $('input, textarea')[k + 1].focus();
                        }

                    });
                    return false;
                }
            });
        }
    }
</script>

<style scoped>

</style>