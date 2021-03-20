//Core
import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
//Components
import { Header, Footer, Layout, Loader } from '../Commons';
//Routes
import routes from 'router';

const App = () => (
	<>
		<Header />

		<Layout>
			<Suspense fallback={<Loader onLoad={true} />}>
				<Switch>
					{routes.map(({ component: Component, ...route }) => (
						<Route key={route.path} {...route} render={props => <Component {...props} />} />
					))}
				</Switch>
			</Suspense>
		</Layout>

		<Footer />
	</>
);

export default App;
