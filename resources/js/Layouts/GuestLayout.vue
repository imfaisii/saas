
<template>

    <Head :title="pageTitle"></Head>

    <div class="d-flex flex-column flex-root">
        <div class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
            style="background-image: url(backend/assets/media/illustrations/sketchy-1/14.png)">
            <div class=" d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
                <a href="../../demo1/dist/index.html" class="mb-12">
                    <img alt="Logo" src="backend/assets/media/logos/logo-1.svg" class="h-40px" />
                </a>
                <slot name="body"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
const pageTitle = window.location.pathname.split("/").pop()
</script>