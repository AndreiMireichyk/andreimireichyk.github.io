<template>
    <transition name="modal">
        <div class="modal flip-container" :class="{'flip-me': flipMe}">
            <div class="modal__wrapper flipper">
                <div class="modal__container front">
                    <div class="modal__header">
                        <slot name="front-header"></slot>
                        <div class="modal__x" @click="$emit('toggle')">&times;</div>
                    </div>
                    <div class="modal__body">
                        <slot name="front-body"></slot>
                    </div>
                    <div class="modal__footer">

                        <slot name="front-footer"></slot>
                    </div>
                </div>
                <div class="modal__container back">
                    <div class="modal__header">
                        <slot name="back-header"></slot>
                        <div class="modal__x" @click="$emit('toggle')">&times;</div>
                    </div>
                    <div class="modal__body">
                        <slot name="back-body"></slot>
                    </div>
                    <div class="modal__footer">
                        <slot name="back-footer"></slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "modal",
        data() {
            return {
                showModal: false,
                flipMe: false,
                script: ""
            }
        },
        methods: {
            toggleModal: function () {
                this.showModal = !this.showModal
            },
            flipModal: function () {
                this.flipMe = !this.flipMe
            }
        }
    }
</script>

<style scoped lang="scss">
    :root {
    }

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        &__wrapper {
            position: relative;
            width: 65vmin;
            height: 35vmin;
            min-height: 15em;
            min-width: 20em;
            display: flex;
        }
        &__container {
            flex: 1;
            display: flex;
            flex-direction: column;
            background: #fff;
            color: #333;
            border-radius: .2em;
            box-shadow: 0 0 0 1px rgba(0, 0, 0, .2), 0 1em 2em -1em;
        }
        &__header {
            flex: none;
            display: flex;
            justify-content: space-between;
            padding: 1em;
        }
        &__body {
            flex: 1;
            padding: 1em;
            overflow: auto;
        }
        &__footer {
            flex: none;
            padding: 1em;
            > * {
                flex-direction: row-reverse;
                display: flex;
                justify-content: space-between;
            }
        }
        &__x {
            cursor: pointer;
            font-size: 2em;
            line-height: .5;
        }
    }

    .button-leave-active,
    .modal-enter-active {
        transition: transform 500ms cubic-bezier(1, 0, 0.2, 1.5);
    }

    .modal-leave-active,
    .button-enter-active {
        transition: transform 500ms cubic-bezier(1, -0.5, 0.2, 1);
    }

    .mask-enter-active, .mask-leave-active {
        transition: opacity 300ms linear;
    }

    .mask-enter, .mask-leave-to {
        opacity: 0;
    }

    .button-enter, .button-leave-to,
    .modal-enter, .modal-leave-to {
        transform: scale(0);
    }

    // flipper
    .flip-container {
        perspective: 900;
        &.flip-me .flipper {
            transform: rotateY(-180deg);
        }
    }

    .flipper {
        will-change: transform;
        transition: transform 1000ms cubic-bezier(1, -0.2, 0.2, 1.2);
        transform-style: preserve-3d;
        position: relative;
        transform: rotateY(0);
        .front,
        .back {
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
        .front {
            transform: rotateY(0deg);
        }
        .back {
            transform: rotateY(-180deg);
        }
    }

    // boring
    [v-cloak] {
        display: none !important;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: sans-serif;
        background: #21c2f5; //#9ccf5e;
        color: #fff;
    }

    button {
        border: none;
        box-shadow: 0 0 0 2px rgba(0, 0, 0, .2) inset;
        padding: .7em 1em;
        border-radius: .35em;
        color: #fff;
        font: inherit;
        background: #333;
        cursor: pointer;
        outline: none;
        will-change: transform;
        transition: transform .2s ease-out;
        &:active {
            transform: scale(.9);
        }
    }
</style>