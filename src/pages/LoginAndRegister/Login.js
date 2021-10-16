import React from 'react';
import {View, Text} from 'react-native';
import {Card, Colors, Button, TextField} from 'react-native-ui-lib';

import styles from './styles';

export default function LoginPage(props) {
    return (
        <View style={styles.loginContainer}>
            <View style={styles.loginFormTop}>
                <Text style={styles.loginFormTopText}>Login</Text>
            </View>
            <View style={styles.loginForm}>
                <TextField 
                underlineColor={"#662900"}
                placeholder={"Username"} maxLength={128}/>
                <TextField 
                underlineColor={"#662900"}
                placeholder={"Password"} maxLength={128}/>
            </View>
            <View style={styles.loginFormBottom}>
                <Button
                    onPress={() => props.setPage(1)}
                    enableShadow
                    bg-pastelOrangeBg
                    style={styles.button}>
                    <Text style={styles.text}>
                        Login
                    </Text>
                </Button>
                <View style={styles.loginFormSocials}>
                    <Button
                        onPress={() => props.setPage(1)}
                        enableShadow
                        bg-blue10
                        style={styles.button}>
                        <Text
                            style={{
                            color: "white"
                        }}>
                            Facebook
                        </Text>
                    </Button>
                    <Button
                        onPress={() => props.setPage(1)}
                        enableShadow
                        bg-blue50
                        style={styles.button}>
                        <Text
                            style={{
                            color: "white"
                        }}>
                            Twitter
                        </Text>
                    </Button>
                </View>
                <View
                    style={{
                    borderBottomColor: "#F4D19B",
                    borderBottomWidth: 1
                }}/>
                <Button
                    onPress={() => props.setPage(1)}
                    bg-pastelOrangeBg
                    enableShadow
                    style={styles.button}>
                    <Text style={styles.text}>
                        Don't have an account?
                    </Text>
                </Button>
            </View>
        </View>
    );
}
