import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#6A5AE0',
  },
  bottom: {
    marginBottom: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    marginBottom: '5%',
    width: '100%',
    height: 60,
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
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '5%',
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
  categorys: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  questionNumberItem: {
    margin: 10,
  },
  roundedDialog: {
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  AnswerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
});
