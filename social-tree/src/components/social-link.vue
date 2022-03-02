<template>
<a
	v-if="url"
	:href="url"
	target="__blank"
>
  <img :src="icon" :alt="alt" />
</a>
<button v-else disabled >
	<img :src="icon" :alt="alt" />
</button>
</template>

<script setup >
const { alt, url, icon} = defineProps(['alt', 'url', 'icon'])
</script>
