import { StyleSheet, Text, View, StatusBar, ScrollView, Platform } from 'react-native';
import React, { useContext } from 'react';
import Log_img from "../../assets/images/Login.svg";
import Button from '../../components/Button/Button';
import { router, Link } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';
import LogMethod from '../../components/LogMethod/LogMethod';

const Login = () => {
    const { theme, darkMode } = useContext(ThemeContext);
    const mobile = () => {
        router.push('mobile');
    };
    return (
        <View style={[styles.container, {backgroundColor:theme.background}]}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrolls}>
            <View style={styles.main_column}>
             <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle={darkMode ? "light-content" : "dark-content"}
            />
            <View style={styles.column}>
            <View style={styles.image_container}>
                <Log_img />
                <Text style={[styles.text, {color:theme.color}]}>Let’s meet new people around you</Text>
            </View>
            <LogMethod />
            <View style={styles.button_box}>
                <Button buttonText="Use mobile number" borderRadius={50} onPress={mobile} />
            </View>
            </View>
            <Text style={[styles.bottom_text, {color:theme.color3}]}>Don’t have an account?
            <Link href='/signup' style={styles.link}> Sign Up</Link></Text>
            </View>
            </ScrollView>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'web' ? 0 : '12%',
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'space-between',
    },
    scrolls: {
        flexGrow: 1,
    },
    main_column: {
        flex: 1,
        justifyContent: 'space-between',
    },
    image_container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        lineHeight: 34,
        fontFamily: 'Montserrat_700Bold',
        color: '#000000',
        textAlign: 'center',
        marginTop: 39,
        maxWidth: 250,
    },
    button_box: {
        marginVertical: 16,
    },
    bottom_text: {
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        color: '#4C4C4C',
        marginBottom: Platform.OS === 'web'? '2%' : '10%',
    },
    link: {
        fontFamily: 'Montserrat_600SemiBold',
        color: '#FF007E',
    }
})