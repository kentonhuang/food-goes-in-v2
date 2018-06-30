<template>
	<div class="restaurant-detail">
			<div class="restaurant-detail__img--container">
				<img class="restaurant-detail__img--container__img" src="https://i.imgur.com/8OkJUS0.jpg" alt="Restaurant Image">
			</div>
			<h4 class="restaurant-detail__name" v-if="restaurant">{{ restaurant.name }}</h4>
			<h4 class="restaurant-detail__name" v-else>bearba</h4>
			<div class="restaurant-detail__info-1">
				<p>FOUR STARS</p>
				<p>FOUR DOLLAR SIGNS</p>
				<p>497 REVIEWS</p>
				<p>OPEN NOW: YES</p>
				<p>SOMETHING ELSE</p>
				<p>SOMETHING ELSE</p>
				<a v-on:click="test" href="#" class="btn-text margin-top-sm">Open in Yelp &rarr;</a>
				</div>
			<div class="restaurant-detail__info-2">
				<p>34 Bayshore Blvd</p>
				<p>San Francisco, CA 94134</p>
				<p>(415)933-4330</p>
				</div>
			<div class="restaurant-detail__review"><p>&ldquo;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam placeat recusandae labore veritatis enim nisi...&rdquo;</p></div>
		</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>
