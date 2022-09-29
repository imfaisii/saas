<template>

    <!-- <div class="mobile-search">
        <form class="search-form">
            <span data-feather="search"></span>
            <input class="form-control mr-sm-2 box-shadow-none" type="text" placeholder="Search...">
        </form>
    </div> -->

    <div class="mobile-author-actions"></div>

    <NavBar />

    <main class="main-content">
        <SideBar />

        <slot name="body"></slot>

        <Footer></Footer>
    </main>
</template>

<script setup>
import { onMounted } from "vue";
import { loadScript, unloadScript } from "vue-plugin-load-script";
import NavBar from "@/Partials/Dashboard/NavBar.vue";
import SideBar from "@/Partials/Dashboard/SideBar.vue";
import Footer from "@/Partials/Dashboard/Footer.vue";


onMounted(() => {
    unloadScript('/js/dist/plugins.min.js')
    unloadScript('/js/dist/main.min.js')
    loadScript("/js/dist/plugins.min.js").then(() => {
        loadScript("/js/dist/main.min.js").then(() => { $("#overlayer").addClass('d-none') })
    })
})
</script>