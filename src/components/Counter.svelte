<script lang="ts">
	let count = $state(0)
</script>

<div>
	<h1>this is svelte counter</h1>
	<h2>{count}</h2>
	<button onclick={() => count++}>Increment</button>
	<button onclick={() => count--}>Decrement</button>
</div>
