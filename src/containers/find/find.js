import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { View, Text } from 'react-native';
import commonStyle from '../../../assets/css/common';
import NavigatorBar from '../../components/common/navigatorbar';

class FindContainer extends Component {

	constructor(props) {
	  super(props);
	}

	render() {
		return (
			<View style={ [commonStyle.container, { alignItems: 'center', justifyContent: 'center' }] }>
				<NavigatorBar
					title='page2'
					optTitle='完成'
					firstLevelIconFont='&#xe64c;'
					hiddenBackIcon={ true } />
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Text>find page</Text>
				</View>
			</View>
		);
	}
}

export default connect()(FindContainer);
