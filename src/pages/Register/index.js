import React, {useEffect} from 'react';
import {Card, Colors, Button, View} from 'react-native-ui-lib';
import {Text, TextInput} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

export default function Register() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Button bg-white enableShadow style={styles.button}>
          <Text style={[styles.buttonText, {color: '#6A5AE0'}]}>
            Register with Google
          </Text>
        </Button>
        <Button bg-blue10 enableShadow style={styles.button}>
          <Text style={styles.buttonText}>Register with Facebook</Text>
        </Button>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomInput}>
          <Text style={styles.text}>Username</Text>
          <View style={styles.inputBase}>
            <Icon
              name="person"
              size={25}
              color={Colors.primary}
              style={{
                marginRight: 10,
                marginLeft: 10,
              }}
            />
            <TextInput
              placeholderTextColor="#858494"
              placeholder="Username"
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.bottomInput}>
          <Text style={styles.text}>Email</Text>
          <View style={styles.inputBase}>
            <Icon
              name="email"
              size={25}
              color={Colors.primary}
              style={{
                marginRight: 10,
                marginLeft: 10,
              }}
            />
            <TextInput
              placeholderTextColor="#858494"
              placeholder="Email Address"
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.bottomInput}>
          <Text style={styles.text}>Password</Text>
          <View style={styles.inputBase}>
            <Icon
              name="lock"
              size={25}
              color={Colors.primary}
              style={{
                marginRight: 10,
                marginLeft: 10,
              }}
            />
            <TextInput
              placeholderTextColor="#858494"
              placeholder="Password"
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.bottomInput}>
          <Button bg-primary enableShadow style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}
