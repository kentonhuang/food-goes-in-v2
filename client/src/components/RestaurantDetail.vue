<template>
	<div class="restaurant-container">
		<div class="restaurant-detail">
			<div class="restaurant-detail__img--container">
				<img class="restaurant-detail__img--container__img" v-bind:src="restaurant.image_url" alt="Restaurant Image">
			</div>
			<h4 class="restaurant-detail__name">{{ name }}</h4>
			<transition name="fade">
				<div class="restaurant-detail__info-1" v-if="show">
					<span class="restaurant-detail__info-1--categories">{{ categories }}</span>
					<span class="restaurant-detail__info-1--star"><star-rating :inline="true" :read-only="true" :show-rating="false" :item-size="14" :increment="0.5" :rating="restaurant.rating"></star-rating> <span class="restaurant-detail__info-1--star-text">{{ restaurant.review_count }} reviews</span> </span>
					<span class="restaurant-detail__info-1--price" v-if="price"><image-rating class="restaurant-item__price" :src="src" :spacing="-5" :max-rating="4" :read-only="true" :show-rating="false" :item-size="17" :rating="price"></image-rating></span>
					<p>Pickup: 
						<img v-if="this.transactions.pickup" class="restaurant-detail__info-1--icon" src="../assets/check.png" alt="checkmark">
						<img v-else class="restaurant-detail__info-1--icon" src="../assets/x.png" alt="checkmark">
						</p>
					<p>Delivery: 
						<img v-if="this.transactions.delivery" class="restaurant-detail__info-1--icon" src="../assets/check.png" alt="checkmark">
						<img v-else class="restaurant-detail__info-1--icon" src="../assets/x.png" alt="checkmark">
					</p>
					<p>Reservations: 
						<img v-if="this.transactions.reservations" class="restaurant-detail__info-1--icon" src="../assets/check.png" alt="checkmark">
						<img v-else class="restaurant-detail__info-1--icon" src="../assets/x.png" alt="checkmark">
					</p>
					<a target="_blank" :href="restaurant.url" class="btn-text margin-top-sm">Open in Yelp &rarr;</a>
				</div>
			</transition>
			<transition name="fade">
				<div class="restaurant-detail__info-2" v-if="show">
					<span class="restaurant-detail__info-2--address"><p>{{ address[0] }}</p><p>{{ address[1] }}</p><p>{{ address[2] }}</p></span>
					<span class="restaurant-detail__info-2--phone">{{ phone }}</span>
				</div>
			</transition>
			<transition name="fade">
				<div class="restaurant-detail__review">
					<p>&ldquo;{{ review.text }}&rdquo;</p>
					<span class="restaurant-detail__review--user">
						<span class="restaurant-detail__review--user__name">- {{ review.user.name }}</span>
					</span>
					</div>
			</transition>
		</div>
	</div>
</template>

<script>
import CheckMark from '../assets/check-mark.svg';
import { StarRating, ImageRating } from 'vue-rate-it';
import { mapState } from 'vuex';

export default {
	data() {
		return {
			show: false,
			name: 'Hit the button to search for a new restaurant!',
			src: 'https://i.imgur.com/1xixcYO.png',
			price: 0,
			address: [],
			phone: '',
			open: '',
			review: {
				user: {
					name: ''
				}
			},
			categories: 'Categories',
			transactions: {},

		}
	},
	computed: {
		...mapState({ 
			restaurant: state => state.restaurant
		}),
	},
	watch: {
		restaurant() {
			if(this.restaurant.price){
				this.price = this.restaurant.price.length;
			}
			if(this.restaurant.location.display_address){
				this.address = this.restaurant.location.display_address;
			}
			if(this.restaurant.display_phone) {
				this.phone = this.restaurant.display_phone;
			}
			if(this.restaurant.open_now){
				this.open = this.restaurant.open_now;
			}
			if(this.restaurant.reviews){
				this.review = this.restaurant.reviews[0];
			}
			if(this.restaurant.categories) {
			this.categories = this.restaurant.categories.map(category => category.title).join(', ')
			}
			if(this.restaurant.name) {
			this.name = this.restaurant.name
			}
			this.transactions.pickup = this.restaurant.transactions.includes('pickup');
			this.transactions.reservations = this.restaurant.transactions.includes('restaurant_reservation');
			this.transactions.delivery = this.restaurant.transactions.includes('delivery');
			this.show = true;
		}
	},
	components: {
		StarRating,
		ImageRating,
		CheckMark,
	},
}
</script>

<style lang="scss">
	.restaurant-container {
		background-color: $color-grey-light-2;
		grid-row: 2 / 7;
		grid-column: col-start 1 / col-end 3;
		border-bottom: 1px solid #ccc;

		display: grid;
		grid-template-columns: 5rem repeat(2, 1fr) 5rem;
		grid-row-gap: 1.5rem;
		transition: all .2s;
	}

	.restaurant-detail {
		grid-column: 2 / 4;

		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 23rem;
		grid-gap: 1rem;
		background-color: $color-grey-light-4;
		border-left: 1px solid $color-grey-light-3;
		border-right: 1px solid $color-grey-light-3;
		color: $color-secondary;
		font-size: 1.6rem;
		padding-bottom: 2rem;
		height: 50rem;

			&__img--container {
				grid-column: 1 / -1;
				grid-row: 1 / 2;

				&__img {
					width: 90%;
					max-height: 100%;
					object-fit: cover;
				}
			}
			
			&__name {
				grid-column: 1 / -1;
				grid-row: 1 / 2;
				z-index: 2;
				align-self: end;
				justify-self: center;
				width: 65%;
				font-size: 1.7rem;
				text-align: center;
				padding: 1.25rem;
				background-color: $color-secondary;
				color: #fff;
				font-weight: 400;
				font-family: $font-secondary;
				transform: translateY(50%);
			}

			&__info-1, &__info-2{
				margin-top: 2.5rem;
				justify-self: center;
			}

			&__info-1 {
				grid-row: 2 / 4;
				display: flex;
				flex-direction: column;
				align-items: center;

				&--categories {
					font-size: 1.4rem;
					display: inline-block;
					height: 5rem;
				}

				&--star{
					margin-bottom: 0.6rem;
				}

				&--star-text {
					display: inline-block;
					color: $color-grey-dark-5;
					font-size: 1.2rem;
					margin-left: 0.5rem;
				}

				&--icon {
					width: 2rem;
					height: 2rem;
					fill: #000;
					margin-bottom: -5px;
				}
			}

			&__info-2 {
				height: 3.5rem;

				&--address {
					display: block;
					height: 6rem;
				}

			}

			&__review {
				padding-top: 0.4rem;
				font-size: 1.1rem;
				font-style: italic;
				color: #888;
				margin-right: 1rem;

				&--user__image {
					width: 3rem;
				}
			}	
		}

		.btn-text {
			&:link,
    	&:visited {
        color: $color-primary-dark;
        display: inline-block;
        text-decoration: none;
        border-bottom: 1px solid $color-primary-dark;
        padding: 3px;
        transition: all .2s;
			}
			
			&:hover {
        background-color: $color-primary-dark;
        color: $color-white;
        box-shadow: 0 1rem 2rem rgba($color-black, .15);
        transform: translateY(-2px);
    	}

			&:active {
					box-shadow: 0 .5rem 1rem rgba($color-black, .15);
					transform: translateY(0);
			}
		}

	.icon {
		width: 5rem;
		height: 5rem;
		fill: #000;
		color: black;
	}

	.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
</style>