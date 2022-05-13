<script setup lang="ts">
import { 
	isMenuOpen, toggleSelectedRole, selectedRole
} from '../composables/menu'
const { role, icon } = defineProps<{
	role: string, icon: string
}>()

/*const src = require(icon)
alert(JSON.stringify(src))*/
</script>

<template>
<button
	@click="() => toggleSelectedRole(role)"
	id="role-button"
	:class="selectedRole === role ? 'active' : ''"
	:style="isMenuOpen ? 'gap: 1rem;' : 'gap: 0;'"
>
	<img
	  :src="icon"
		:alt="src"
	/>
	<span :style="!isMenuOpen ? 'width:0;' : 'width:8.2rem;'">
	  <!--span class="pl-2"></span-->
		{{role}}
	</span>
</button>
</template>

<style scoped lang="scss">
@import "../colors.scss";

#role-button {
	display: flex;
	align-items: center;
	justify-content: flex-start;

	height: 3.45rem;
	padding: 0 1rem;
	overflow: hidden;

	font-size: 1rem;
	border-radius: 0.85rem;
	transition: width 0.5s cubic-bezier(0.7,0.7,0.7,0.7);

	& > span {
		text-align: left;
		overflow: hidden;
		transition: width 0.5s cubic-bezier(0.7,0.7,0.7,0.7);

		.pl-2 {
			padding-left: 4px
		}
	}

	&.active {
		background: $light-green;
	}
}
</style>
