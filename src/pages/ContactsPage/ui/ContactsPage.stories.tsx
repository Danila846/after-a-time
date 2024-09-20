// ContactsPage.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import ContactsPage from './ContactsPage';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof ContactsPage> = {
	title: 'pages/ContactsPage',
	component: ContactsPage,
};

export default meta;
type Story = StoryObj<typeof ContactsPage>;

export const ContactsPageLight: Story = {
	args: {},
};

export const ContactsPageDark: Story = {
	args: {},
};

ContactsPageDark.decorators = [ThemeDecorator(Theme.DARK)]