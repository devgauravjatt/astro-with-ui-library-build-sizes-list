<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
	count.value++
}
const decrement = () => {
	count.value--
}
</script>

<template>
	<div>
		<h1>this is vue counter</h1>
		<h2>{{ count }}</h2>
		<button @click="increment">Increment</button>
		<button @click="decrement">Decrement</button>
	</div>
</template>
