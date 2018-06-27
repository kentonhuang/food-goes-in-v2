<template>
  <div id="app">
		<app-header></app-header>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
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
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: $color-primary;
    }
  }
}
</style>
