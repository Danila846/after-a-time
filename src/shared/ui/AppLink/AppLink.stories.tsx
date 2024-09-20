// AppLink.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof AppLink> = {
	title: 'shared/AppLink',
	component: AppLink,
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const LinkOne: Story = {
	args: {
		children: 'Link-one AppLink',
		theme: AppLinkTheme.LINK_ONE,
		className: "link-one",
	},
};

export const LinkOneDark: Story = {
	args: {
		children: 'Link-one-dark AppLink',
		theme: AppLinkTheme.LINK_ONE,
		className: "link-one",
	},
};

LinkOneDark.decorators = [ThemeDecorator(Theme.DARK)]

export const LinkTwo: Story = {
	args: {
		children: 'Link-two AppLink',
		theme: AppLinkTheme.LINK_TWO,
		className: "link-two",
	},
};

export const LinkTwoDark: Story = {
	args: {
		children: 'Link-two-dark AppLink',
		theme: AppLinkTheme.LINK_TWO,
		className: "link-two",
	},
};

LinkTwoDark.decorators = [ThemeDecorator(Theme.DARK)]

export const LinkThree: Story = {
	args: {
		children: 'Link-three AppLink',
		theme: AppLinkTheme.LINK_THREE,
		className: "link-three",
	},
};

export const LinkThreeDark: Story = {
	args: {
		children: 'Link-three-dark AppLink',
		theme: AppLinkTheme.LINK_THREE,
		className: "link-three",
	},
};

LinkThreeDark.decorators = [ThemeDecorator(Theme.DARK)]
