import React, { useState } from "react";
import * as classes from './Counter.module.scss'

export const Counter = () => {
	const LOCAL_STORAGE_INC_KEY = 'inc_count';

	const [counter, setCounter] = useState<number>(() => {
		const savedNumber = localStorage.getItem(LOCAL_STORAGE_INC_KEY);
		return savedNumber ? Number(savedNumber) : 0;
	});

	const handleClickInc = () => {
		setCounter((prevCounter) => {
			const newCounter = prevCounter + 1;
			localStorage.setItem(LOCAL_STORAGE_INC_KEY, String(newCounter));
			return newCounter;
		});
	}

	return (
		<div>
			<button className={classes.btn} onClick={handleClickInc}>Incriment: {counter}</button>
		</div>
	)
}