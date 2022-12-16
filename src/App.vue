<template>
	<div>
		<app-header />
		<div>
			<app-feature></app-feature>
			<app-menu></app-menu>
			<app-main></app-main>
			<app-newsletter></app-newsletter>
		</div>
		<app-footer />
	</div>
</template>

<script>
import HeaderComponent from "./components/Header/HeaderComponent.vue";
import FooterComponent from "./components/Footer/FooterComponent.vue";
import FeatureComponent from "./components/Featured/FeatureComponent.vue";
import MenuComponent from "./components/Menu/MenuComponent.vue";
import MainComponent from "./components/CallUs/MainComponent.vue";
import NewsletterComponent from "./components/Newsletter/NewsletterComponent.vue";

export default {
	components: {
		"app-header": HeaderComponent,
		"app-footer": FooterComponent,
		"app-feature": FeatureComponent,
		"app-menu": MenuComponent,
		"app-main": MainComponent,
		"app-newsletter": NewsletterComponent,
	},
};
</script>

<style>
@import "./assets/style.css";
</style>
