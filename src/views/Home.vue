<template>
  <div class="home">
		<google-map></google-map>
		<restaurant-detail></restaurant-detail>
		<restaurant-list></restaurant-list>
  </div>
</template>

<script>
import GoogleMap from '../components/GoogleMap';
import RestaurantList from '../components/RestaurantList';
import RestaurantDetail from '../components/RestaurantDetail';

export default {
	name: 'home',
	components: {
		GoogleMap,
		RestaurantList,
		RestaurantDetail
	}
}
</script>

<style lang="scss">
	.home {
	padding-top: 6.4rem;
	background-color: $color-grey-light-2;
	grid-column: 2 / 8;
	height: 100vh;
	font-size: 20rem;
	box-shadow: 0px 0px 4.7rem 0px rgba(0,0,0,0.35);
	
	display: grid;
	grid-template-rows: 5rem repeat(7, [row-start] minmax(10rem, 1fr) [row-end]);
	grid-template-columns: repeat(8, [col-start] minmax(10rem, 1fr) [col-end]);

	overflow: hidden;
	
	}
</style>
