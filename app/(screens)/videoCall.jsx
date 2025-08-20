import { StyleSheet, View, Image, Pressable } from 'react-native';
import React, { useContext } from 'react';
import Back from "../../assets/images/back.svg";
import Bg from "../../assets/images/video_bg.png";
import Bg2 from "../../assets/images/video_bg2.png";
import { video_call_data } from '../../Data/Data';
import ThemeContext from '../../theme/ThemeContext';
import { router } from "expo-router";

const videoCall = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const back = () => {
        router.push('(screens)/chatScreen');
    };
  return (
    <View style={styles.container}>
      <Image source={Bg} alt='image' style={styles.image} />
      <View style={styles.top_row}>
        <Pressable onPress={back}>
        <Back />
        </Pressable>
        <Image style={styles.image2} source={Bg2} alt='image' />
      </View>
      <View style={styles.bottom_row}>
        {
            video_call_data.map((d) => {
                let circleStyle = styles.circle;
                switch (d.id) {
                    case 4:
                        circleStyle = [styles.circle, { backgroundColor: '#FF007E' }];
                        break;
                    case 5:
                        circleStyle = [styles.circle, { backgroundColor: '#FF0200' }];
                        break;
                }
                return (
                    <Pressable style={circleStyle} key={d.id}>
                        {d.icon}
                    </Pressable>
                );
            })
        }
      </View>
    </View>
  )
}

export default videoCall;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        position: 'relative',
        height: '100%',
        flex: 1,
        width: '100%',
    },
    top_row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 60,
        paddingHorizontal: 20,
    },
    image2: {
        width: 80,
        height: 90,
        marginLeft: '68%',
    },
    bottom_row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        position: 'absolute',
        bottom: 90,
        gap: 20,
        width: '100%',
    },
    circle: {
        borderRadius: 50,
        backgroundColor: 'rgba(51, 51, 51, 0.2)', 
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
    }
})
