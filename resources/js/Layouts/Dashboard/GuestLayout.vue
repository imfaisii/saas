<template>

    <Head :title="pageTitle"></Head>

    <main class=" main-content">
        <div class="signUP-admin">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-6 col-md-6 p-0">
                        <div class="signUP-admin-left position-relative">
                            <div class="signUP-overlay">
                                <img class="svg signupTop" src="img/svg/signuptop.svg" alt="img" />
                                <img class="svg signupBottom" src="img/svg/signupbottom.svg" alt="img" />
                            </div>
                            <div class="signUP-admin-left__img">
                                <img class="img-fluid svg" src="img/svg/signupIllustration.svg" alt="img" />
                            </div>
                        </div>
                    </div>
                    <slot name="body"></slot>
                </div>
            </div>
        </div>
    </main>
    <div id="overlayer">
        <span class="loader-overlay">
            <div class="atbd-spin-dots spin-lg">
                <span class="spin-dot badge-dot dot-primary"></span>
                <span class="spin-dot badge-dot dot-primary"></span>
                <span class="spin-dot badge-dot dot-primary"></span>
                <span class="spin-dot badge-dot dot-primary"></span>
            </div>
        </span>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { loadScript, unloadScript } from "vue-plugin-load-script"
import useStringable from "@/Mixins/StringHelpers"

// helper class
const { capitalizeFirstLetter } = useStringable()
const pageTitle = capitalizeFirstLetter(window.location.pathname.split("/").pop())

onMounted(() => {
    unloadScript('/js/dist/plugins.min.js')
    unloadScript('/js/dist/main.min.js')
    loadScript("/js/dist/plugins.min.js").then(() => {
        loadScript("/js/dist/main.min.js").then(() => { $("#overlayer").addClass('d-none') })
    })
})

</script>