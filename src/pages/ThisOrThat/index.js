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
import Ripple from 'react-native-material-ripple';

export default function ThisOrThat({route, navigation}) {
  const [question, setQuestion] = React.useState(0);
  const [questionAnswers, setQuestionAnswers] = React.useState([]);
  const [questions, setQuestions] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [topText, setTopText] = React.useState('');

  const params = route.params;

  React.useEffect(async () => {
    var numberOfQuestion = params.questionNumber;

    if (numberOfQuestion != 0 && page == 0) {
      setTopText('Loading questions...');
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
      setPage(1);
    }
  }, [page]);

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
                color: '#fff',
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

  const renderPannableHeader = props => {
    const {title} = props;
    return (
      <View>
        <View margin-20>
          <Text>{title}</Text>
        </View>
        <View height={2} bg-grey70 />
      </View>
    );
  };

  const RenderQuestion = props => {
    console.log(props);
    return (
      <View style={styles.top}>
        <View style={styles.card}>
          <View style={styles.topTexts}>
            {page == 1 && (
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
                {topText}
              </Text>
            </View>
          </View>
          <View style={styles.center}>
            <FlatList
              extraData={questions}
              data={questionAnswers}
              renderItem={({item}) => <AnswerItem item={item} />}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {page == 1 ? (
        <SwipeCards
          cards={questions}
          renderCard={cardData => <RenderQuestion {...cardData} />}
          renderNoMoreCards={() => <RenderQuestion />}
          loop={true}
          handleYup={() => {
            if (question + 1 > questions.length - 1) {
              return setNewQuestion(0);
            }
            setNewQuestion(question + 1);
          }}
          handleNope={() => {
            if (question - 1 < 1) {
              return setNewQuestion(0);
            }
            setNewQuestion(question - 1);
          }}
          yupText={'Next'}
          noText={'Back'}
        />
      ) : (
        <View style={styles.top}>
          <View style={styles.card}>
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
                  Please wait...
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
      <View style={styles.bottom}></View>
    </View>
  );
}
