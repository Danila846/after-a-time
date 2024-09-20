// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Button> = {
	title: 'shared/Button',
	component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
	args: {
		children: 'Clear Button',
		theme: ThemeButton.CLEAR,
		className: "clear",
	},
};

export const ClearDark: Story = {
	args: {
		children: 'Clear dark Button',
		theme: ThemeButton.CLEAR,
		className: "clear",
	},
};

ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Primary: Story = {
	args: {
		children: 'Primary Button', // Убедитесь, что `label` также указан
		theme: ThemeButton.PRIMARY,
		className: "primary",
	},
};

export const PrimaryDark: Story = {
	args: {
		children: 'Primary dark Button', // Убедитесь, что `label` также указан
		theme: ThemeButton.PRIMARY,
		className: "primary",
	},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Secondary: Story = {
	args: {
		children: 'Secondary Button',
		theme: ThemeButton.SECONDARY,
		className: "secondary"
	},
};

export const SecondaryDark: Story = {
	args: {
		children: 'Secondary dark Button',
		theme: ThemeButton.SECONDARY,
		className: "secondary"
	},
};

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Light: Story = {
	args: {
		children: 'Light Button',
		theme: ThemeButton.LIGHT,
		className: "Light"
	},
};

export const LightDark: Story = {
	args: {
		children: 'Light dark Button',
		theme: ThemeButton.LIGHT,
		className: "Light"
	},
};

LightDark.decorators = [ThemeDecorator(Theme.DARK)]