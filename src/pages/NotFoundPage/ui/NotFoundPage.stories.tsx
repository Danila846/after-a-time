// NotFoundPage.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import NotFoundPage from './NotFoundPage';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof NotFoundPage> = {
	title: 'pages/NotFoundPage',
	component: NotFoundPage,
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const NotFoundPageLight: Story = {
	args: {
		// children: 'Clear NotFoundPage',
	},
};

export const NotFoundPageDark: Story = {
	args: {
		// children: 'Clear dark NotFoundPage',
	},
};

NotFoundPageDark.decorators = [ThemeDecorator(Theme.DARK)]