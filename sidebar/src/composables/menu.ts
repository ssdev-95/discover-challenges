import { Ref, ref } from 'vue'

export const isMenuOpen: Ref<boolean> = ref(false)
export const selectedRole: Ref<string> = ref('Search')

export const roles = [
	{ name:"Search", icon:"search.svg" },
	{ name:"Dashboard", icon: "grid.svg" },
	{ name:"Pets", icon: "pet.svg" },
	{ name:"Customers", icon: "user.svg" },
	{ name:"Vets", icon: "vet.svg" },
	{ name:"Settings", icon: "settings.svg" }
]

export function toggleSelectedRole(role:strimg) {
	selectedRole.value = role
}

export function toggleMenu() {
	isMenuOpen.value = !isMenuOpen.value
}
