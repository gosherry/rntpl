import React from 'react';
import Immutable from 'immutable';
import * as ActionTypes from '../constants/actionType';
import HomeRenderIcon from '../../assets/img/bar_home_nomarl.png'
import HomePressedIcon from '../../assets/img/bar_home_pressed.png'

const initialState = Immutable.fromJS({
	currentTab: 'home',
	routes: [
		{
      title: '首页',
      key: 'home',
      badgeCount: 0,
      withStatusBar: false,
      renderIcon: HomeRenderIcon,
      renderSelectedIcon: HomePressedIcon,
	  },
		{
      title: '发现',
      key: 'find',
      badgeCount: 0,
      withStatusBar: true,
      renderIcon: HomeRenderIcon,
      renderSelectedIcon: HomePressedIcon,
	  },
		{
      title: '订单',
      key: 'order',
      badgeCount: 2,
      withStatusBar: true,
      renderIcon: HomeRenderIcon,
      renderSelectedIcon: HomePressedIcon,
	  },
		{
      title: '我的',
      key: 'mine',
      badgeCount: 0,
      withStatusBar: false,
      renderIcon: HomeRenderIcon,
      renderSelectedIcon: HomePressedIcon,
	  },
	]
});

export default (state = initialState, action) => {
	let _state = state;
  switch (action.type) {
		case ActionTypes.CHANGE_TAB:
      _state = _state.set('currentTab', action.payload.tab);
      return _state;
    default :
      return state;
  }
};
