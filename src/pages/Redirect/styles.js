import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottom: {
    flex: 0.4,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '90%',
  },
  bottomContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  top: {
    flex: 0.5,
  },
  button: {
    margin: 10,
    width: '90%',
    height: 60,
    alignItems: 'center',
  },
  background: {
    flex: 1,
  },
  buttonText: {
    color: '#fff',
  },
  text: {
    fontFamily: 'Rubik-Regular',
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
  },
  title: {
    fontFamily: 'Rubik-Bold',
    color: '#49465F',
    fontSize: 25,
  },
  description: {
    fontFamily: 'Rubik-Regular',
    color: '#858494',
  },
  bottomButtons: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
