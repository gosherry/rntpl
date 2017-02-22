import React, { Component } from 'react';
import {
	View,
	Navigator,
	StatusBar,
} from 'react-native';
import Splash from './splash';
import Router from '../../configs/router';

class App extends Component {
	constructor(props) {
	  super(props);
    this.renderScene = this.renderScene.bind(this);
	}

  renderScene(route, navigator) {
    this.router = this.router || new Router(navigator);
    const Component = route.component;
    return (
      <Component
        route={ route }
        router={ this.router }
        navigator={ navigator } />
    );
  }

  configureScene(route, routeStack) {
    if (route.type === 'bottom') {
      return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
    }
    return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
  }

	render() {
		return (
      <View style={{ flex: 1 }}>
        <StatusBar
         backgroundColor='#2562b4'
         barStyle='light-content'/>
        <Navigator
          ref='navigator'
          style={{ flex: 1 }}
          configureScene={ this.configureScene }
          renderScene={ this.renderScene }
          initialRoute={{
            component: Splash,
            name: 'Splash'
          }}/>
      </View>
		);
	}
}

export default App;
