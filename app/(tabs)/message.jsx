import { StyleSheet, Text, View, StatusBar, KeyboardAvoidingView, Platform, Pressable } from 'react-native';
import React, { useContext } from 'react';
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/dark_back.svg";
import { router } from "expo-router";
import Search from "../../assets/images/search.svg";
import Dark_search from "../../assets/images/dark_search.svg";
import Input from '../../components/Input/Input';
import ThemeContext from '../../theme/ThemeContext';
import MessageComponent from '../../components/MessageComponent/MessageComponent';

const Message = () => {
  const { theme, darkMode } = useContext(ThemeContext);
  const back = () => {
    router.push('home');
  };
  return (
    <KeyboardAvoidingView style={[styles.container, {backgroundColor: theme.background}]} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StatusBar translucent barStyle={darkMode? 'light-content' : 'dark-content'} />
      <View style={styles.header}>
      <Pressable onPress={back} style={styles.back}>
          {darkMode ? <Dark_back /> : <Back />}
        </Pressable>
        <Text style={[styles.heading, {color:theme.color}]}>Message</Text>
      </View>
      <View style={styles.input_container}>
          <Input placeholder="Search" borderColor="transparent" backgroundColor={darkMode? 'rgba(238, 238, 238, 0.2)' : '#EEEEEE'} />
          {darkMode? <Dark_search style={styles.search} /> : <Search style={styles.search} />}
        </View>
        <MessageComponent />
    </KeyboardAvoidingView>
  )
}

export default Message;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 10,
    paddingTop: Platform.OS === 'web'? 10 : 35,
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
    color: '#000000',
    textTransform: 'capitalize',
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    paddingBottom: 20,
  },
  input_container: {
    position: 'relative',
    width: '100%',
  },
  search: {
    position: 'absolute',
    bottom: 21,
    right: 20,
  },
})