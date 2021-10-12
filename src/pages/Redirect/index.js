import React from 'react';
import {View, Text, Button, Card} from 'react-native-ui-lib';
import {ImageBackground} from 'react-native';
import styles from './styles';
import Logo from '../../components/Logo';

export default function Redirect({navigation}) {
  const PlayOnlineAction = () => {
    navigation.navigate('LoginAndRegister');
  };

  const PlayOfflineAction = () => {
    navigation.navigate('Question');
  };

  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../assets/images/background.png')}>
      <View style={styles.container}>
        {/* TOP */}
        <View style={styles.top}>
          <Logo />
        </View>
        {/* BOTTOM */}
        <View style={styles.bottom}>
          <Button
            bg-primaryColor
            enableShadow
            onPress={() => PlayOfflineAction()}
            style={styles.button}>
            <Text
              style={{fontFamily: 'BubblegumSans-Regular'}}
              secondary
              bold
              bubblegumSans>
              Play Single
            </Text>
          </Button>
          <Button
            bg-primaryColor
            enableShadow
            onPress={() => PlayOnlineAction()}
            style={styles.button}>
            <Text secondary bold>
              Play Online
            </Text>
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
}
