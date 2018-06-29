<template>
  <div id="app">
		<app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
	import Header from '@/components/Header';

	export default {
		components: {
			appHeader: Header
		}
	}
</script>

<style lang="scss">
#app {
	text-align: center;
	display: grid;
	grid-template-columns: repeat(8, minmax(min-content, 200rem));
	grid-template-rows: 100vh;
}
</style>
