// Loader.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';
import { ThemeDecorator } from '../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Loader> = {
	title: 'shared/Loader',
	component: Loader,
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const LoaderLight: Story = {
	args: {},
};

export const LoaderDark: Story = {
	args: {},
};

LoaderDark.decorators = [ThemeDecorator(Theme.DARK)]