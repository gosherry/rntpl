import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  selectedTitleStyle: {
    color: '#2562b4',
  },
  badgeBg: {
    width: 14,
    height: 14,
    marginTop: 6
  },
  badgeText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 10,
    backgroundColor: Platform.OS === 'android' ? null : 'transparent'
  },  
  tabIcon: {
    height: 25,
    width: 25,
    resizeMode: 'cover'
  }  
});

export default styles;