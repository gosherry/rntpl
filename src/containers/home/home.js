import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { View, Text, Dimensions } from 'react-native';
import commonStyle from '../../../assets/css/common';
import NavigatorBar from '../../components/common/navigatorbar';

class HomeContainer extends Component {

	constructor(props) {
	  super(props);
		this.title = '首页';
	}

	render() {
		return (
			<View style={ commonStyle.container }>
				<NavigatorBar
					title={ this.title }
					firstLevelIconFont='&#xe64c;'
					secondLevelIconFont='&#xe677;'
					hiddenBackIcon={ true } 
					firstLevelClick={ () => console.log(1111) }
					secondLevelClick={ () => console.log(222) }/>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Text>首页</Text>
					
				</View>
			</View>
		);
	}
}

export default connect()(HomeContainer);
