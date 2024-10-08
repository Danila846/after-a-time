// AboutPage.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import AboutPage from './AboutPage';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof AboutPage> = {
	title: 'pages/AboutPage',
	component: AboutPage,
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const AboutPageLight: Story = {
	args: {},
};

export const AboutPageDark: Story = {
	args: {},
};

AboutPageDark.decorators = [ThemeDecorator(Theme.DARK)]