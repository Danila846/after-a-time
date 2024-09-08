import { lazy } from 'react';

export const ContactsPageAsync = lazy(() => new Promise(resolve => {
	// @ts-ignore
	setTimeout(() => resolve(import('./ContactsPage')), 3000);
}));