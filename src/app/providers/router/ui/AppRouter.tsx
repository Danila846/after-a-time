import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => {
	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				{Object.values(routerConfig).map(({ element, path }) => (
					<Route
						key={path}
						path={path}
						element={(
							<div className="page-wrapper">
								{element}
							</div>
						)}
					/>
				))}
			</Routes>
		</Suspense>
	)
}

export default AppRouter