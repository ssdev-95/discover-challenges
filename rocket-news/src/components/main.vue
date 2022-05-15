<script setup>
import { email, showToast } from '../composables/toast'

function handleSubmit(e) {
	e.preventDefault()
	showToast()
	console.log(email.value)
}
</script>

<template>
<main>
	<div id="paragraph">
	  <span>update ideas and email's in 5 minutes.</span>
		<p>all you need to start the day well informed.</p>
		<p>news about <span>Rocketverse</span>, and all you need to to better start the day. perfect to prepare to code. ☕</p>
	</div>
	<form @submit="handleSubmit">
		<p>Insert your email</p>
		<label>
			<input
				type="email"
				v-model="email"
				required
				placeholder="oi@rocketseat.com.br"
			/>
			<button type="submit">
				<img src="/assets/send.svg" alt="Arrow icon" />
			</button>
		</label>
	</form>
	<a href="#">
		let me read first
		<img src="/assets/arrow-right.svg" alt="Arrow icon" />
	</a>
	</main>
</template>

<style scoped lang="scss">
@import "../colors.scss";

main {
	width: 100%;
	height: calc(100vh - 7rem);
	padding: 5vh 1rem 1rem;

	display: flex;
	flex-direction: column;
	gap: 6.5rem;

  & > div {
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
		max-width: 90vw;

		& span {
			color: $title-color;
			font-weight: 600;
			font-weight: 1.25rem;
		}

		& > p {
			font-weight: 400;
			font-size: 0.95rem;
			font-family: 'League Spartan', sans-serif;

			&:first-of-type {
				font-weight: 600;
			}
		}
	}

	form {
		p {
			color: $form-color;
		}

		label {
			display: flex;
			background: $text-color;
			border-left: 4px solid $title-color;
			color: $form-color;
			margin-top: 1.25rem;
	  
			input {
				flex:	1;
				border: 0;
				outline: 0;
				background: transparent;

				padding-left: 1.25rem;	
				color: $form-color;

				&::placeholder {
					color: $form-color;
				}

				&:focus {
					outline: 0;
					border: 0;
					color: $bg-button-color;
				}
			}

			button {
				border: none;
				border-radius: 0;
				padding: 0.5rem;
				background: $bg-button-color;

				display: flex;
				align-items: center;
				justify-content: center;

				img {
					filter: invert(100%);
				}
			}
		}
	}

	a {
		color: $bg-button-color;
		display: flex;
		align-items: center;
		gap: 0.89rem;
	}

	@media(min-width: 700px) {
		padding: 20vh 2rem 2rem;
		width: 60vw;
		gap: 2.5rem;
	}
}
</style>
