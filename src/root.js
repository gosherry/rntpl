import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import configureStore from './store/configureStore';
import App from './containers/app/app';

class Root extends React.Component {

	constructor(props) {
	  super(props);
		this.store = configureStore();
	  this.state = {};
	}

	render() {
		return (
			<Provider store={ this.store }>
				<App />
			</Provider>
		);
	}
}

AppRegistry.registerComponent('rntpl', () => Root);

