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
    width: '100%',
  },
  button: {
    marginBottom: '10%',
    width: '100%',
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
    justifyContent: 'flex-start',
    alignItems: 'center',
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
});
