import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { View, Text, Button } from 'react-native';
import commonStyle from '../../../assets/css/common';
import NavigatorBar from '../../components/common/navigatorbar';

class UserCenterContainer extends Component {

	constructor(props) {
	  super(props);
	  this.title = '个人中心';
	}

	render() {
		return (
			<View style={ [commonStyle.container, { alignItems: 'center', justifyContent: 'center' }] }>
				<NavigatorBar 
					title={ this.title }
					hiddenBackIcon={ true } />
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Text>个人中心</Text>
					<Button 
						title='登录' 
						color='#841584'
						onPress={ () => this.props.router.toLogin() } />									
				</View>
			</View>
		);
	}
}

export default connect()(UserCenterContainer);
