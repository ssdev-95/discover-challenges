<template>
<div class="timer">
  <div class="card">
		<p>Days</p>
		<p>08</p>
	</div>
	<div class="card">
		<p>Hours</p>
		<p>12</p>
	</div>
	<div class="card">
		<p>Minutes</p>
		<p>44</p>
	</div>
	<div class="card">
		<p>Seconds</p>
		<p>28</p>
	</div>
</div>
</template>

<script setup>
</script>

<style scoped lang="scss">
.timer {
	display: grid;
	gap: 2rem;

	max-width: 80vw;
	
	grid-template-columns: repeat(2, 50%);
	grid-template-rows: repeat(2, 50%);
	grid-template-areas: "TPL TPR" "BTL BTR";

	@media(min-width:860px) {
		display: flex;
	}
}

.card {
  display: block;

	& p {
		font-family: 'Poppins', sans-serif;
		font-size: 1rem;
		color: lightgray;
		margin: 0 auto;
		font-weight: 400;
		text-align: center;
		line-height: 16px;

		&:last-of-type {
			font-size: 3.5rem;
			line-height: 56px;
			color: #3c3c3c;
			margin-top: 2px;
			font-weight: 500;
			letter-spacing: 2px;
		}
	}

	@media(max-width:860px) {
		&:first-child {
			grid-area: TPL;
		}

		&:nth-child(2) {
			grid-area: TPR;
		}

		&:nth-child(3) {
			grid-area: BTL;
		}

		&:last-child {
			grid-area: BTR;
		}
	}
}
</style>
