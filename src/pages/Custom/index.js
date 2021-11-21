import React from 'react';
import {View, Text, Button, Card, ProgressBar} from 'react-native-ui-lib';
import {FlatList} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Ripple from 'react-native-material-ripple';

export default function Custom({route, navigation}) {
  const params = route.params;
  const [Questions, SetQuestions] = React.useState([]);
  const [refresh, SetRefresh] = React.useState(false);

  const QuestionItem = ({item}) => {
    return (
      <Ripple
        style={{
          flex: 1,
        }}
        onPress={() => {}}>
        <View style={[styles.game, {backgroundColor: '#EFEEFC'}]}>
          <View style={styles.gameMode}>
            <View style={styles.gameModeText}>
              <Text style={[styles.modeText, {color: '#6A5AE0'}]}>
                {item.question}
              </Text>
            </View>
            <View style={styles.gameModeIcons}>
              <View style={[styles.gameModeIcon]}>
                <Icon name={'edit'} size={20} color={'#6A5AE0'} />
              </View>
              <View style={[styles.gameModeIcon]}>
                <Icon name={'delete'} size={20} color={'#6A5AE0'} />
              </View>
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
            data={Questions}
            renderItem={QuestionItem}
            keyExtractor={item => item.name}
            numColumns={2}
            extraData={refresh}
            columnWrapperStyle={{
              justifyContent: 'space-around',
              flex: 1,
              marginTop: 20,
            }}
          />
          <View style={styles.nextButton}>
            <View style={styles.bottomInput}>
              <Button
                onPress={() => {
                  navigation.navigate('CustomAddQuestion', {
                    SetQuestions: SetQuestions,
                    Questions: Questions,
                  });
                }}
                bg-primary
                enableShadow
                style={styles.button}>
                <Text style={styles.buttonText}>Add</Text>
              </Button>

              <Button
                onPress={() => {
                  var selecteds = [];
                  Categorys.map(cat => {
                    if (cat.selected) {
                      selecteds.push(cat);
                    }
                  });

                  if (selecteds.length >= 1) {
                    navigation.navigate(params.gameMode, {
                      ...params,
                      categorys: selecteds,
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
