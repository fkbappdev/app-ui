import React from 'react';
import {
  View,
  Button,
  Card,
  ProgressBar,
  TextField,
  Colors,
  Picker,
} from 'react-native-ui-lib';
import {FlatList, Text, TextInput} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Ripple from 'react-native-material-ripple';

export default function CustomAddQuestion({route, navigation}) {
  const [Question, SetQuestion] = React.useState({
    question: '',
    answers: [],
  });
  const [Answer, SetAnswer] = React.useState('');
  const [Refresh, SetRefresh] = React.useState(false);

  const params = route.params;

  const AnswerItem = ({item}) => {
    return (
      <View
        style={[
          styles.bottomInput,
          {
            marginBottom: 10,
          },
        ]}>
        <View style={styles.inputBase}>
          <Ripple
            onPress={() => {
              var q = Question;
              q.answers = q.answers.filter(answer => answer.text !== item.text);
              SetQuestion(q);
              SetRefresh(!Refresh);
            }}
            rippleColor={Colors.primary}
            rippleOpacity={0.6}
            rippleDuration={500}
            rippleFades={true}>
            <Icon
              name="delete"
              size={25}
              color={Colors.primary}
              style={{
                marginRight: 10,
                marginLeft: 10,
              }}
            />
          </Ripple>
          <Ripple
            onPress={() => {
              var q = Question;
              q.answers = q.answers.map(answer => {
                let selected = answer.text == item.text;
                answer.selected = selected;
                return answer;
              });
              SetQuestion(q);
              SetRefresh(!Refresh);
            }}
            rippleColor={Colors.primary}
            rippleOpacity={0.6}
            rippleDuration={500}
            rippleFades={true}>
            <Icon
              name={item.selected ? 'done' : 'close'}
              size={25}
              color={Colors.primary}
              style={{
                marginRight: 10,
                marginLeft: 10,
              }}
            />
          </Ripple>
          <TextInput
            placeholderTextColor="#858494"
            style={styles.input}
            editable={false}
            selectTextOnFocus={false}
            value={item.text}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.card}>
          <View style={{margin: 10}}>
            <View style={[styles.bottomInput, {marginBottom: 10}]}>
              <View style={styles.inputBase}>
                <TextInput
                  placeholderTextColor="#858494"
                  placeholder="Question..."
                  style={styles.input}
                  onChangeText={text => {
                    var q = Question;
                    q.question = text;
                    SetQuestion(q);
                  }}
                  value={Question.question}
                />
              </View>
            </View>
            <View style={styles.bottomInput}>
              <View style={styles.inputBase}>
                <Ripple
                  onPress={() => {
                    if (Question.answers.length < 4) {
                      var q = Question;
                      q.answers = [
                        ...q.answers,
                        {text: Answer, selected: false},
                      ];
                      SetQuestion(q);
                      SetAnswer('');
                    } else {
                      alert('4den fazla şık olamaz');
                    }
                  }}
                  rippleColor={Colors.primary}
                  rippleOpacity={0.6}
                  rippleDuration={500}
                  rippleFades={true}>
                  <Icon
                    name="add"
                    size={25}
                    color={Colors.primary}
                    style={{
                      marginRight: 10,
                      marginLeft: 10,
                    }}
                  />
                </Ripple>
                <TextInput
                  placeholderTextColor="#858494"
                  placeholder="Answer..."
                  style={styles.input}
                  onChangeText={text => {
                    SetAnswer(text);
                  }}
                  value={Answer}
                />
              </View>
            </View>
          </View>

          <FlatList
            extraData={Refresh}
            data={Question.answers}
            contentContainerStyle={{margin: 10}}
            renderItem={({item}) => <AnswerItem item={item} />}
          />
          <View style={styles.nextButton}>
            <View style={styles.bottomInput}>
              <Button
                onPress={() => {
                  params.SetQuestions([...params.Questions, Question]);
                  navigation.goBack();
                }}
                bg-primary
                enableShadow
                style={styles.button}>
                <Text style={styles.buttonText}>Add</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
