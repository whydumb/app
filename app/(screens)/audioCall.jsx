import { StyleSheet, Text, View, Image, Animated, PanResponder, StatusBar, Pressable } from 'react-native';
import React, { useContext, useRef } from 'react';
import Bg from "../../assets/images/audio_bg.png";
import Profile from "../../assets/images/audio_profile.png";
import { row_data } from '../../Data/Data';
import Call from "../../assets/images/call_red_icon.svg";
import { router } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';

const AudioCall = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  const press = () => {
    router.push('(screens)/chatScreen');
  };
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, { dx: pan.x }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (e, gestureState) => {
        // Check if the swipe was completed (e.g., moved more than half the container's width)
        if (gestureState.dx > 150) {
          // Handle call acceptance
          console.log('Call accepted');
        } else {
          // Reset position if swipe not completed
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
      }
    })
  ).current;

  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle={'dark-content'} />
        <Image source={Bg} alt='image' style={styles.bg} />
        <View style={styles.content}>
            <Image source={Profile} style={styles.image} alt='Image' />
            <Text style={styles.name}>Borsha Akther</Text>
            <Text style={styles.call}>Incoming call</Text>
        </View>
        <View style={styles.row}>
            {
                row_data.map((d) => (
                    <Pressable style={styles.column} key={d.id} onPress={press}>
                        {d.icon}
                        <Text style={styles.text}>{d.text}</Text>
                    </Pressable>
                ))
            }
        </View>
        <View style={styles.swipper_container}>
            <Animated.View
              {...panResponder.panHandlers}
              style={[styles.circle, { transform: [{ translateX: pan.x }] }]}
            >
                <Call />
            </Animated.View>
        </View>
    </View>
  )
}

export default AudioCall;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    bg: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    content: {
        
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '30%',
    },
    image: {
        width: 140,
        height: 140,
    },
    name: {
        fontSize: 20,
        lineHeight: 30,
        fontFamily: 'Montserrat_600SemiBold',
        color: '#FFFFFF',
    },
    call: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Lato_400Regular',
        color: '#EEEEEE',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        position:'absolute',
        bottom: "20%",
        left: '10%',
        width: '80%',
    },
    column: {
        alignItems: 'center',
        gap: 10,
    },
    text: {
        fontSize: 16,
        lineHeight: 16,
        fontFamily: 'Lato_400Regular',
        color: '#FFFFFF',
    },
    swipper_container: {
        position: 'absolute',
        bottom: 68,
        marginHorizontal: 20,
        left: 20,
        right: 20,
        backgroundColor: 'rgba(51, 51, 51, 0.5)',
        borderRadius: 30,
        paddingVertical: 6,
        paddingHorizontal: 10,
    },
    circle: {
        borderRadius: 50,
        backgroundColor: '#ffffff',
        width: 48,
        height: 48,
        alignItems:'center',
        justifyContent:'center',
    },
});
