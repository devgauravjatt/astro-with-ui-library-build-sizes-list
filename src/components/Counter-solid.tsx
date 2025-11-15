import { createSignal } from 'solid-js'

export default function Counter() {
	const [count, setCount] = createSignal(0)
	return (
		<div>
			<h1>this is solid counter</h1>
			<h2>{count()}</h2>
			<button onClick={() => setCount(count() + 1)}>Increment</button>
			<button onClick={() => setCount(count() - 1)}>Decrement</button>
		</div>
	)
}
