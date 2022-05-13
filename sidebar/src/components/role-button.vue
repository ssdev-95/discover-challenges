<script setup lang="ts">
import { 
	isMenuOpen, toggleSelectedRole, selectedRole
} from '../composables/menu'
const { role } = defineProps<{
	role: { name: string, icon: string }
}>()

const src = `../assets/${role.icon}`
</script>

<template>
<button
	@click="() => toggleSelectedRole(role.name)"
	id="role-button"
	:class="selectedRole === role.name ? 'active' : ''"
>
	<img
	  src="../assets/user.svg"
		:alt="src"
	/>
	<span v-if="isMenuOpen">{{role.name}}</span>
</button>
</template>

<style scoped lang="scss">
@import "../colors.scss";

#role-button {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 1rem;

	width: 100%;
	height: 2.5rem;
	padding: 1.75rem 1rem;

	font-size: 1rem;
	border-radius: 0.85rem;

	&.active {
		background: $light-green;
	}
}
</style>
