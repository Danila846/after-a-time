import Reaact, { useState, Suspense, useContext } from 'react';
import './styles/index.scss'
import { Link, Route, Routes } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { ContactsPage } from 'pages/ContactsPage';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';

const App = () => {
	const { theme, hundleClickThemeChange } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<button className="btn" onClick={hundleClickThemeChange}>Active-theme:{theme}</button>
			<Link to={'/'}>Home</Link>
			<Link to={'/about'}>About</Link>
			<Link to={'/contacts'}>Contacts</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/about'} element={<AboutPage />} />
					<Route path={'/contacts'} element={<ContactsPage />} />
					<Route path={'/'} element={<MainPage />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;