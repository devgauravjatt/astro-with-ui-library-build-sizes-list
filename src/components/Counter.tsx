import { useState } from 'react'

export default function Counter() {
	const [count, setCount] = useState(0)
	return (
		<div>
			<h1>this is react counter</h1>
			<h2>{count}</h2>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<button onClick={() => setCount(count - 1)}>Decrement</button>
		</div>
	)
}
