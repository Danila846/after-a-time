import Reaact, { useState, Suspense, useContext } from 'react';
import { Counter } from "./component/counter/Counter";
import './styles/index.scss'
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { ContactsPageAsync } from './pages/ContactsPage/ContactsPage.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';
// import { Theme, ThemeContext } from './theme/ThemeContext';

const App = () => {
	const { theme, hundleClickThemeChange } = useTheme();
	const bool = true;

	return (
		<div className={classNames('app', {}, [theme])}>
			<Counter />
			<button className="btn" onClick={hundleClickThemeChange}>Active-theme:{theme}</button>
			<Link to={'/'}>Home</Link>
			<Link to={'/about'}>About</Link>
			<Link to={'/contacts'}>Contacts</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/about'} element={<AboutPageAsync />} />
					<Route path={'/contacts'} element={<ContactsPageAsync />} />
					<Route path={'/'} element={<MainPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;