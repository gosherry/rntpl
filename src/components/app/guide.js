import React, { Component } from 'react';
import {
	Image,
	Text,
	View,	
	Dimensions,
	StyleSheet,
  AsyncStorage,
	TouchableOpacity,
	InteractionManager,
} from 'react-native';

import Swiper from 'react-native-swiper';
import Img01 from '../../../assets/img/guide_01.png';
import Img02 from '../../../assets/img/guide_02.png';
import Img03 from '../../../assets/img/guide_03.png';
import Img04 from '../../../assets/img/guide_04.png';
import Storage from '../../utils/storage';

import MainContainer from '../../containers/app/main';

const { width, height } = Dimensions.get('window');

class Guide extends Component {

	constructor(props) {
	  super(props);
	}

	_toMain() {
		const { navigator } = this.props;
		Storage.save('welcome', 1);
		InteractionManager.runAfterInteractions(() => {
			navigator.resetTo({
				component: MainContainer,
				name: 'Main',
			});
		});
	}

	render() {
		return (
      <Swiper style={ styles.wrapper } showsButtons={ false }
      	height={ height } loop={ false }
      	showsPagination={ false }
        onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}>
        <View style={ styles.slide }>
          <Image style={ styles.image } source={ Img01 } resizeMode='stretch' />
        </View>
        <View style={ styles.slide }>
          <Image style={ styles.image } source={ Img02 } resizeMode='stretch' />
        </View>
        <View style={ styles.slide }>
          <Image style={ styles.image } source={ Img03 } resizeMode='stretch' />
        </View>
        <View style={ styles.slide }>
        	<Image style={ styles.image } source={ Img04 } resizeMode='stretch'>
        		<Text style={{ flex: 1, marginTop: height - height / 5 }} onPress={ this._toMain.bind(this) }></Text>
        	</Image>
        </View>
      </Swiper>
		);
	}
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: width,
    height: height,
    resizeMode: 'contain',
  }
})

export default Guide;
