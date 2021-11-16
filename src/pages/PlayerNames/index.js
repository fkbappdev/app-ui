import React from 'react';
import {
  View,
  Button,
  Card,
  ProgressBar,
  TextField,
  Colors,
} from 'react-native-ui-lib';
import {FlatList, Text, TextInput} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Ripple from 'react-native-material-ripple';

export default function PlayerNames({route, navigation}) {
  const [Players, SetPlayer] = React.useState([]);
  const [PlayerText, SetText] = React.useState('');
  const params = route.params;
  const gameMode = params.gameMode;

  const PlayerNameItem = ({item}) => {
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
              var players = Players.filter(player => player !== item);
              SetPlayer(players);
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
          <TextInput
            placeholderTextColor="#858494"
            style={styles.input}
            editable={false}
            selectTextOnFocus={false}
            value={item}
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
            <View style={styles.bottomInput}>
              <View style={styles.inputBase}>
                <Ripple
                  onPress={() => {
                    if (Players.length < 10) {
                      var players = [...Players, PlayerText];
                      SetPlayer(players);
                      SetText('');
                    } else {
                      alert('10dan fazla oyuncu olmaz');
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
                  placeholder="Add player"
                  style={styles.input}
                  onChangeText={text => {
                    SetText(text);
                  }}
                  value={PlayerText}
                />
              </View>
            </View>
          </View>

          <FlatList
            extraData={Players}
            data={Players}
            contentContainerStyle={{margin: 10}}
            renderItem={({item}) => <PlayerNameItem item={item} />}
          />
          <View style={styles.nextButton}>
            <View style={styles.bottomInput}>
              <Button
                onPress={() => {
                  if (Players.length >= 1) {
                    navigation.navigate('QuestionNumbers', {
                      players: Players,
                      gameMode: gameMode,
                    });
                  } else {
                    alert('oyuncu az');
                  }
                }}
                bg-primary
                enableShadow
                style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
