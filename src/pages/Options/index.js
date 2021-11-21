import React from 'react';
import {View, Text, Button, Card, ProgressBar} from 'react-native-ui-lib';
import {FlatList} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Ripple from 'react-native-material-ripple';

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
      value: 'CustomType',
    },
  ];

  const GameModeItem = ({item}) => {
    return (
      <Ripple
        style={{
          flex: 1,
        }}
        onPress={() => {
          navigation.navigate('PlayerNames', {
            gameMode: item.value,
          });
        }}>
        <View style={styles.game}>
          <View style={styles.gameMode}>
            <View style={styles.gameModeIcon}>
              <Icon name="gamepad" size={30} color="#6A5AE0" />
            </View>
            <View style={styles.gameModeText}>
              <Text style={styles.modeText}>{item.name}</Text>
            </View>
          </View>
        </View>
      </Ripple>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.card}>
          <FlatList
            data={GameMods}
            renderItem={GameModeItem}
            keyExtractor={item => item.name}
            numColumns={2}
            extraData={GameMods}
            columnWrapperStyle={{
              justifyContent: 'space-around',
              flex: 1,
              marginTop: 20,
            }}
          />
        </View>
      </View>
    </View>
  );
}
