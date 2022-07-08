import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput } from 'react-native';
import { Icon } from "@rneui/themed";
import { TouchableOpacity } from 'react-native';

export default function Signup_otp(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/otplogo.png')} />

                </View>
                <Text style={styles.singUpText}>We Sent you a code to
                    verify your number</Text>
                <Text>Sent to {props.route.params.number}</Text>
                <View style={styles.searchSection}>
                    <Icon
                        style={styles.icon}
                        type='feather'
                        name='phone'
                        color='#7A869A'
                        size={15}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="code"
                    // onChangeText={(searchString) => { this.setState({ searchString }) }}
                    />
                </View>
            </View>

            <TouchableOpacity style={styles.submitButton}
                onPress={() =>
                    props.navigation.navigate('login')
                }
            >
                <Image source={require('../../assets/submit.png')} />

            </TouchableOpacity>

        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        flexDirection: 'column', justifyContent: 'space-between'

    },

    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        minWidth: 250
    },

    singUpText: {
        marginTop: 30,
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 10


    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    icon: {
        paddingTop: 5,

    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        marginLeft: 10,
        color: '#424242',
        borderBottomWidth: 1,
        borderBottomColor: "rgba(83, 99, 125, 0.21)"
    },
    register: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    registerText: {
        marginTop: 10,
        fontWeight: '400',
        fontSize: 14,
        color: "rgba(121, 133, 154, 1)"
    },
    loginText: {
        fontWeight: '400',
        fontSize: 14,
        color: "rgba(121, 133, 154, 1)"
    },
    socialMediaContainer: {
        flexDirection: "row",

        alignItems: 'center',
        justifyContent: 'space-around',
    },
    socialMediaButton: {
        marginTop: 20,
        width: 75,
        height: 50,
        backgroundColor: "#F8F7FF",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    submitButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,

    },

});

