import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	head: {
		link: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossorigin: true
			},
			{
				rel:"stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap"
			}
		]
	}
})
