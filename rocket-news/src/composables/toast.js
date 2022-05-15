import { ref, watch } from 'vue'

export const isToastShown = ref(false)
export const email = ref("")

export function showToast() {
	isToastShown.value = true
}

function hideToast() {
	isToastShown.value = false

	setTimeout(() => {
		email.value = ""
	}, 2000)
}

watch(isToastShown, () => {
	setTimeout(hideToast, 2500)
})
