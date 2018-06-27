<template>
	<header class="header">
		<form class="form">
			<input type="text" class="form__input form__input--term">
			<input type="text" class="form__input">
			<button type="submit">Find Restaurant</button>
		</form>
	</header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
	.header {
		height: 6.4rem;
		background-color: $color-grey-dark-2;
		padding: 1.5rem 3rem;
		display: flex;
		justify-content: center;
	}

	.form {
		position: relative;
		display: flex;

		&__input {
			border: none;
			padding: 1rem 1.5rem;
			font-size: 1.4rem;
			width: 50%;

			&:focus {
				outline: none;
			}

			&--term::after {
				height: 100%;
				width: 1px;
				content: 'a';
				background-color: #000;
			}
		}

		button {
			position: absolute;
		}
		
	}
</style>