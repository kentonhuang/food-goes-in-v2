<template>
	<div class="restaurant-item">
		<div class="restaurant-item__img">
			<img src="https://i.imgur.com/8OkJUS0.jpg" alt="Restaurant List Image" class="restaurant-item__img--src">
		</div>
		<span class="restaurant-item__name">Piccolo Pete's</span>
		<span class="restaurant-item__address">123 Bayshore Blvd, San Francisco CA, 94134</span>
	</div>
</template>

<script>
export default {
	
}
</script>

<style lang="scss">
	.restaurant-item {
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
					object-fit: contain;
				}
		}

		&__name {
			grid-column: 3 / 7;
			justify-self: start;
			align-self: center;
			font-size: 1.6rem;
			font-weight: 700;
		}

		&__address {
			grid-column: 7 / -1;
			justify-self: end;
			align-self: center;
			font-size: 1.3rem
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
