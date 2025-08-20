import { StyleSheet, Text, View, Image, Pressable, Platform } from 'react-native';
import React, { useContext } from 'react';
import profile from "../../assets/images/profiles1.png";
import ThemeContext from '../../theme/ThemeContext';
import Input from '../Input/Input';
import Vector from "../../assets/images/vector.svg";
import Mic from "../../assets/images/mic.svg";
import Arrow from "../../assets/images/right_arrow_white.svg";

const ChatScreenComponent = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
        <View style={styles.column}>
            
    <View style={styles.header}>
        <Text style={styles.time}>Today</Text>
        </View>
        <View style={styles.chat}>
            <Text style={styles.mychat}>Hello! Jhon abraham</Text>
            <Text style={styles.chat_time}>09:25 AM</Text>
        </View>
        <View style={styles.chat_row}>
            <Image source={profile} alt='image' style={styles.profile} />
            <View style={styles.column}>
                <Text style={styles.name}>Jhon Abraham</Text>
                <View style={styles.chat2}>
            <Text style={styles.mychat2}>Hello! Jhon abraham</Text>
            <Text style={styles.chat_time}>09:25 AM</Text>
        </View>
            </View>
        </View>
        <View style={styles.chat}>
            <Text style={styles.mychat}>You did your job well!</Text>
            <Text style={styles.chat_time}>09:25 AM</Text>
        </View>
        </View>
        <View style={styles.container2}>
      <View style={styles.input_container}>
        <Input placeholder="Type Something...." borderColor="transparent" backgroundColor={darkMode? 'rgba(238, 238, 238, 0.2)' : '#EEEEEE'} />
        <View style={styles.row}>
            <Vector />
            <Mic />
        </View>
      </View>
      <Pressable style={styles.button}>
        <Arrow />
      </Pressable>
    </View>
   
    </View>
  )
}

export default ChatScreenComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    column: {
    
    },
    header: {
        alignItems: 'center',
        marginTop: 50,
    },
    time: {
        textAlign: 'center',
        backgroundColor: '#F8FBFA',
        paddingVertical: 7,
        paddingHorizontal: 9,
        maxWidth: 55,
        fontSize: 12,
        lineHeight: 12,
        fontFamily: 'Lato_400Regular',
        color: '#000000',
        borderRadius: 6,
    },
    chat: {
        alignItems: 'flex-end',
    },
    mychat: {
        marginTop: 20,
        fontSize: 12,
        lineHeight: 22,
        fontFamily: 'Lato_400Regular',
        color: '#ffffff',
        backgroundColor: '#FF007E',
        paddingVertical: 7,
        paddingHorizontal: 16,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        maxWidth: '50%',
    },
    chat_time: {
        fontSize: 10,
        lineHeight: 10,
        fontFamily: 'Lato_400Regular',
        color: '#4C4C4C',
        paddingTop: 10,
        paddingRight: 5,
        textAlign: 'right',
    },
    chat_row: {
        flexDirection: 'row',
        gap: 5,
    },
    profile: {
        width: 40,
        height: 40,
    },
    column: {

    },
    name: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Montserrat_600SemiBold',
        color: '#000000',
    },
    chat2: {

    },
    mychat2: {
        marginTop: 10,
        fontSize: 12,
        lineHeight: 22,
        fontFamily: 'Lato_400Regular',
        color: '#000000',
        backgroundColor: '#EEEEEE',
        paddingVertical: 7,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        maxWidth: '100%',
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom:Platform.OS === 'web'? 10 : '10%',
    },
    input_container: {
        position: 'relative',
        maxWidth: Platform.OS === 'web'? '90%' : '75%',
        minWidth: Platform.OS === 'web'? '90%' : '75%',
    },
    row: {
        flexDirection: 'row',
        alignItems:'center',
        gap: 12,
        position: 'absolute',
        bottom: 20,
        right: 10,
    },
    button: {
        backgroundColor: '#FF007E',
        borderRadius: 10,
        width: 71,
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: Platform.OS === 'web'? -5 : -29,
    }
})