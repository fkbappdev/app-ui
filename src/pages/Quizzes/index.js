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

export default function Quizzes({route, navigation}) {
  const [question, setQuestion] = React.useState(0);
  const [questionAnswers, setQuestionAnswers] = React.useState([]);
  const [questions, setQuestions] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [topText, setTopText] = React.useState('');

  const [dialog, setDialog] = React.useState(false);
  const [dialogText, setDialogText] = React.useState('');

  const params = route.params;

  React.useEffect(async () => {
    var numberOfQuestion = params.questionNumber;
    var categorys = params.categorys;

    if (numberOfQuestion != 0 && categorys.length != 0 && page == 0) {
      setTopText('Loading questions...');
      let request = await fetch(
        `https://opentdb.com/api.php?amount=${numberOfQuestion}&category=9&difficulty=easy&type=multiple`,
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
            setNewQuestion(question + 1);
          }}
          handleNope={() => {
            setNewQuestion(question - 1);
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
      <Dialog
        useSafeArea
        key={0}
        height={200}
        style={{
          marginTop: 20,
        }}
        containerStyle={styles.roundedDialog}
        visible={dialog}
        renderPannableHeader={renderPannableHeader}
        pannableHeaderProps={{
          title: 'Type your answer',
        }}
        ignoreBackgroundPress={false}>
        <View style={{flex: 1, margin: 20}}>
          <TextField
            label="Answer"
            value={dialogText}
            onChangeText={text => setDialogText(text)}
          />
          <Button
            onPress={() => {
              questions[question].answers.remove();
              questions[question].answers.push({
                answer: dialogText,
                isCorrect: false,
                selected: false,
              });
              setDialogText('');
              setDialog(false);
              questions[question].answers =
                questions[question].answers.shuffle();
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
              Add
            </Text>
          </Button>
        </View>
      </Dialog>
    </View>
  );
}
