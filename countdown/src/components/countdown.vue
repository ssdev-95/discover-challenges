<template>
<div>
<!--
<div class="timer">
  <div class="card">
		<p>Days</p>
		<p>{{String(time.days).padStart(2, '0')}}</p>
	</div>
	<div class="card">
		<p>Hours</p>
		<p>{{String(time.hours).padStart(2, '0')}}</p>
	</div>
	<div class="card">
		<p>Minutes</p>
		<p>{{String(time.minutes).padStart(2, '0')}}</p>
	</div>
	<div class="card">
		<p>Seconds</p>
	  <p>{{String(time.seconds).padStart(2, '0')}}</p>
	</div>
</div>
-->
<p>{{time.value}}</p>
</div>
</template>

<script setup>
import { onUpdated, watch, reactive } from 'vue'

let time = reactive({
	init: 737068,
	days: 0,
	hours: 0,
	minutes: 0,
	seconds: 0
})

function desestructTime(timeInSeconds) {
	const dd = Math.floor(timeInSeconds / (24*60*60))

  const hh = Math.floor((timeInSeconds % (24*60*60))/(60*60))

	const mm = Math.floor(((timeInSeconds % (24*60*60)) % (60*60))/60)
 
	const ss = (((timeInSeconds % (24*60*60)) % 3600) % 60)

	return [dd, hh, mm, ss]
}

watch(time.init, ()=>{
	const [dd, hh, mm, ss] = desestructTime(init)
	time.days = dd
	time.hours = hh
	time.minutes = mm
	time.seconds = ss
})

onUpdated(()=>{
	if (time.init > 0) {
		setTimeout(() => {
			time.init -= 1
		}, 1000)
	}
})
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
