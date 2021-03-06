import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import _ from 'lodash';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		loading: false,
		currentLocation: '',
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
		selected: '',
		itemOffset: 0,
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
		},
		setOffset(state, offset) {
			state.itemOffset = offset;
		},
		setCurrentLocation(state, location) {
			state.currentLocation = location;
		},
		setLoading(state, loading) {
			state.loading = loading;
		}
	},
	getters: {
		restaurant: state => {
			return state.restaurant;
		},
		itemOffset: state => {
			return state.itemOffset;
		},
		selected: state => {
			return state.selected;
		}
	},
  actions: {
		getRestaurant ({ commit, state }) {	
			const formData = state.formData;
			axios.get(`/api/search2/?term=${formData.term}&location=${formData.location}`)
				.then(res => {
					if(res.data.businesses) {
						const randID = Math.floor(Math.random() * Math.floor(res.data.businesses.length - 1));
						const randRestaurant = res.data.businesses[randID];

						const exist = state.restaurantHistory.some(function (restaurant) {
							return _.isEqual(restaurant.id, randRestaurant.id);
						})

						axios.get(`/api/business/?id=${randRestaurant.id}`)
							.then(res => {


								if (!exist) {
									randRestaurant.reviews = res.data.reviews;
									commit('pushRestaurant', randRestaurant);
								}

								commit('setRestaurant', randRestaurant);
								commit('setSelectedRestaurant', randRestaurant);
								commit('setLoading', !state.loading);
							})
					}
						else {
							commit('setLoading', !state.loading);
						}
				})
		},
		setRestaurant ({ commit }, restaurant) {
			commit('setRestaurant', restaurant);
			commit('setSelectedRestaurant', restaurant);
		},
		setOffset({ commit }, offset) {
			commit('setOffset', offset);
		},
		setLocation({ commit }, location) {
			commit('setCurrentLocation', location);
		},
		setLoad({ commit }, loading) {
			commit('setLoading', loading);
		}
  }
})
