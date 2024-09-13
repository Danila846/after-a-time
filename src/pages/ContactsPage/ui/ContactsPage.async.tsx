import { lazy } from 'react';

export const ContactsPageAsync = lazy(() => new Promise(resolve => {
	// @ts-expect-error
	setTimeout(() => resolve(import('./ContactsPage')), 30000);
}));