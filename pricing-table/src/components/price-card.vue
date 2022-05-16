<script setup lang="ts">
import { plans, IPlan } from '../composables/plans'

const { planid } = defineProps<{ planid: string }>()

function beautify(plan:IPlan) {
	return plan.price.split('.')
}

/*function extractKey(nbr:number, str:string) {
	const temp1 = String(nbr).padStart(3, '0')
	const temp2 = str.split(' ').join('_')
	return `${temp2}--${temp1}`
}*/

const plan = plans.find(item => item.id === planid)
const [full, cents] = beautify(plan)
</script>

<template>
<div
	id="pricing-card_wrapper"
	:class="plan.popular ? 'contrast' : ''"
>
  <!--p>{{JSON.stringify(plan)}}</p-->
  <header>
		<h1>{{plan.name}}</h1>
		<div class="badge">
			<span v-if="plan.popular">POPULAR</span>
		</div>
	</header>
	<div class="price-container">
	  <p class="price">
		  US$ {{full}},
			<p>{{cents}}</p>
			<span>/month</span>
		</p>
		<p class="description">{{plan.description}}</p>
	</div>
	<div class="feature-container">
		<span
			v-for="(feat, index) of plan.features"
			:key="index"
		>
			<img
				src="/check.svg"
				alt="Check svg icon"
			/>
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

#pricing-card_wrapper {
	background: white;
	border-radius: 0.62rem;
	box-shadow: $gray 3px 3px 8px 2px;

	height: 21.4375rem;
	width: 15.53125rem;

	header {
		width: 100%;
		height: 20%;
		font-weight: 400;
		border-radius: 0.62rem 0.62rem 0 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 1rem;

		h1 {
			font-weight: 400;
			font-size: 1.45rem;
		}
	}

	& > div {
		display: flex;
		flex-direction: column;

		width: 100%;

		&.price-container {
			height: 24%;
			padding: 0.2rem 0.4rem;

			& > p {
				display: flex;
				align-items: flex-end;

				&:first-of-type {
					font-size: 2rem;
					font-weight: 600;

					p {
						font-size: 1rem;
						transform: translateY(-0.25rem);
					}

					span {
						font-size: 1rem;
						font-weight: 400;
						color: $gray;
						transform: translateY(-0.25rem);
					}
				}

				&:last-of-type {
					font-size: 0.8rem;
					text-align: left;
					overflow-x: hidden;
					text-overflow: ellipsis;
					width: 100%;
					color: $gray;
				}
			}
		}

		&.feature-container {
			height: 36%;
			padding: 0.5rem 0.35rem;
			
			justify-content: flex-start;
			gap: 0.5rem;

			span {
				display: flex;
				align-items: center;
				color: $gray;
			}
		}
	}

	button {
		width: 10rem;
		font-weight: 600;
		background: white;
		color: $blue;
		border: 1px solid $blue;
		border-radius: 0.62rem;
		padding: 0.5rem 0;
	}

	footer {
		width: 100%;
		height: 20%;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	&.contrast {
		header {
			background: $yellow;
			color: $blue;

			div.badge {
				padding: 0.35rem 0.95rem;
				border-radius: 1.5rem;
				background: $blue;

				span {
					color: $white;
				}
			}
		}

		button {
			background: $blue;
			color: $white;
			border: 0;
		}
	}

	@media(min-width: 700px) {
		height: 30.625rem;
		width: 22.1875rem;

		header {
			h1 {
				font-size: 1.85rem;
			}

			span {
				font-size: 1.45rem;
			}
		}

		button {
			width: 296px;
			padding: 1rem 0;
		}

		&.contrast {
			transform: translateY(-0.5rem);
		}

		& > div {
			padding: 1rem !important;

			&.price-container {
				& > p {
					font-size: 1.25rem !important;

					&.price {
						font-size: 2.5rem !important;
					}

					span, p {
						font-size: 1.5rem !important;
					}
				}
			}

			&.feature-container {
				span {
					font-size: 1.35rem;
					gap: 1rem;
				}
			}
		}
	}
}
</style>
