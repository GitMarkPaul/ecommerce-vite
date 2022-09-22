<script setup>
	// This starter template is using Vue 3 <script setup> SFCs
	// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
	import Header from './components/layouts/Header.vue'
	import Footer from './components/layouts/Footer.vue'
	import Main from './components/Main.vue'
	import Interest from './components/partials/offcanvas/Interest.vue'
	import Search from './components/partials/modals/Search.vue'
	import Delete from './components/partials/modals/Delete.vue'
	import DebitCredit from './components/partials/modals/DebitCredit.vue'
	import AudaPay from './components/partials/modals/AudaPay.vue'
</script>

<template>
	
	<Header></Header>

	<Main></Main>

	<Footer></Footer>

	<!-- Offcanvas -->
	<Interest></Interest>

	<!-- Modals -->
	<Search></Search>
	<Delete></Delete>
	<DebitCredit></DebitCredit>
	<AudaPay></AudaPay>
	
</template>

