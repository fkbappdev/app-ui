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

export default function QuestionNumbers({route, navigation}) {
  const questionNumbers = [10, 15, 20, 25];
  const params = route.params;

  const QuestionNumberItem = ({item}) => {
    return (
      <View style={styles.questionNumberItem}>
        <Button
          onPress={() => {
            navigation.navigate(
              params.gameMode == 'Quizzes'
                ? 'QuestionCategorys'
                : params.gameMode,
              {
                ...params,
                questionNumber: item,
              },
            );
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
            bold
            style={{
              color: '#fff',
              width: '100%',
              textAlign: 'center',
            }}>
            {item}
          </Text>
        </Button>
      </View>
    );
  };

  return (
    <View style={styles.container}>
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
                Please select number of question:
              </Text>
            </View>
          </View>
          <FlatList
            extraData={questionNumbers}
            data={questionNumbers}
            renderItem={({item}) => <QuestionNumberItem item={item} />}
          />
        </View>
      </View>
    </View>
  );
}
