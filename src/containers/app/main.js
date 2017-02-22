import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { View, Text } from 'react-native';
import Tabar from '../../components/app/tabar';
import { changeTabar } from '../../action/app';
import commonStyle from '../../../assets/css/common';

class MainContainer extends Component {

	constructor(props) {
	  super(props);
	  this._changeTab = this._changeTab.bind(this);
	}

	_changeTab(tab) {
		this.props.dispatch(changeTabar(tab));
	}

	render() {
		return (
			<View style={ commonStyle.container }>
				<Tabar
					{ ...this.props }
					changeTab={ this._changeTab }/>
					{ /** 后期可以添加一些热更新提示框 */}
			</View>
		);
	}
}

function mapStateToProps(state) {
	const { app } = state;
	return {
		routes: app.get('routes'),
		currentTab: app.get('currentTab'),
	};
}

export default connect(mapStateToProps)(MainContainer);
