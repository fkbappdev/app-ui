import React from 'react';
import {View, Text, Button, Card, ProgressBar} from 'react-native-ui-lib';
import {FlatList} from 'react-native';
import styles from './styles';

export default function Question({navigation}) {
  const [question, setQuestion] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  const OptionItem = ({item}) => {
    return (
      <Button bg-pastelOrangeBg enableShadow style={styles.button}>
        <Text
          style={{fontFamily: 'BubblegumSans-Regular'}}
          pastelOrange
          bold
          bubblegumSans>
          {item.key}
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
          <View style={styles.questionText}>
            <Text text60 pastelOrange style={styles.topText}>
              Selected 1
            </Text>
            <Text text80 pastelOrange style={styles.topText}>
              /10
            </Text>
          </View>
          <View style={styles.question}>
            <Text text40 pastelOrange style={styles.topText}>
              Soru sayisi
            </Text>
          </View>
        </View>
        <View style={styles.center}>
          <FlatList
            data={[
              {key: '10'},
              {key: '15'},
              {key: '20'},
              {key: '25'},
            ]}
            renderItem={({item}) => <OptionItem item={item} />}
          />
        </View>
      </View>
    </View>
  );
}
