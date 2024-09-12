import { lazy } from 'react';

export const ContactsPageAsync = lazy(() => new Promise(resolve => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	setTimeout(() => resolve(import('./ContactsPage')), 3000);
}));