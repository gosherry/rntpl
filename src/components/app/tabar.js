import React, { Component, PropTypes } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
	View,
	Text,
	Image,
} from 'react-native';
import styles from '../../../assets/css/main';
import HomeContainer from '../../containers/home/home';
import FindContainer from '../../containers/find/find';
import OrderContainer from '../../containers/order/order';
import CenterContainer from '../../containers/user/center';
import BadgeViewIcon from '../../../assets/img/message_num_bg.png';

export default class Tabar extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};
	  this._renderContainer.bind = this._renderContainer.bind(this);
	}

	_renderBadge(badgeCount) {
		if (!badgeCount) {
			return null;
		}
    return (
      <Image style={ styles.badgeBg } source={ BadgeViewIcon }>
			<Text style={ styles.badgeText }>{ badgeCount }</Text>
      </Image>
    );
	}

	/**
	 * [_renderContainer description]
	 * 	这种方式耦合性太高，暂定，
	 * 		ExceptionsManager.js:82 Warning: Using Maps as children is not yet fully supported. 
	 * 		It is an experimental feature that might be removed. 
	 * 		Convert it to a sequence / iterable of keyed ReactElements instead. 
	 * 		Check the render method of `View`.
	 * @param  {[type]} key [description]
	 * @return {[type]}     [description]
	 */
	_renderContainer(key) {
		switch(key) {
			case 'page1': 
				return (<HomeContainer { ...this.props } />);
			case 'page2':
				return (<FindContainer { ...this.props } />);
			case 'page3':
				return (<OrderContainer { ...this.props } />);
			case 'page4':
				return (<CenterContainer { ...this.props } />);
			default: 
				return (<HomeContainer { ...this.props } />);
		}
	}

	_selectTab(tab) {
		this.props.changeTab(tab);
	}	

	render() {
		const { routes, currentTab } = this.props;
		const tabItems = routes.map((item, index) => {
			return (
				<TabNavigator.Item
					key={ index }
					selected={ currentTab === item.get('key') }
					renderIcon={() => <Image style={ styles.tabIcon } source={ item.get('renderIcon') }/>}
					renderSelectedIcon={() => <Image style={ styles.tabIcon } source={ item.get('renderSelectedIcon') }/>}
					title={ item.get('title') }
					renderBadge={()=>this._renderBadge(item.get('badgeCount'))}
					selectedTitleStyle={ styles.selectedTitleStyle }
					onPress={this._selectTab.bind(this, item.get('key'))}>
					<View style={{ flex: 1 }}>
							{ this._renderContainer(item.get('key')) }
					</View>
				</TabNavigator.Item>				
			);
		});
		return (
			<TabNavigator style={{ flex: 1 }}>
				{ tabItems }
			</TabNavigator>
		);
	}
}
