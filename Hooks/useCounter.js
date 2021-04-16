import { useState } from 'react';

const useCounter = (initialState = 0) => {
	const [counter, setCounter] = useState(initialState);

	const increment = () => {
		setCounter(counter + 1);
	};

	const decrement = () => {
		setCounter(counter - 1);
	};

	const reset = () => {
		setCounter((c) => (c = initialState));
	};

	return {
		state: counter,
		increment,
		decrement,
		reset,
	};
};

export default useCounter;
