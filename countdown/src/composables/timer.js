import { ref, reactive } from 'vue'

export function desestructTime(timeInSeconds) {
	const dd = Math.floor(timeInSeconds / (24*60*60))
	const hh = Math.floor((timeInSeconds % (24*60*60))/(60*60))
	const mm = Math.floor(((timeInSeconds % (24*60*60)) % (60*60))/60)
	const ss = (((timeInSeconds % (24*60*60)) % 3600) % 60)

	return [dd, hh, mm, ss]
}

export const initTime = ref(737068)
export const spreadTime = reactive({
	DD: '00',
	HH: '00',
	MN: '00',
	SS: '00'
})
