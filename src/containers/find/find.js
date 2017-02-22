import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { View, Text } from 'react-native';
import commonStyle from '../../../assets/css/common';
import NavigatorBar from '../../components/common/navigatorbar';

class FindContainer extends Component {

	constructor(props) {
	  super(props);
	  this.title = '发现';
	}

	render() {
		return (
			<View style={ [commonStyle.container, { alignItems: 'center', justifyContent: 'center' }] }>
				<NavigatorBar
					title={ this.title }
					optTitle='完成'
					firstLevelIconFont='&#xe64c;'
					hiddenBackIcon={ true }
					firstLevelClick={ () => console.log(1111) }
					secondLevelClick={ () => console.log(222) } />
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Text>发现</Text>
				</View>
			</View>
		);
	}
}

export default connect()(FindContainer);
