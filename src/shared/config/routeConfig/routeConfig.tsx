import { AboutPage } from "pages/AboutPage"
import { ContactsPage } from "pages/ContactsPage"
import { MainPage } from "pages/MainPage"
import { RouteProps } from "react-router-dom"


export enum AppRouters {
	MAIN = "main",
	ABOUT = "about",
	CONTACTS = "contacts",
}

export const RoutePath: Record<AppRouters, string> = {
	[AppRouters.MAIN]: '/',
	[AppRouters.ABOUT]: '/about',
	[AppRouters.CONTACTS]: '/contacts',
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
}