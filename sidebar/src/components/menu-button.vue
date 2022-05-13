<script setup lang="ts">
import { toggleMenu } from '../composables/menu'
</script>

<template>
<button>
	<img
		@click="toggleMenu"
	  src="../assets/menu.svg"
		alt="Menu button icon"
	/>
</button>
</template>
