<template>
	<div class="restaurant-item">
		<div class="restaurant-item__img">
			<img src="https://i.imgur.com/8OkJUS0.jpg" alt="Restaurant List Image" class="restaurant-item__img--src">
		</div>
	</div>
</template>

<script>
export default {
	
}
</script>

<style lang="scss">
	.restaurant-item {
		padding: 1rem;
		
		display: grid;
		border: 1px solid #000;
		grid-template-columns: repeat(10, 1fr);
		grid-template-rows: repeat(2, 4rem);

		&__img {
				grid-row: 1 / 3;
				grid-column: 1 / 3;
				overflow: hidden;

				&--src {
					width: 100%;
					height: 100%;
					object-fit: contain;
				}
		}
	}
</style>
