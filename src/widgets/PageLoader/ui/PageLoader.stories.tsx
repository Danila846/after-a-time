// PageLoader.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { PageLoader } from './PageLoader';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof PageLoader> = {
	title: 'widget/PageLoader',
	component: PageLoader,
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const PageLoaderLight: Story = {
	args: {},
};

export const PageLoaderDark: Story = {
	args: {},
};

PageLoaderDark.decorators = [ThemeDecorator(Theme.DARK)]