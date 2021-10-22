import React from 'react';
import {View, Button, Card} from 'react-native-ui-lib';
import {ImageBackground, Text} from 'react-native';
import styles from './styles';
import Logo from '../../components/Logo';

export default function Redirect({navigation}) {
  const PlayOnlineAction = () => {
    navigation.navigate('LoginAndRegister');
  };

  const PlayOfflineAction = () => {
    navigation.navigate('Options');
  };

  return (
    <View style={styles.container}>
      {/* TOP */}
      <View style={styles.top}>
        <Logo />
      </View>
      {/* BOTTOM */}
      <View style={styles.bottom}>
        <Button
          bg-pastelOrangeBg
          enableShadow
          onPress={() => PlayOfflineAction()}
          style={styles.button}>
          <Text style={styles.text}>Play Single</Text>
        </Button>
        <Button
          bg-pastelOrangeBg
          enableShadow
          onPress={() => PlayOnlineAction()}
          style={styles.button}>
          <Text style={styles.text}>Play Online</Text>
        </Button>
      </View>
    </View>
  );
}
