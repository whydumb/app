import { StyleSheet, Text, View,  StatusBar, KeyboardAvoidingView,  Platform, Pressable } from 'react-native';
import React, { useContext } from 'react';
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/dark_back.svg";
import { router } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';
import Otp from '../../components/OTP/Otp';
import Button from '../../components/Button/Button';

const Verification = () => {
    const { theme, darkMode } = useContext(ThemeContext);
    const back = () => {
        router.push('signup');
    };

    return (
        <KeyboardAvoidingView
            style={[styles.mainContainer, { backgroundColor: theme.background }]}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle={darkMode ? "light-content" : "dark-content"}
            />
            <View style={styles.column}>
            <View style={styles.header}>
                <Pressable onPress={back} style={styles.back}>
                   {darkMode? <Dark_back /> : <Back />}
                </Pressable>
                <Text style={[styles.heading, { color: theme.color }]}>Verification Code</Text>
            </View>
            <View style={styles.content}>
                <Text style={[styles.content_text, { color: theme.color3 }]}>Please enter code we just send to</Text>
                <Text style={[styles.number, { color: theme.color }]}>+1 331 623 8413</Text>
                <Otp />
            </View>
            </View>
            <View style={styles.button_box}>
                <Button buttonText="Verify" onPress={() => {router.push('paginationScreens')}} />
            </View>
        </View>
        </KeyboardAvoidingView>
    );
}

export default Verification;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexGrow: 1,
    },
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        marginVertical: 20,
    },
    back: {
        position: 'absolute',
        left: 0,
        zIndex: 100,
    },
    heading: {
        fontSize: 24,
        lineHeight: 34,
        fontFamily: 'Montserrat_800ExtraBold',
        color: '#121212',
        textTransform: 'capitalize',
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
    image: {
        width: 130,
        height: 130,
    },
    content_text: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        color: '#4C4C4C',
    },
    number: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_700Bold',
        color: '#121212',
    },
    button_box: {
        marginBottom: Platform.OS === 'web'? '2%' : '15%',
    }
});
