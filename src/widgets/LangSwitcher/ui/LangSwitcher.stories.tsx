// LangSwitcher.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { LangSwitcher } from './LangSwitcher';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof LangSwitcher> = {
	title: 'widget/LangSwitcher',
	component: LangSwitcher,
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

export const LangSwitcherLight: Story = {
	args: {},
};

export const LangSwitcherDark: Story = {
	args: {},
};

LangSwitcherDark.decorators = [ThemeDecorator(Theme.DARK)]