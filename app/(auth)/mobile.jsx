import { StyleSheet, Text, View,  KeyboardAvoidingView, Platform, Pressable } from 'react-native';
import React, { useContext } from 'react';
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/dark_back.svg";
import PhoneNumberInput from '../../components/Phonenumber/Phonenumber';
import Button from '../../components/Button/Button';
import { router } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';

const Mobile = () => {
    const { theme, darkMode } = useContext(ThemeContext);
    const press = () => {
        router.push('verification');
    };
    const back = () => {
        router.push('login');
    };

    return (
        <KeyboardAvoidingView
            style={[styles.container, { backgroundColor: theme.background }]}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
                <View style={styles.column}>
                    <View>
                        <View style={styles.header}>
                            <Pressable onPress={back} style={styles.back}>
                                {darkMode ? <Dark_back /> : <Back />}
                            </Pressable>
                            <Text style={[styles.heading, { color: theme.color }]}>My mobile</Text>
                        </View>
                        <View style={styles.heading_content}>
                            <Text style={[styles.heading_text, { color: theme.color3 }]}>
                                Please enter your valid phone number. We will send you a 4-digit code to verify your account.
                            </Text>
                        </View>
                        <PhoneNumberInput />
                    </View>
                    <View style={styles.button_box}>
                        <Button buttonText="Continue" borderRadius={20} onPress={press} />
                    </View>
                </View>
        </KeyboardAvoidingView>
    )
}

export default Mobile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
    },
    column: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        paddingTop: 20,
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
        color: '#000000',
        textTransform: 'capitalize',
        position: 'absolute',
       width: '100%',
       textAlign: 'center',
    },
    heading_content: {
        alignItems: 'center',
    },
    heading_text: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        color: '#4C4C4C',
        textAlign: 'center',
        marginVertical: 16,
        maxWidth: 250,
    },
    button_box: {
        marginBottom: Platform.OS === 'web'? '2%' : '15%',
    },
});
