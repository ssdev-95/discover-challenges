export const plans = [
	{
		id: "FREE_uUwh2998uH8_987",
		name: "Free",
		description: "Mussum Ipsum, cacilds vidis litro abertis.",
		price: "0.00",
		popular: false,
		features: [
			"Lorem ipsum dolor sit amet",
			"Lorem ipsum dolor sit amet"
		]
	},
	{
		id: "ESSENTIALS_WsIXJ38u2w8_8ua",
		name: "Essentials",
		description: "Forevis aptent taciti sociosqu ad litora torquent.",
		price: "28.99",
		popular: true,
		features: [
			"Lorem ipsum dolor sit amet",
			"Lorem ipsum dolor sit amet",
			"Lorem ipsum dolor sit amet"
		]
	},
	{
		id: "PRO_287Hn3I9a2s_y2h",
		name: "Professional",
		description: "Paisis, filhis, espiritis santis.Leite de capivaris, leite de mula manquis sem cabeça.",
		price: "58.99",
		popular: false,
		features: [
			"Lorem ipsum dolor sit amet",
			"Lorem ipsum dolor sit amet",
			"Lorem ipsum dolor sit amet",
			"Lorem ipsum dolor sit amet"
		]
	}
]

export type PlanType = {
	id: string;
	name: string;
	description: string;
	price: number;
	popular: boolean;
	features: string[];
}
