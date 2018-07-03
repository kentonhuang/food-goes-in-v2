<template>
  <div class="map-container">
    <gmap-map
      :center="center"
      :zoom="12.7"
      style="width:100%;  height: 100%;"
    >
      <gmap-marker
        :key="coord.restId"
        v-for="coord in coords"
        :position="coord"
        @click="markerClick(coord)"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    };
	},
	
	computed: {
		...mapState({
			selected: state => state.selected,
			restaurant: (state) => state.restaurant,
			restaurantHistory: state => state.restaurantHistory,
			coords: (state) => {
				return state.restaurantHistory.map(restaurant => {
					const coordinates = restaurant.coordinates;
					const coord = {
						lat: coordinates.latitude,
						lng: coordinates.longitude,
						restaurant: restaurant,
					}
					return coord;
				})
			}
		})
	},

	watch: {
		restaurant() {
			const coordinates = this.restaurant.coordinates;
			const coord = {
			lat: coordinates.latitude,
			lng: coordinates.longitude,
			}
			this.setCenter(coord);
		}
	},

  mounted() {
		this.geolocate();
  },

  methods: {
		markerClick(coord) {
			this.$store.dispatch('setRestaurant', coord.restaurant);
		},
		setCenter(coordinates) {
			this.center = coordinates;
		},
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
					lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
				};
				this.$store.dispatch('setLocation', this.center);
      });
    }
  }
};
</script>

<style lang="scss">
	.map-container {
		grid-column: col-start 4 / col-end 8;
		grid-row: row-start 1 / -1;
	}
</style>