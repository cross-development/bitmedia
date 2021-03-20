//Core
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//Components
import App from 'components/App';
//Redux
import { Provider } from 'react-redux';
import store from 'redux/store';
//Styles
import 'index.scss';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root'),
);
