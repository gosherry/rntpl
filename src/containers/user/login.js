import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { View, Text } from 'react-native';
import commonStyle from '../../../assets/css/common';
import NavigatorBar from '../../components/common/navigatorbar';
import PNG from '../../../assets/img/message_num_bg.png';

class HomeContainer extends Component {

	constructor(props) {
	  super(props);
	  this.title = props.router.getCurrentRoute().title;
	}

	render() {
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

export default connect()(HomeContainer);
