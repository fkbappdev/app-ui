import React from 'react';
import {
  View,
  Text,
  Button,
  Card,
  ProgressBar,
  Colors,
  Picker,
} from 'react-native-ui-lib';
import {FlatList} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

export default function Quizzes({navigation}) {
  const [question, setQuestion] = React.useState({});
  const [questionAnswers, setQuestionAnswers] = React.useState([]);
  const [questions, setQuestions] = React.useState([]);
  const [numberOfQuestion, setNumberOfQuestion] = React.useState(null);
  const [page, setPage] = React.useState(0);
  const [topText, setTopText] = React.useState('');
  const [categorys, setCategorys] = React.useState([]);

  const DefaultCategorys = [
    {
      id: 1,
      name: 'Lifestyle',
    },
    {
      id: 2,
      name: 'Music',
    },
    {
      id: 3,
      name: 'Sport',
    },
    {
      id: 4,
      name: 'Movies',
    },
    {
      id: 5,
      name: 'Travel',
    },
    {
      id: 6,
      name: 'Food',
    },
    {
      id: 7,
      name: 'Games',
    },
    {
      id: 8,
      name: 'Books',
    },
    {
      id: 9,
      name: 'Hobbies',
    },
    {
      id: 10,
      name: 'Random',
    },
  ];

  const questionNumbers = [10, 15, 20, 25];

  React.useEffect(async () => {
    if (numberOfQuestion == null) {
      setPage(0);
      setTopText('Please select number of question: ');
      return;
    } else if (categorys.length == 0) {
      setPage(1);
      setTopText('Please select categorys: ');
      return;
    } else if (page != 2) {
      let request = await fetch(
        `https://opentdb.com/api.php?amount=${numberOfQuestion}&category=9&difficulty=easy&type=multiple`,
      );
      let json = await request.json();

      setQuestions(json.results);
      setQuestion(json.results[0]);
      setTopText(json.results[0].question);

      // answers
      let answers = [];
      json.results[0].incorrect_answers.map(answer => {
        answers.push({answer: answer, isCorrect: false});
      });
      answers.push({answer: json.results[0].correct_answer, isCorrect: true});

      setQuestionAnswers(answers);
      setPage(2);
    }
  }, [numberOfQuestion, page]);

  const AnswerItem = ({item}) => {
    return (
      <Button bg-pastelOrangeBg enableShadow style={styles.button}>
        <Text
          style={{fontFamily: 'BubblegumSans-Regular'}}
          pastelOrange
          bold
          bubblegumSans>
          {item.answer}
        </Text>
      </Button>
    );
  };

  const QuestionNumberItem = ({item}) => {
    return (
      <Button
        onPress={() => {
          setNumberOfQuestion(item);
        }}
        bg-pastelOrangeBg
        enableShadow
        style={styles.button}>
        <Text
          style={{fontFamily: 'BubblegumSans-Regular'}}
          pastelOrange
          bold
          bubblegumSans>
          {item}
        </Text>
      </Button>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.topTime}>
          <ProgressBar progressColor={'#fff'} progress={20} />
        </View>
        <View style={styles.topTexts}>
          {page == 2 ?? (
            <View style={styles.questionText}>
              <Text text60 pastelOrange style={styles.topText}>
                Question 1
              </Text>
              <Text text80 pastelOrange style={styles.topText}>
                /10
              </Text>
            </View>
          )}
          <View style={styles.question}>
            <Text text40 pastelOrange style={styles.topText}>
              {topText == '' ? 'Please select number of question: ' : topText}
            </Text>
          </View>
        </View>
        <View style={styles.center}>
          {page == 1 ? (
            <View style={styles.categorys}>
              <Picker
                mode={Picker.modes.MULTI}
                placeholder="Select question categorys"
                floatingPlaceholder
                value={categorys}
                enableModalBlur={false}
                onChange={item => setCategorys(item)}
                topBarProps={{title: 'Categorys'}}
                style={{color: '#662900'}}
                showSearch
                searchPlaceholder={'Search a category'}
                searchStyle={{
                  color: Colors.blue30,
                  placeholderTextColor: Colors.grey50,
                }}
                containerStyle={{width: '95%'}}
                // onSearchChange={value => console.warn('value', value)}
              >
                {DefaultCategorys.map(option => (
                  <Picker.Item
                    key={option.id}
                    value={option.id}
                    label={option.name}
                  />
                ))}
              </Picker>
              <Button
                onPress={() => {
                  setPage(2);
                }}
                iconSource={iconStyle => {
                  return (
                    <View
                      style={{
                        marginLeft: iconStyle[0].marginRight,
                      }}>
                      <Icon
                        name="save"
                        size={25}
                        color={iconStyle[0].tintColor}
                      />
                    </View>
                  );
                }}
                iconOnRight
                bg-pastelOrangeBg
                enableShadow
                style={styles.button}>
                <Text
                  style={{fontFamily: 'BubblegumSans-Regular'}}
                  pastelOrange
                  bold
                  bubblegumSans>
                  Save{' '}
                </Text>
              </Button>
            </View>
          ) : (
            <FlatList
              extraData={page}
              data={page == 0 ? questionNumbers : questionAnswers}
              renderItem={({item}) =>
                page == 0 ? (
                  <QuestionNumberItem item={item} />
                ) : (
                  <AnswerItem item={item} />
                )
              }
            />
          )}
        </View>
      </View>
    </View>
  );
}
