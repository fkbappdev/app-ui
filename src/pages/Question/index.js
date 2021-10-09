import React from 'react';
import {View, Text, Button, Card} from 'react-native-ui-lib';
import {ImageBackground} from 'react-native';
import styles from './styles';
import Logo from '../../components/Logo';

export default function Question({navigation}) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../assets/images/background.png')}>
      <View style={styles.container}>
        {/* TOP */}
        <View style={styles.top}>
          <Logo />
        </View>
        {/* center */}
        <View style={styles.center}>
          <Card
            key={0}
            style={{marginBottom: 15}}
            onPress={() => console.log('')}>
            <View padding-20 bg-white></View>
          </Card>
        </View>
      </View>
    </ImageBackground>
  );
}
