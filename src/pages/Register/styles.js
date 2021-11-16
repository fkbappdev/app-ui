import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EFEEFC',
  },
  bottom: {
    margin: '5%',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  button: {
    width: '100%',
    height: 60,
    marginTop: '5%',
  },
  top: {
    alignItems: 'center',
    marginTop: '20%',
    margin: '5%',
  },
  buttonText: {
    fontFamily: 'Rubik-Bold',
    textAlign: 'left',
    color: '#FFF',
    fontWeight: 'bold',
  },
  bottomInput: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
  },
  input: {
    width: '100%',
  },
  text: {
    color: '#0C092A',
    fontWeight: 'bold',
    fontFamily: 'Rubik-Bold',
    marginBottom: '1%',
  },
  inputBase: {
    width: '100%',
    height: 60,
    borderRadius: 50,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
