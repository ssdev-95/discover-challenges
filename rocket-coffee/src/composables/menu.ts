import { Ref, ref } from 'vue'

export const isOpen: Ref<boolean> = ref(false)

export function toggleMenu() {
	isOpen.value = !isOpen.value
};
