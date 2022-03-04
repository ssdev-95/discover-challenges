<template>
<div>
<div class="timer">
  <div class="card">
		<p>Days</p>
		<p>{{String(days).padStart(2, '0')}}</p>
	</div>
	<div class="card">
		<p>Hours</p>
		<p>{{String(hours).padStart(2, '0')}}</p>
	</div>
	<div class="card">
		<p>Minutes</p>
		<p>{{String(minutes).padStart(2, '0')}}</p>
	</div>
	<div class="card">
		<p>Seconds</p>
	  <p>{{String(seconds).padStart(2, '0')}}</p>
	</div>
</div>
<p>{{time.value}}</p>
</div>
</template>

<script setup>
import { ref } from 'vue'

let time = ref(737068)

let days = 0
let hours = 0
let minutes = 0
let seconds = 0

function desestructTime(timeInSeconds) {
	const dd = Math.floor(timeInSeconds / (24*60*60))

  const hh = Math.floor((timeInSeconds % (24*60*60))/(60*60))

	const mm = Math.floor(((timeInSeconds % (24*60*60)) % (60*60))/60)

   const ss = (((timeInSeconds % (24*60*60)) % 3600) % 60)

	 return [dd, hh, mm, ss]
}

/*try {
setTimeout(() => { console.log('deu bom :D') }, 2000)

do {*/
	const [dd, hh, mm, ss] = desestructTime(time.value)

	days = dd
	hours = hh
	minutes = mm
	seconds = ss
/*	
	setTimeout(() => {
		time.value = time.value - 1
	}, 1000)
} while (time.value > 0)
} catch (err ) {
	alert(err)
}*/
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
