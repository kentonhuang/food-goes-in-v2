<template>
	<div :class="[selected === this.restaurant.id ? 'selected' : '']" class="restaurant-item" v-on:click="selectedRestaurant">
		<div class="restaurant-item__img">
			<img :src="restaurant.image_url" alt="Restaurant List Image" class="restaurant-item__img--src">
		</div>
		<span class="restaurant-item__name">{{ restaurant.name }}</span>
		<span class="restaurant-item__address"><p>{{ restaurant.location.display_address[0] }}</p><p>{{ restaurant.location.display_address[1] }}</p><p>{{ restaurant.location.display_address[2] }}</p></span>
		<star-rating class="restaurant-item__rating" :read-only="true" :show-rating="false" :item-size="14" :increment="0.5" :rating="restaurant.rating"></star-rating>
		<image-rating class="restaurant-item__price" :src="src" :spacing="-5" :max-rating="4" :read-only="true" :show-rating="false" :item-size="17" :rating="rating"></image-rating>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import { StarRating, ImageRating } from 'vue-rate-it';

export default {
	props: ['restaurant'],
	data() {
		return {
			src: 'https://i.imgur.com/1xixcYO.png',
			rating: this.restaurant.price.length,
		}
	},
	computed: {
		...mapState({
			selected: state => state.selected
		})
	},
	methods: {
		selectedRestaurant() {
			this.$store.dispatch('setRestaurant', this.restaurant);
		}
	},
	watch: {
		selected() {
			if(this.selected === this.restaurant.id) {
				this.$store.dispatch('setOffset', this.$el.offsetTop);
			}
		}
	},
	components: {
		StarRating,
		ImageRating,
	},
}
</script>

<style lang="scss">
	.selected {
			background-color: $color-grey-dark-4;
		}
	.restaurant-item {
		position: relative;
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
			justify-self: start;
			align-self: start;
			font-size: 1.3rem
		}

		&__rating {
			grid-column: 3 / 4;
			grid-row: 2 / 3;
			justify-self: start;
			align-self: end;
			padding-left: 1rem;
		}

		&__price {
			grid-column: 4 / 5;
			grid-row: 2 / 3;
			padding-left: 1rem;
			align-self: end;
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
