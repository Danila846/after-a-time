import Reaact from 'react';
import './styles/index.scss'
import { Link, Route, Routes } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { ContactsPage } from 'pages/ContactsPage';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<div className={'page-content'}>
				<Sidebar />
				<AppRouter />
			</div>
		</div>
	);
};

export default App;