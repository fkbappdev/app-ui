import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F9F3DF',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    margin: 10,
  },
  card: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '75%',
    height: '75%',
    margin: 10,
  },
  loginContainer: {
    flex: 1, justifyContent: "space-around", alignItems: 'center', margin: 10
  },
  loginFormTop: {
    flex: 0.3,
  },
  loginFormTopText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#662900',
  },
  loginForm: {
    flex: 1,
    width: '75%',
  },
  loginFormSocials: {
    flexDirection: 'row',
  },
  loginFormBottom: {
  }
});
