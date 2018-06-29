<template>
	<div class="restaurant-container">
		<div class="restaurant-detail">
			<div class="restaurant-detail__img--container">
				<img class="restaurant-detail__img--container__img" src="https://i.imgur.com/8OkJUS0.jpg" alt="Restaurant Image">
			</div>
			<h4 class="restaurant-detail__name">Piccolo Pete's</h4>
			<div class="restaurant-detail__info-1">
				<p>FOUR STARS</p>
				<p>FOUR DOLLAR SIGNS</p>
				<p>497 REVIEWS</p>
				<p>OPEN NOW: YES</p>
				<p>SOMETHING ELSE</p>
				<p>SOMETHING ELSE</p>
				<a href="#" class="btn-text margin-top-sm">Open in Yelp &rarr;</a>
				</div>
			<div class="restaurant-detail__info-2">
				<p>34 Bayshore Blvd</p>
				<p>San Francisco, CA 94134</p>
				<p>(415)933-4330</p>
				</div>
			<div class="restaurant-detail__review"><p>&ldquo;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam placeat recusandae labore veritatis enim nisi...&rdquo;</p></div>
		</div>
	</div>
</template>

<script>
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
			}

			&__info-1 {
				grid-row: 2 / 4;
			}

			&__info-2 {

			}

			&__review {
				font-size: 1.1rem;
				font-style: italic;
				color: #888;
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

</style>