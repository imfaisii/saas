<template>
	<!--begin::App-->
	<div class="d-flex flex-column flex-root app-root" id="kt_app_root">
		<!--begin::Page-->
		<div class="app-page flex-column flex-column-fluid" id="kt_app_page">
			<Header></Header>
			<!--begin::Wrapper-->
			<div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
				<SideBar></SideBar>
				<!--begin::Main-->
				<div class="app-main flex-column flex-row-fluid" id="kt_app_main">
					<slot></slot>

					<Footer></Footer>
				</div>
				<!--end:::Main-->
			</div>
			<!--end::Wrapper-->
		</div>
		<!--end::Page-->
	</div>
</template>

<script setup>
import { onMounted } from "vue";
import { loadScript, unloadScript } from "vue-plugin-load-script";
import Header from "@/Components/Layout/Header.vue"
import SideBar from "@/Components/Layout/SideBar.vue"
import Footer from "@/Components/Layout/Footer.vue"

onMounted(() => {
	loadScript("/backend/plugins.bundle.js").then(() => {
		loadScript("/backend/scripts.bundle.js").then(() => { console.log("Scripts loaded.") })
	})
})
</script>