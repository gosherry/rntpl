import React, { Component } from 'react';
import { 
	Image, 
	Dimensions, 
	AsyncStorage,
	InteractionManager 
} from 'react-native';
import { connect } from 'react-redux';
import SplashImg from '../../../assets/img/splash.png';
import Storage from '../../utils/storage';
const { width, height } = Dimensions.get('window');
import MainContainer from '../../containers/app/main';
import Guide from '../../components/app/guide';

class Splash extends Component {

	constructor(props) {
	  super(props);
	}

	componentDidMount() {
		this._getInitData().done();
	}

	async _getInitData() {
		const { navigator } = this.props;
		const result = await AsyncStorage.getItem('welcome');
		let component;
		let title;
		if (result && result * 1 === 1) {
			title = 'Main';
			component = MainContainer;
		} else {
			title = 'Guide';
			component = Guide;
		}
		this.timer = setTimeout(() => {
			InteractionManager.runAfterInteractions(() => {
				navigator.resetTo({
					component: component,
					name: title,
				});
			});
		}, 3000);		
	}

	componentWillUnmount() {
		this.timer && clearTimeout(this.timer);
	}

	render() {
		return (
			<Image
				resizeMode='stretch'
				style={{ flex: 1, width, height }}
				source={ SplashImg }/>
		);
	}
}

export default connect()(Splash);
