<template>
	<header class="header">
		<span class="logo">foodgoes.in</span>
		<form class="form">
			<label for="find" class="form__input__label"><span class="form__input__label--text">Find:</span></label>
			<input v-model="formData.term" type="text" class="form__input form__input--find" id="find" placeholder="food, Chinese, Tacos...">
			<label for="find" class="form__input__label"><span class="form__input__label--text">Near:</span></label>
			<input v-model="formData.location" type="text" class="form__input" id="location" placeholder="address, city, state, or zip">
			<button type="submit" v-on:click="findRestaurant">{{ headerButton }}</button>
		</form>
		<span class="right">About</span>
	</header>
</template>

<script>
import { mapState } from 'vuex';

export default {
	data() {
		return {
			headerButton: 'Search',
		}
	},
	computed: {
		...mapState({
			formData: state => state.formData
		})
	},
	methods: {
		updateForm(e) {
			this.$store.commit('updateForm', e.target.value);
		},
		findRestaurant(e) {
			e.preventDefault();
			this.$store.dispatch('getRestaurant');
		}
	}
}
</script>

<style lang="scss">
	.header {
		width: 100vw;
		position: fixed;
		height: 6.4rem;
		background-color: $color-grey-dark-2;
		padding: 1.5rem 3rem;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid $color-grey-dark-3;
	}

	.logo {
		justify-self: flex-start;
		align-self: center;
		font-size: 1.6rem;
		color: $color-primary;
	}

	.form {
		position: relative;
		display: flex;
		justify-content: center;

		&__input {
			border: none;
			padding: 1rem 1rem;
			font-size: 1.4rem;
			flex: 0 0 30rem;

			&:focus {
				outline: none;
			}

			&__label {
				display: flex;
				align-content: center;

				&--text {
					color: #000;
					background-color: $color-white;
					font-size: 1.4rem;
					padding: 0.9rem 0 0.9rem 1rem;
					font-weight: 700;
				}
			}

		}


		button {
			position: absolute;
			right: -13rem;
			border: none;
			background-color: $color-primary;
			height: 100%;
			z-index: 5;
		}
		
	}
</style>