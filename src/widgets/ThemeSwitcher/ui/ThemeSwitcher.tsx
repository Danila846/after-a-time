import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, hundleClickThemeChange } = useTheme();

	return (
		<Button
			theme={ThemeButton.CLEAR}
			className={classNames(cls.ThemeSwitcherWrap, {}, [className])}
			onClick={hundleClickThemeChange}
		>
			<span className={classNames(cls.ThemeSwitcher, {}, [className, cls[theme]])}>
				{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
			</span>
		</Button>
	)
}