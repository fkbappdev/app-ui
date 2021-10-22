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

export default function ThisOrThat({navigation}) {
  const [question, setQuestion] = React.useState(0);
  const [questionAnswers, setQuestionAnswers] = React.useState([]);
  const [questions, setQuestions] = React.useState([]);
  const [numberOfQuestion, setNumberOfQuestion] = React.useState(null);
  const [page, setPage] = React.useState(0);
  const [topText, setTopText] = React.useState('');

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
    } else if (numberOfQuestion != 0 && page == 3) {
      let request = await fetch(
        `https://opentdb.com/api.php?amount=${numberOfQuestion}&category=9&difficulty=easy&type=multiple`,
      );
      let json = await request.json();

      setQuestions(json.results);
      setQuestion(0);
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
  }, [numberOfQuestion, categorys, page]);

  function setNewQuestion(number) {
    var q = questions[number];
    let answers = [];
    q.incorrect_answers.map(answer => {
      answers.push({answer: answer, isCorrect: false});
    });
    answers.push({answer: q.correct_answer, isCorrect: true});
    setQuestionAnswers(answers);
    setTopText(q.question);
    setQuestion(number);
  }

  const AnswerItem = ({item}) => {
    return (
      <View style={styles.questionNumberItem}>
        <Button bg-pastelOrangeBg enableShadow style={styles.button}>
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

  const CategoryItem = ({item}) => {
    const disabled =
      categorys.length > 0 && !categorys.includes(10) && item.id == 10
        ? true
        : categorys.includes(10) && item.id != 10;

    return (
      <Button
        iconOnLeft
        bg-pastelOrangeBg
        enableShadow
        disabled={disabled}
        onPress={() => {
          if (categorys.includes(item.id)) {
            setCategorys(categorys.filter(category => category != item.id));
          } else {
            if (item.id == 10) {
              setCategorys([10]);
            } else {
              setCategorys([...categorys, item.id]);
            }
          }
        }}
        style={{
          margin: 10,

          width: 150,
          height: 50,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          {categorys.includes(item.id) && (
            <Icon name="done" size={25} color={'#662900'} />
          )}

          <Text pastelOrange bold bubblegumSans>
            {item.name}
          </Text>
        </View>
      </Button>
    );
  };
  return (
    <View style={styles.container}>
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
              {topText == ''
                ? 'Please select number of question: '
                : decodeHTMLEntities(topText)}
            </Text>
          </View>
        </View>
        <View style={styles.center}>
          {page == 1 ? (
            <View style={styles.categorys}>
              <FlatList
                data={DefaultCategorys}
                extraData={categorys}
                renderItem={({item}) => <CategoryItem item={item} />}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                style={{
                  flex: 1,
                }}
              />
              <View
                style={{
                  flex: 0.3,
                }}>
                <Button
                  style={{
                    height: 50,
                  }}
                  onPress={() => {
                    if (categorys.length != 0) {
                      setTopText('Loading questions...');
                      setPage(4);
                    } else {
                      alert('Empty');
                    }
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
                    Save{' '}
                  </Text>
                </Button>
              </View>
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
      <View style={styles.bottom}>
        {page == 2 && (
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
        )}
      </View>
    </View>
  );
}
