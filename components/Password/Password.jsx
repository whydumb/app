import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import React, { useContext } from 'react';
import Open from "../../assets/images/eye-open.svg";
import Close from "../../assets/images/eye-close.svg";
import ThemeContext from '../../theme/ThemeContext';
import { Lato_700Bold } from '@expo-google-fonts/lato';

const Password = ({ label, passwordVisible, setPasswordVisible, placeholder, keyboardType }) => {
    const { theme, darkMode } = useContext(ThemeContext);
    const togglePasswordVisible = () => {
        setPasswordVisible(!passwordVisible);
    };
    return (
        <View style={styles.inputBox}>
            <Text style={[styles.label, { color: theme.color }]}>{label}</Text>
            <View style={styles.inputWrapper}>
              
                <TextInput
                    style={[styles.passwordInput, { color: theme.color, backgroundColor: 'transparent' }]}
                    placeholderTextColor={darkMode ? '#ffffff' : '#808080'}
                    placeholder={placeholder}
                    secureTextEntry={!passwordVisible}
                    keyboardType={keyboardType}
                />
                <Pressable onPress={togglePasswordVisible} style={styles.eye}>
                    {passwordVisible ? <Open /> : <Close />}
                </Pressable>
            </View>
        </View>
    );
}

export default Password;

const styles = StyleSheet.create({
    inputBox: {
        gap: 10,
    },
    label: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
    },
    inputWrapper: {
        position: 'relative',
    },
    passwordInput: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        paddingLeft: 20,
        paddingRight: 45,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#FF007E',
    },
    eye: {
        position: 'absolute',
        right: 10,
        bottom: 18,
    },
});
