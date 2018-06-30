<template>
	<div class="restaurant-list">
		<restaurant-list-item :ref="restaurant.id" v-for="restaurant in restaurantHistory" :key="restaurant.id" :restaurant="restaurant"></restaurant-list-item>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	import RestaurantListItem from './RestaurantListItem';
	export default {
		name: 'restaurantList',
		components: {
			RestaurantListItem,
		},
		computed: {
			...mapState ({
				restaurantHistory: state => state.restaurantHistory,
				selected: state => state.selected,
			})
		},
		// watch: {
		// 	selected() {
		// 		this.scrollToElement(this.selected);
		// 	}
		// },
		// methods: {
		// 	scrollToElement(refName) {
		// 		const element = this.$refs[refName];
		// 		console.log(element);
		// 		const top = element.$el.offsetTop;
		// 		window.scrollTo(0, top);
		// 	}
		// }
	}
</script>

<style lang="scss">
	.restaurant-list {
		background-color: $color-grey-light-3;
		grid-row: row-start 6 / row-end 10;
		grid-column: col-start 1 / col-end 3;

		display:grid;
		grid-auto-rows: min-content;

		overflow: auto;
	}
</style>
