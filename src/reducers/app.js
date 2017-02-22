import React from 'react';
import Immutable from 'immutable';
import * as ActionTypes from '../constants/actionType';
import HomeRenderIcon from '../../assets/img/bar_home_nomarl.png'
import HomePressedIcon from '../../assets/img/bar_home_pressed.png'

const initialState = Immutable.fromJS({
	currentTab: 'page1',
	routes: [
		{
      title: 'page1',
      key: 'page1',
      badgeCount: 0,
      withStatusBar: false,
      renderIcon: HomeRenderIcon,
      renderSelectedIcon: HomePressedIcon,
	  },
		{
      title: 'page2',
      key: 'page2',
      badgeCount: 0,
      withStatusBar: true,
      renderIcon: HomeRenderIcon,
      renderSelectedIcon: HomePressedIcon,
	  },
		{
      title: 'page3',
      key: 'page3',
      badgeCount: 2,
      withStatusBar: true,
      renderIcon: HomeRenderIcon,
      renderSelectedIcon: HomePressedIcon,
	  },
		{
      title: 'page4',
      key: 'page4',
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
