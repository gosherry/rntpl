import React from 'react';
import {
	View,
	Image,
	Text,
	Platform,
	StyleSheet,
	Dimensions,
	TouchableOpacity
} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class NavigatorBar extends React.Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  };
	  this._forward = this._forward.bind(this);
	  this._renderOptView = this._renderOptView.bind(this);
	  this._renderBackView = this._renderBackView.bind(this);
	}

	componentWillMount() {
		if (Platform.OS === 'ios') {
			if (width > 375) {
				this.adjustToolBarHeigth = { height: 93 };
				this.adjustStaBarHeight = { marginTop: 27 };
			} else {
				this.adjustToolBarHeigth = { height: 64 };
				this.adjustStaBarHeight = { marginTop: 20 };
			}
		} else {
			this.adjustToolBarHeigth = { height: 50 };
			this.adjustStaBarHeight = { marginTop: 0 };			
		}
	}

	_forward() {
		if (this.props.backViewClick) {
			this.props.backViewClick();
		} else if(this.props.router) {
			this.props.router.pop();
		}
	}

	_renderBackView() {
		const { backIconFontStyle, backImgStyle, } = this.props;
		if (this.props.backIconFont) {
			return (
				<TouchableOpacity 
					activeOpacity={ 1 }
					onPress={ this._forward }
					style={ styles.backIconView }>
					<Text style={ [styles.backIcon, backIconFontStyle] }>{ this.props.backIconFont }</Text>
				</TouchableOpacity>							
			);
		} else if (this.props.backImg) {
			return (
				<TouchableOpacity
					activeOpacity={ 1 }
					onPress={ this._forward }
					style={ styles.backIconView }>
					<Image resizeMode='stretch' style={ [styles.backImg, backImgStyle] } source={ this.props.backImg }/>
				</TouchableOpacity>
			);
		} else if (!this.props.hiddenBackIcon) {
			return (
				<TouchableOpacity
					activeOpacity={ 1 }
					onPress={ this._forward }
					style={ styles.backIconView }>
					<Text style={ styles.backIcon }>&#xe604;</Text>
				</TouchableOpacity>
			);
		} else {
			return null;
		}
	}

	_renderOptView() {
		const { firstLevelIconFont, secondLevelIconFont,
			firstLevelIconFontStyle, secondLevelIconFontStyle, optTitle,
			optTitleStyle, } = this.props;
		if (firstLevelIconFont && secondLevelIconFont) {
			return (
				<View style={ styles.optMenuView }>
					<TouchableOpacity style={ styles.firstLevelView }>
						<Text style={ [styles.optIcon, firstLevelIconFontStyle] }>{ firstLevelIconFont }</Text>
					</TouchableOpacity>
					<TouchableOpacity style={ styles.secondLevelView }>
						<Text style={ [styles.optIcon, secondLevelIconFontStyle] }>{ secondLevelIconFont }</Text>
					</TouchableOpacity>
				</View>
			);
		} else if (firstLevelIconFont && optTitle) {
			return (
				<View style={ styles.optMenuView }>
					<TouchableOpacity style={ styles.firstLevelView }>
						<Text style={ [styles.optIcon, firstLevelIconFontStyle] }>{ firstLevelIconFont }</Text>
					</TouchableOpacity>
					<TouchableOpacity style={ styles.secondLevelView }>
						<Text style={ [styles.optTitle, optTitleStyle] }>{ optTitle }</Text>
					</TouchableOpacity>
				</View>
			);
		} else if (firstLevelIconFont) {
			return (
				<View style={ styles.optMenuView }>
					<TouchableOpacity style={ styles.firstLevelView }>
						<Text style={ [styles.optIcon, firstLevelIconFontStyle] }>{ firstLevelIconFont }</Text>
					</TouchableOpacity>
				</View>
			);
		} else if (optTitle) {
			return (
				<View style={ styles.optMenuView }>
					<TouchableOpacity style={ styles.firstLevelView }>
						<Text style={ [styles.optTitle, optTitleStyle] }>{ optTitle }</Text>
					</TouchableOpacity>
				</View>
			);
		} else {
			return null;
		}
	}

	render() {
		return (
			<View style={ [styles.container, this.adjustToolBarHeigth] }>
				<View style={ [styles.contentContainer, this.adjustStaBarHeight ] }>
					<View style={ styles.optContainer }>
						{ this._renderBackView() }
					</View>
					<View style={ styles.titleContainer }>
						<Text
							style={ styles.title }
							ellipsizeMode='middle'
							numberOfLines={ 1 }>
							{ this.props.title || '' }</Text>
					</View>
					<View style={ styles.optContainer }>
						{ this._renderOptView() }
					</View>
				</View>
			</View>
		);
	}

}

const propTypes = {
  backIconFontStyle: Text.propTypes.style,
  backImgStyle: Text.propTypes.style,
  firstLevelIconFontStyle: Text.propTypes.style,
  secondLevelIconFontStyle: Text.propTypes.style,
  optTitleStyle:  Text.propTypes.style,
  backIconFont: React.PropTypes.string,
  firstLevelIconFont: React.PropTypes.string,
  secondLevelIconFont: React.PropTypes.string,
  optTitle: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  hiddenBackIcon: React.PropTypes.bool,
  backViewClick: React.PropTypes.func,
}

NavigatorBar.propTypes = propTypes;

const styles = StyleSheet.create({
	container: {
		width,
		backgroundColor: '#2562b4',		
	},
	contentContainer: {
		flex: 2,
		flexDirection: 'row',
	},
	optContainer: {
		flex: 2,
	},
	titleContainer: {
		flex: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		color: 'white',
		fontSize: 16,
	},
	backIconView: {
		flex: 1,
		marginLeft: 10,
		marginRight: 20,
		justifyContent: 'center'
	},
	backIcon: {
		fontSize: 22,		
		color: 'white',
		fontFamily: 'iconfont',
	},
	backImg: {
		width: 30,
		height: 30,
	},
	optMenuView: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	firstLevelView: {
		marginRight: 10,
	},
	secondLevelView: {
		marginRight: 10,
	},
	optIcon: {
		fontSize: 22,
		color: 'white',
		fontFamily: 'iconfont',
	},
	optTitle: {
		fontSize: 12,
		color: 'white',
	}
});
