import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		formData: {
			term: '',
			location: '',
		},
		restaurant: {
			name: 'Hit the button to search for a new restaurant!',
			image_url: 'https://i.imgur.com/bE41jCM.png',
			url: "#"
		},
		restaurantHistory: [],
		selected: ''
  },
  mutations: {
		updateForm (state, newFormData) {
			state.formData = newFormData;
		},
		setRestaurant (state, restaurant) {
			state.restaurant = restaurant;
		},
		pushRestaurant (state, restaurant) {
			state.restaurantHistory.unshift(restaurant);
		},
		setSelectedRestaurant (state, restaurant) {
			state.selected = restaurant.id;
		}
	},
	getters: {
		restaurant: state => {
			return state.restaurant;
		}
	},
  actions: {
		getRestaurant ({ commit, state }) {	
			axios.get('/api/search2/?term=food&location=sacramento')
				.then(res => {
					const randID = Math.floor(Math.random() * Math.floor(res.data.businesses.length - 1));
					const randRestaurant = res.data.businesses[randID];

					commit('pushRestaurant', randRestaurant);
					commit('setRestaurant', randRestaurant);
					commit('setSelectedRestaurant', randRestaurant);
				})
		},
		setRestaurant ({ commit, state }, restaurant) {
			commit('setRestaurant', restaurant);
			commit('setSelectedRestaurant', restaurant);
		}
  }
})
