import { Component, treact } from "@treact";

export const App: Component = () => {
	return (
		<>
			<Counter />
		</>
	);
};

export const Counter: Component = () => {
	const [counter, setCounter] = treact.useState(10);
	return (
		<div style="  display: grid; place-items: center;">
			<h1>Counter</h1>
			<button onClick={() => setCounter(counter + 1)}>{counter}</button>
		</div>
	);
};
