import { Ref, ref, watch } from 'vue'

interface AnimateProps {
	reverse: boolean;
	element: typeof toast;
}

export const isOpen: Ref<boolean> = ref(false)

export function showToast() {
	isOpen.value = true
}

function hideToast() {
	isOpen.value = false
}

watch(isOpen, () => {
	if(isOpen) {
		setTimeout(hideToast, 3000)
	}
})
