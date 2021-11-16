import React from 'react';
import {View, Text, Button, Card, ProgressBar} from 'react-native-ui-lib';
import {FlatList} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Ripple from 'react-native-material-ripple';

export default function QuestionCategorys({route, navigation}) {
  const params = route.params;
  const [Categorys, SetCategorys] = React.useState([
    {
      id: 1,
      name: 'Lifestyle',
      selected: false,
      icon: 'home',
    },
    {
      id: 2,
      name: 'Music',
      selected: false,
      icon: 'music-note',
    },
    {
      id: 3,
      name: 'Sport',
      selected: false,
      icon: 'sports',
    },
    {
      id: 4,
      name: 'Movies',
      selected: false,
      icon: 'movie',
    },
    {
      id: 5,
      name: 'Travel',
      selected: false,
      icon: 'flight-takeoff',
    },
    {
      id: 6,
      name: 'Food',
      selected: false,
      icon: 'local-dining',
    },
    {
      id: 7,
      name: 'Games',
      selected: false,
      icon: 'gamepad',
    },
    {
      id: 8,
      name: 'Books',
      selected: false,
      icon: 'book',
    },
    {
      id: 9,
      name: 'Hobbies',
      selected: false,
      icon: 'star',
    },
    {
      id: 10,
      name: 'Random',
      selected: false,
      icon: 'shuffle',
    },
  ]);
  const [refresh, SetRefresh] = React.useState(false);

  const CategoryItem = ({item}) => {
    return (
      <Ripple
        style={{
          flex: 1,
        }}
        onPress={() => {
          var cats = Categorys;
          cats.map(cat => {
            if (cat.id == item.id) {
              cat.selected = !cat.selected;
            }
          });
          SetCategorys(cats);
          SetRefresh(!refresh);
        }}>
        <View
          style={[
            styles.game,
            {backgroundColor: item.selected ? '#FF8FA2' : '#EFEEFC'},
          ]}>
          <View style={styles.gameMode}>
            <View style={[styles.gameModeIcon, ,]}>
              <Icon
                name={item.icon}
                size={30}
                color={item.selected ? '#FF8FA2' : '#6A5AE0'}
              />
            </View>
            <View style={styles.gameModeText}>
              <Text
                style={[
                  styles.modeText,
                  {color: item.selected ? '#FFF' : '#6A5AE0'},
                ]}>
                {item.name}
              </Text>
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
            data={Categorys}
            renderItem={CategoryItem}
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
