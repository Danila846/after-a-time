import React from "react";
import './app/styles/index.scss';
// import { render } from "react-dom";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import "shared/config/i18n/i18n";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { StoreProvider } from "app/providers/StoryProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StoreProvider>
		<BrowserRouter>
			<ErrorBoundary>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
		</BrowserRouter>
	</StoreProvider>,
	// document.getElementById('root')
)