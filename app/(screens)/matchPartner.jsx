import { StyleSheet, Text, View,Image, ScrollView, StatusBar, Pressable, Platform } from 'react-native';
import React, { useContext } from 'react';
import Back from "../../assets/images/back.svg";
import Dark_Back from "../../assets/images/dark_back.svg";
import Circle from "../../assets/images/circle_bg.png";
import Like from "../../assets/images/like.svg";
import Ecllipse1 from "../../assets/images/ecllipse1.png";
import Ecllipse2 from "../../assets/images/ecllipse2.png";
import Love from "../../assets/images/love_tick.svg";
import Dots1 from "../../assets/images/color_dots1.svg";
import Dots2 from "../../assets/images/color_dots2.svg";
import ThemeContext from '../../theme/ThemeContext';
import { router } from "expo-router";
import Button from '../../components/Button/Button';
import { Montserrat_500Medium } from '@expo-google-fonts/montserrat';

const MatchPartner = () => {
    const { theme, darkMode } = useContext(ThemeContext);
    const back = () => {
        router.push('home');
    };
  return (
    <View style={[styles.container, {backgroundColor:theme.background}]}>
        <StatusBar translucent barStyle={darkMode? 'light-content' : 'dark-content'} />
        <Pressable onPress={back}>
     {darkMode? <Dark_Back /> : <Back />}
      </Pressable>
      <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.image_container}>
        <Image source={Circle} style={styles.circle}  alt='image' />
        <Like style={styles.like} />
        <Image source={Ecllipse1} style={styles.ecllipse1} alt='image' />
        <Image source={Ecllipse2} style={styles.ecllipse2} alt='image' />
        <Love style={styles.love} />
        <Dots1 style={styles.dots1} />
        <Dots2 style={styles.dots2} />
    </View>
    <View>
      <Text style={styles.heading}>It’s a match, Jake!</Text>
      <Text style={[styles.heading_text, {color:theme.color3}]}>Start a conversation now with each other</Text>
      <View style={styles.button_container}>
      <Button buttonText="say hello" onPress={() =>{router.push('message')}} />
      <Pressable style={styles.button} onPress={() =>{router.push('home')}}>
        <Text style={styles.button_text}>Keep swiping</Text>
      </Pressable>
      </View>
    </View>
    </ScrollView>
    </View>
  )
}

export default MatchPartner;

const styles = StyleSheet.create({
container: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'web'? 20 : '15%',
    flex: 1,
},
image_container: {
    alignItems: 'center',
    justifyContent: 'center',
},
circle: {
    width: 300,
    position: 'relative',
},
like: {
    position: 'absolute',
    top: 70,
    left: 135,
},
ecllipse1: {
    position: 'absolute',
    width: 100,
    height: 100,
    right: 30,
    top: 120,
},
ecllipse2: {
    position: 'absolute',
    width: 100,
    height: 100,
    left: 50,
    top: 170,
},
love: {
    position: 'absolute',
    bottom: 155,
    right: 80,
},
dots1: {
    position: 'absolute',
    right: 24,
    bottom: 180,
},
dots2: {
    position: 'absolute',
    left: 18,
    top: 160,
},
heading: {
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'Montserrat_700Bold',
    color: '#FF007E',
    textAlign: 'center',
    marginTop: -50,
},
heading_text: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Lato_400Regular',
    color: '#4C4C4C',
    textAlign: 'center',
},
button_container: {
    marginTop: 50,
    gap: 20,
    marginBottom: Platform.OS === 'web'? 20 : '15%',
},
button: {
    height: 56,
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 0, 126, 0.1)',
},
button_text: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Montserrat_500Medium',
    color: '#FF007E',
}
})