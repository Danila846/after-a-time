import React from 'react'
import { AboutPage } from "pages/AboutPage"
import { ContactsPage } from "pages/ContactsPage"
import { MainPage } from "pages/MainPage"
import { RouteProps } from "react-router-dom"
import { NotFoundPage } from 'pages/NotFoundPage'


export enum AppRouters {
	MAIN = "main",
	ABOUT = "about",
	CONTACTS = "contacts",
	NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRouters, string> = {
	[AppRouters.MAIN]: '/',
	[AppRouters.ABOUT]: '/about',
	[AppRouters.CONTACTS]: '/contacts',
	[AppRouters.NOT_FOUND]: '*',
}

export const routerConfig: Record<AppRouters, RouteProps> = {
	[AppRouters.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />
	},
	[AppRouters.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPage />
	},
	[AppRouters.CONTACTS]: {
		path: RoutePath.contacts,
		element: <ContactsPage />
	},
	[AppRouters.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <NotFoundPage />
	},
}