import React from 'react';
import {View, Button, Card, Text} from 'react-native-ui-lib';
import styles from './styles';
import Logo from '../../components/Logo';

export default function Redirect({navigation}) {
  const PlayOnlineAction = () => {
    navigation.navigate('Login');
  };

  const PlayOfflineAction = () => {
    navigation.navigate('Options');
  };

  return (
    <View bg-primary style={styles.container}>
      {/* TOP */}
      <View style={styles.top}>
        <Logo />
      </View>
      {/* BOTTOM */}
      <View style={styles.bottom}>
        <View style={styles.bottomContent}>
          <Text style={styles.text}></Text>
        </View>
        <View style={styles.bottomContent}>
          <Text style={styles.title}>Play Online or Offline</Text>
          <Text style={styles.description}>Select you want to play</Text>
        </View>
        <View style={styles.bottomContent}>
          <Text style={styles.text}></Text>
        </View>
        <Button
          bg-primary
          enableShadow
          onPress={() => PlayOfflineAction()}
          style={styles.button}>
          <Text style={styles.text}>Play Offline</Text>
        </Button>
        <Button
          bg-pastelGrey
          enableShadow
          onPress={() => PlayOnlineAction()}
          style={styles.button}>
          <Text style={[styles.text, {color: '#6A5AE0'}]}>Play Online</Text>
        </Button>
        <View style={styles.bottomContent}>
          <Text style={styles.text}></Text>
        </View>
      </View>
    </View>
  );
}
