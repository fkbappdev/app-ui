import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F9F3DF',
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
    alignItems: 'center',
    marginTop: '10%',
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
});
