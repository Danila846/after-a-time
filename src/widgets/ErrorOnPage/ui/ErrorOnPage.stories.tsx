// ErrorOnPage.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ErrorOnPage } from './ErrorOnPage';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof ErrorOnPage> = {
	title: 'widget/ErrorOnPage',
	component: ErrorOnPage,
};

export default meta;
type Story = StoryObj<typeof ErrorOnPage>;

export const Light: Story = {
	args: {},
};


export const Dark: Story = {
	args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)]