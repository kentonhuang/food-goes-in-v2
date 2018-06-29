<template>
	<div class="restaurant-list">
		<restaurant-list-item></restaurant-list-item>
		<restaurant-list-item></restaurant-list-item>
		<restaurant-list-item></restaurant-list-item>
		<restaurant-list-item></restaurant-list-item>
		<restaurant-list-item></restaurant-list-item>
		<restaurant-list-item></restaurant-list-item>
		<restaurant-list-item></restaurant-list-item>
		<restaurant-list-item></restaurant-list-item>
		<restaurant-list-item></restaurant-list-item>
		<restaurant-list-item></restaurant-list-item>
		<restaurant-list-item></restaurant-list-item>
	</div>
</template>

<script>
	import RestaurantListItem from './RestaurantListItem';
	export default {
		name: 'restaurantList',
		components: {
			RestaurantListItem,
		}
	}
</script>

<style lang="scss">
	.restaurant-list {
		background-color: $color-grey-light-3;
		grid-row: row-start 6 / row-end 10;
		grid-column: col-start 1 / col-end 3;

		display:grid;
		grid-auto-rows: 1fr;

		overflow: auto;
	}
</style>
