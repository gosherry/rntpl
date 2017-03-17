import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { View, Text } from 'react-native';
import commonStyle from '../../../assets/css/common';
import NavigatorBar from '../../components/common/navigatorbar';
import PNG from '../../../assets/img/message_num_bg.png';
import { fecthData } from '../../action/user';

class HomeContainer extends Component {

	constructor(props) {
	  super(props);
	  this.title = props.router.getCurrentRoute().title;
	}

	componentDidMount() {
		// 做一些网络请求操作
		this.props._fecthData();	
	}

	render() {
		console.log('====-=-=--==-', this.props.datas);
		return (
			<View style={ [commonStyle.container, { alignItems: 'center', justifyContent: 'center' }] }>
				<NavigatorBar
					title={ this.title }
					router={ this.props.router }/>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Text>login page</Text>
				</View>
			</View>
		);
	}
}

function mapStateToPorps(state) {
	const { app } = state;
	return {
		datas: app.get('cacheData'),
	};
}

function mapDispatchToProps(dispatch) {
	return {
		_fecthData: () => {
			dispatch(fecthData());
		}	
	}
}

export default connect(mapStateToPorps, mapDispatchToProps)(HomeContainer);
