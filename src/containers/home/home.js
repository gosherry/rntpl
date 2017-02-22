import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { View, Text, Dimensions } from 'react-native';
import commonStyle from '../../../assets/css/common';
import NavigatorBar from '../../components/common/navigatorbar';

class HomeContainer extends Component {

	constructor(props) {
	  super(props);
	}

	render() {
		return (
			<View style={ commonStyle.container }>
				<NavigatorBar 
					title='page1'
					firstLevelIconFont='&#xe64c;'
					secondLevelIconFont='&#xe677;'
					hiddenBackIcon={ true } />
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Text>home page</Text>
				</View>
			</View>
		);
	}
}

export default connect()(HomeContainer);
