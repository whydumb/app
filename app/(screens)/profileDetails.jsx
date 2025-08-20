import { StyleSheet, Text, View, Image, ScrollView, StatusBar, Pressable, Platform } from 'react-native';
import React, { useContext } from 'react';
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/dark_back.svg";
import Profile from "../../assets/images/profile_details_img.png";
import ThemeContext from '../../theme/ThemeContext';
import { router } from "expo-router";
import ProfileDetailsComponent from '../../components/ProfileDetailsComponent/ProfileDetailsComponent';

const ProfileDetails = () => {
    const { theme, darkMode } = useContext(ThemeContext);
    const back = () => {
        router.push('home');
    };
  return (
    <View style={[styles.container, {backgroundColor:theme.background}]}>
        <StatusBar translucent barStyle={darkMode? 'light-content' : 'dark-content'} />
        <Pressable onPress={back}>
    { darkMode? <Dark_back /> : <Back />}
    </Pressable>
    <View style={styles.image_container}>
        <Image source={Profile} style={styles.image} alt='image' />
        <Pressable style={styles.button_container}>
        <Text style={styles.button_text}>match</Text>
        <Pressable style={styles.donet_progress}>
        <Text style={styles.matches}>80%</Text>
        </Pressable>
        </Pressable>
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
    <ProfileDetailsComponent />
    </ScrollView>
    </View>
  )
}

export default ProfileDetails;

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'web'? 10 : 50,
        paddingHorizontal: 20,
        flex: 1,
    },
    image_container: {
        alignItems: 'center',
    },
    button_container: {
        position: 'relative',
        backgroundColor: '#FF007E',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '40%',
        marginVertical: 10,
    },
    donet_progress: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderRadius: 50,
        borderColor: '#ffffff',
        padding: 3,
        left: 10,
    },
    matches: {
        fontSize: 8,
        lineHeight: 16,
        fontFamily: 'Lato_400Regular',
        color: '#ffffff',
    },
    button_text: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Montserrat_600SemiBold',
        color: '#ffffff',
        textTransform: 'capitalize',
        marginLeft: 20,
    }
})