import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

export const BugButton = () => {

	const [error, setError] = useState(false);

	const handleActiveError = () => {
		setError(prevError => !prevError);
	}

	useEffect(() => {
		if (error) {
			throw new Error()
		}
	}, [error])


	return (
		<Button
			onClick={handleActiveError}
		>
			throw error

		</Button>
	)
}