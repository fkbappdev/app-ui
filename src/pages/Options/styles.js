import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#6A5AE0',
  },
  bottom: {
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
  background: {
    flex: 1,
  },
  buttonText: {
    color: '#fff',
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
  center: {marginTop: '5%'},
  card: {
    borderRadius: 30,
    /*borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,*/
    backgroundColor: '#ffffff',
    flex: 1,
  },
  modeText: {
    fontSize: 20,
    color: '#6A5AE0',
    fontFamily: 'Rubik-Bold',
    fontWeight: '200',
  },
});
