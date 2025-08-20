import { StyleSheet, Text, View, StatusBar, Pressable, Platform } from 'react-native';
import React, { useContext } from 'react';
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/dark_back.svg";
import ThemeContext from '../../theme/ThemeContext';
import { router } from "expo-router";
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent';

const Profile = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  const back = () => {
    router.push('home');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar translucent barStyle={darkMode? 'light-content' : 'dark-content'} />
      <View style={styles.header}>
        <Pressable onPress={back} style={styles.back}>
          {darkMode ? <Dark_back /> : <Back />}
        </Pressable>
        <Text style={[styles.heading, { color: theme.color }]}>Profile</Text>
      </View>
      <ProfileComponent />
    </View>
  )
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'web'? 20 : 50,
    paddingHorizontal: 20,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
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
    fontFamily: 'Montserrat_700Bold',
    color: '#121212',
    textTransform: 'capitalize',
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
  },
  
});
