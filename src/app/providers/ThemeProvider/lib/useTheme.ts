import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";
import { useContext } from "react";

interface useThemeResult {
	hundleClickThemeChange: () => void;
	theme: Theme;
}

export function useTheme(): useThemeResult {
	const { theme, setTheme } = useContext(ThemeContext);

	const hundleClickThemeChange = () => {
		const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
		setTheme(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	}

	return ({ theme, hundleClickThemeChange })
}