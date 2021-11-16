import React from 'react';
import {
  View,
  Text,
  Button,
  Card,
  ProgressBar,
  Colors,
  Picker,
  Dialog,
  TextField,
} from 'react-native-ui-lib';
import {FlatList} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import SwipeCards from 'react-native-swipe-cards';

export default function ThisOrThat({navigation}) {
  const [question, setQuestion] = React.useState(0);
  const [questionAnswers, setQuestionAnswers] = React.useState([]);
  const [questions, setQuestions] = React.useState([]);
  const [numberOfQuestion, setNumberOfQuestion] = React.useState(null);
  const [page, setPage] = React.useState(0);
  const [topText, setTopText] = React.useState('');

  const [dialog, setDialog] = React.useState(false);
  const [dialogText, setDialogText] = React.useState('');

  // will remove
  function decodeHTMLEntities(str) {
    return str
      .replace(/&nbsp;/gi, ' ')
      .replace(/&amp;/gi, '&')
      .replace(/&quot;/gi, '"')
      .replace(/&lt;/gi, '<')
      .replace(/&gt;/gi, '>')
      .replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, '');
  }

  const questionNumbers = [10, 15, 20, 25];

  React.useEffect(async () => {
    if (numberOfQuestion == null) {
      setPage(0);
      setTopText('Please select number of question: ');
      return;
    } else if (numberOfQuestion != 0 && page == 4) {
      let request = await fetch(
        `https://opentdb.com/api.php?amount=${numberOfQuestion}&category=9&difficulty=easy&type=boolean`,
      );
      let json = await request.json();

      setQuestion(0);
      setTopText(json.results[0].question);

      let ques = json.results.map(q => {
        let answers = [];
        q.incorrect_answers.map(answer => {
          answers.push({answer: answer, isCorrect: false, selected: false});
        });
        answers.push({
          answer: q.correct_answer,
          isCorrect: true,
          selected: false,
        });
        q.answers = answers;
        return q;
      });

      setQuestions(ques);
      setQuestionAnswers(ques[0].answers);
      setPage(2);
    }
  }, [numberOfQuestion, page]);

  function setNewQuestion(number) {
    console.log(number);
    var q = questions[number];
    setQuestionAnswers(q.answers);
    setTopText(q.question);
    setQuestion(number);
  }

  const AnswerItem = ({item}) => {
    return (
      <View style={styles.questionNumberItem}>
        <Button
          onPress={() => {
            var q = questions;
            q[question].answers = q[question].answers.map(answer => {
              let selected = answer.answer == item.answer;
              answer.selected = selected;
              return answer;
            });
            setQuestions(q);
            setQuestionAnswers(q[question].answers);
          }}
          bg-pastelOrangeBg
          enableShadow
          style={styles.button}>
          <View style={styles.AnswerItem}>
            {item.selected && <Icon name="done" size={25} color={'#662900'} />}
            <Text
              style={{
                width: '100%',
                textAlign: 'center',
              }}
              pastelOrange
              bold
              bubblegumSans>
              {item.answer}
            </Text>
          </View>
        </Button>
      </View>
    );
  };

  const QuestionNumberItem = ({item}) => {
    return (
      <View style={styles.questionNumberItem}>
        <Button
          onPress={() => {
            setNumberOfQuestion(item);
            setTopText('Loading questions...');
            setPage(4);
          }}
          bg-pastelOrangeBg
          enableShadow
          style={[
            styles.button,
            {
              alignSelf: 'center',
            },
          ]}>
          <Text
            pastelOrange
            bold
            bubblegumSans
            style={{
              width: '100%',
              textAlign: 'center',
            }}>
            {item}
          </Text>
        </Button>
      </View>
    );
  };

  const RenderQuestion = props => {
    return (
      <View>
        <View style={styles.top}>
          <View style={styles.topTexts}>
            {page == 2 && (
              <View style={styles.questionText}>
                <Text text60 pastelOrange style={styles.topText}>
                  Question {question + 1}
                </Text>
                <Text text80 pastelOrange style={styles.topText}>
                  /{questions.length}
                </Text>
              </View>
            )}
            <View style={styles.question}>
              <Text
                text40
                pastelOrange
                style={[
                  styles.topText,
                  {
                    margin: 5,
                  },
                ]}>
                {decodeHTMLEntities(topText)}
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.bottom]}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'space-around',
            }}>
            <Button
              style={{
                height: 100,
                width: 100,
                backgroundColor: 'red',
              }}
              onPress={() => {
                setNewQuestion(question - 1);
              }}
              enableShadow>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="close" size={25} color={'#fff'} />
              </View>
            </Button>
            <Button
              style={{
                height: 100,
                width: 100,
                backgroundColor: 'green',
              }}
              onPress={() => {
                setNewQuestion(question - 1);
              }}
              enableShadow>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="done" size={25} color={'#fff'} />
              </View>
            </Button>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {page == 2 ? (
        <SwipeCards
          cards={questions}
          renderCard={cardData => <RenderQuestion {...cardData} />}
          renderNoMoreCards={() => <RenderQuestion />}
          loop={true}
          handleYup={() => {
            if (questions.length > question + 1) {
              setNewQuestion(question + 1);
            }
          }}
          handleNope={() => {
            if (questions.length < question - 1) {
              setNewQuestion(question - 1);
            }
          }}
          handleMaybe={() => {
            setDialog(true);
          }}
          yupText={'Next'}
          noText={'Back'}
          hasMaybeAction
        />
      ) : (
        <View style={styles.top}>
          <View style={styles.topTexts}>
            <View style={styles.question}>
              <Text
                text40
                pastelOrange
                style={[
                  styles.topText,
                  {
                    margin: 5,
                  },
                ]}>
                {topText == ''
                  ? 'Please select number of question: '
                  : decodeHTMLEntities(topText)}
              </Text>
            </View>
          </View>
          <View style={styles.center}>
            {page == 0 && (
              <FlatList
                extraData={questions}
                data={questionNumbers}
                renderItem={({item}) => <QuestionNumberItem item={item} />}
              />
            )}
          </View>
        </View>
      )}
      <View style={styles.bottom}>
        {/*page == 2 && (
          <View style={styles.bottom}>
            <View
              style={{
                marginRight: 5,
              }}>
              <Button
                style={{
                  height: 50,
                  width: 100,
                }}
                onPress={() => {
                  setNewQuestion(question - 1);
                }}
                bg-pastelOrangeBg
                enableShadow>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name="west" size={25} color={'#662900'} />
                  <Text pastelOrange bold bubblegumSans>
                    Back{' '}
                  </Text>
                </View>
              </Button>
            </View>
            <View
              style={{
                marginRight: 5,
              }}>
              <Button
                onPress={() => {
                  setDialog(true);
                }}
                style={{
                  height: 50,
                  width: 10,
                }}
                borderRadius={100}
                bg-pastelOrangeBg
                enableShadow>
                <Icon name="add" size={25} color={'#662900'} />
              </Button>
            </View>
            <View
              style={{
                marginRight: 5,
              }}>
              <Button
                style={{
                  height: 50,
                  width: 100,
                }}
                onPress={() => {
                  setNewQuestion(question + 1);
                }}
                iconSource={iconStyle => {
                  return (
                    <View
                      style={{
                        marginLeft: 0,
                      }}>
                      <Icon name="east" size={25} color={'#662900'} />
                    </View>
                  );
                }}
                iconOnRight
                bg-pastelOrangeBg
                enableShadow>
                <Text pastelOrange bold bubblegumSans>
                  Next{' '}
                </Text>
              </Button>
            </View>
          </View>
              )*/}
      </View>
    </View>
  );
}
