import React from 'react'
import { useTranslation } from 'react-i18next';

const ContactsPage = () => {
	const { t } = useTranslation('contacts');

	return (
		<div>{t('Наши контакты')}</div>
	)
}

export default ContactsPage