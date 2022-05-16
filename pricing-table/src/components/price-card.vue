<script setup lang="ts">
import { PlanType } from '../composables/plans'
const { plan } = defineProps<{ plan: PlanType }>()

function beautify() {
	return plan.price.split('.')
}

function extractKey(nbr:number, str:string) {
	const temp1 = String(nbr).padStart(3, '0')
	const temp2 = str.split(' ').join('_')
	return `${temp2}--${temp1}`
}

const [full, cents] = beautify()
</script>

<template>
<div>
  <header>
		<h1>{{plan.name}}</h1>
		<span v-if="plan.popular">POPULAR</span>
	</header>
	<div>
	  <p>
		  US$ {{full}},
			<p>{{cents}}</p>
			<span>/month</span>
		</p>
		<p>{{plan.description}}</p>
	</div>
	<div>
		<span
			v-for="(feat, index) of plan.features"
			:key="extractKey(index,feat)"
		>
			<img src="/check.svg" alt="Check svg icon" />
			{{feat}}
		</span>
	</div>
	<footer>
		<button>SUBSCRIBE</button>
	</footer>
</div>
</template>

<style lang="scss">
@import "../colors.scss";
</style>
