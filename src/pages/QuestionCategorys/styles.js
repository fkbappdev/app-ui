import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#6A5AE0',
  },
  bottom: {
    width: '100%',
  },
  nextButton: {
    marginRight: 10,
    marginLeft: 10,
  },
  button: {
    marginBottom: 10,
    width: '100%',
    height: 60,
  },
  background: {
    flex: 1,
  },
  top: {
    flex: 1,
    flexDirection: 'column',
    marginTop: '20%',
    margin: 15,
  },
  topTexts: {
    justifyContent: 'space-between',
  },
  topText: {
    marginBottom: 10,
  },
  questionText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  question: {
    marginTop: '5%',
  },
  center: {flex: 1, marginTop: '5%'},
  PlayerNameItem: {
    height: 60,
    width: '100%',
    backgroundColor: '#F4D19B',
    borderRadius: 50,
    marginBottom: 10,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomInput: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
  },
  card: {
    borderRadius: 30,
    /*borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,*/
    backgroundColor: '#ffffff',
    flex: 1,
  },
  inputBase: {
    borderWidth: 2,
    borderColor: '#EFEEFC',
    width: '100%',
    height: 60,
    borderRadius: 50,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  game: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: '#EFEEFC',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
  },
  gameMode: {
    margin: 10,
    alignItems: 'center',
  },
  gameModeIcon: {
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  modeText: {
    fontSize: 16,
    color: '#6A5AE0',
    fontFamily: 'Rubik-Bold',
    fontWeight: '200',
  },
});
