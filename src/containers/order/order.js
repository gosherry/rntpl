import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { View, Text } from 'react-native';
import commonStyle from '../../../assets/css/common';
import NavigatorBar from '../../components/common/navigatorbar';

class OrderContainer extends Component {

	constructor(props) {
	  super(props);
	  this.title = '订单';
	}

	render() {
		return (
			<View style={ [commonStyle.container, { alignItems: 'center', justifyContent: 'center' }] }>
				<NavigatorBar 
					title={ this.title }
					firstLevelIconFont='&#xe64c;'
					hiddenBackIcon={ true } 
					firstLevelClick={ () => console.log(1111) }/>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Text>订单</Text>
				</View>
			</View>
		);
	}
}

export default connect()(OrderContainer);
