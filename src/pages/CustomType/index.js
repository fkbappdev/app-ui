import React from 'react';
import {View, Text, Button} from 'react-native-ui-lib';
import {FlatList} from 'react-native';
import styles from './styles';

export default function CustomType({route, navigation}) {
  const gameModes = ['Quizzes', 'This or That?'];
  const params = route.params;

  const GameModeItem = ({item}) => {
    return (
      <View style={styles.questionNumberItem}>
        <Button
          onPress={() => {
            navigation.navigate('Custom', {
              ...params,
              gameMode: item,
            });
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
                Please select type of game:
              </Text>
            </View>
          </View>
          <FlatList
            extraData={gameModes}
            data={gameModes}
            renderItem={({item}) => <GameModeItem item={item} />}
          />
        </View>
      </View>
    </View>
  );
}
