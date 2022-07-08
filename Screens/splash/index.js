import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Button, Text, View, Image } from 'react-native';

export default function splash({ navigation }) {

    useEffect(() => {
        navigation.navigate('Signup')


    }, 1000)

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00B4D8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "white",

    },
    button: {
        color: "black",
        backgroundColor: "white"
    }
});
