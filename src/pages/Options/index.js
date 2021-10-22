import React from 'react';
import {View, Text, Button, Card, ProgressBar} from 'react-native-ui-lib';
import {FlatList} from 'react-native';
import styles from './styles';

export default function Question({navigation}) {
  const GameMods = [
    {
      name: 'Quizzes',
      value: 'Quizzes',
    },
    {
      name: 'This or That?',
      value: 'ThisOrThat',
    },
    {
      name: 'Custom',
      value: 'Custom',
    },
  ];

  const GameModeItem = ({item}) => {
    return (
      <Button
        onPress={() => navigation.navigate(item.value)}
        bg-pastelOrangeBg
        enableShadow
        style={styles.button}>
        <Text
          style={{fontFamily: 'BubblegumSans-Regular'}}
          pastelOrange
          bold
          bubblegumSans>
          {item.name}
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
          <View style={styles.question}>
            <Text text40 pastelOrange style={styles.topText}>
              Please select an game mode
            </Text>
          </View>
        </View>
        <View style={styles.center}>
          <FlatList
            data={GameMods}
            renderItem={({item}) => <GameModeItem item={item} />}
          />
        </View>
      </View>
    </View>
  );
}
