import React from 'react';
import Storage  from '../utils/storage';
import { InteractionManager } from 'react-native';
import * as RouteType from '../constants/routeType';
import { LOGIN_PAGE } from './pages';

let lastPush = {};
let lastTime = new Date().getTime();

export default class Router {

	constructor(navigator) {
	  this.navigator = navigator;
	}

	push(route, needLogin = false) {
		const timestamp = new Date().getTime();
		if (lastPush.key === route.key && timestamp - lastTime < 1500) {
			console.log(' push route too quickly ', route);
		} else {
			lastPush = route;
			lastTime = timestamp;
			Storage.get('user').then((user) => {
				if (!user && needLogin) {
					InteractionManager.runAfterInteractions(() => {
						this.navigator.push(LOGIN_PAGE);
					});
				} else {
					InteractionManager.runAfterInteractions(() => {
						const routes = this.navigator.getCurrentRoutes();
						const nextIndex = routes[routes.length - 1].index + 1;
						route.index = nextIndex;
						this.navigator.push(route);
					});
				}
			});
		}
	}

	getCurrentRoute() {
		const routes = this.navigator.getCurrentRoutes();
		return routes[routes.length - 1];
	}

	getForwardRoute() {
		const routes = this.navigator.getCurrentRoutes();
		return routes[routes.length - 2];
	}

	toLogin() {
		this.push(LOGIN_PAGE, true);
	}	

	pop() {
		this.navigator.pop();
	}

}
