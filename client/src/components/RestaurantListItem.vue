<template>
	<div :class="[selected === this.restaurant.id ? 'selected' : '']" class="restaurant-item" v-on:click="selectedRestaurant">
		<div class="restaurant-item__img">
			<img :src="restaurant.image_url" alt="Restaurant List Image" class="restaurant-item__img--src">
		</div>
		<span class="restaurant-item__name">{{ restaurant.name }}</span>
		<span class="restaurant-item__address">123 Bayshore Blvd, San Francisco CA, 94134</span>
		<span class="restaurant-item__rating">{{ restaurant.rating }}</span>
		<span class="restaurant-item__price">{{ restaurant.price }}</span>
	</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
	props: ['restaurant'],
	computed: {
		...mapState({
			selected: state => state.selected
		})
	},
	methods: {
		selectedRestaurant() {
			this.$store.dispatch('setRestaurant', this.restaurant);
		}
	}
}
</script>

<style lang="scss">
	.selected {
			background-color: $color-grey-dark-4;
		}
	.restaurant-item {
		cursor: pointer;
		padding: 0.5rem;
		
		display: grid;
		grid-template-columns: repeat(10, 1fr);
		grid-template-rows: repeat(2, 3.5rem);

		&__img {
				grid-row: 1 / 3;
				grid-column: 1 / 3;
				overflow: hidden;

				&--src {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
		}

		&__name {
			grid-column: 3 / 7;
			justify-self: start;
			align-self: start;
			font-size: 1.6rem;
			font-weight: 700;
			padding-left: 1rem;
			text-align: left;
		}

		&__address {
			grid-column: 7 / -1;
			justify-self: end;
			align-self: center;
			font-size: 1.3rem
		}

		&__rating {
			grid-column: 3 / 4;
			grid-row: 2 / 3;
			font-size: 1.3rem;
			justify-self: start;
			align-self: end;
			padding-left: 1rem;
			padding-bottom: 1rem;
		}

		&__price {
			grid-column: 4 / 5;
			grid-row: 2 / 3;
			font-size: 1.3rem;
			align-self: end;
			padding-bottom: 1rem;
		}

		&::after {
			content: '';
			display: block;
			margin: 0 auto;
			width: 95%;
			position: relative; 
			top: 5px;
			border-bottom: 1px solid #ddd;
			grid-column: 1 / -1;
			grid-row: 2 / 3;
		}
	}

</style>
