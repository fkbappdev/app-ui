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

export default function Quizzes({navigation}) {
  const [question, setQuestion] = React.useState(0);
  const [questionAnswers, setQuestionAnswers] = React.useState([]);
  const [questions, setQuestions] = React.useState([]);
  const [numberOfQuestion, setNumberOfQuestion] = React.useState(null);
  const [page, setPage] = React.useState(0);
  const [topText, setTopText] = React.useState('');
  const [categorys, setCategorys] = React.useState([]);

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
    } else if (numberOfQuestion != 0 && categorys.length != 0 && page == 4) {
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
      setPage(2);
    }
  }, [numberOfQuestion, categorys, page]);

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
        <View style={styles.center}>
          <FlatList
            extraData={questions}
            data={questionAnswers}
            renderItem={({item}) => <AnswerItem item={item} />}
          />
        </View>
      </View>
    );
  };

  const TestCompenent = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 300,
          height: 300,
        }}>
        <Text>{'şş naber'}</Text>
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
                extraData={questions}
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
