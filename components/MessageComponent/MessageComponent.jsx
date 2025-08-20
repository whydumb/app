import { StyleSheet, Text, View, ScrollView, Image, Pressable, Platform } from 'react-native'
import React, {useContext} from 'react'
import { profiles } from '../../Data/Data';
import ThemeContext from '../../theme/ThemeContext';
import MessageContext from '../../message_context';
import { router } from 'expo-router';
import { message_data } from '../../Data/Data';

const MessageComponent = () => {
    const { theme } = useContext(ThemeContext);
    const { setSelectedMessage } = useContext(MessageContext);
    const handleChat = (message) => {
        setSelectedMessage(message);
        router.push('(screens)/chatScreen');
      };
    
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrolls}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
      <View style={styles.row}>
        <View sty={styles.box_container}>
        <Pressable style={styles.box}>
            <Text style={[styles.plus, {color:theme.color}]}>+</Text>
        </Pressable>
        <Text style={[styles.name, {color:theme.color}]}>add</Text>
        </View>
        <View style={styles.profiles_container}>
            {
                profiles.map((d) => (
                    <Pressable style={[styles.profile_box]} key={d.id} >
                        <Image source={d.image} alt='image' style={[styles.image ]} />
                        <Text style={[styles.name, {color:theme.color}]}>{d.name}</Text>
                    </Pressable>
                ))
            }
        </View>
      </View>
      </ScrollView>
      <View style={styles.message_container}>
        {message_data.map((d) => (
          <Pressable style={styles.message_row} key={d.id} onPress={() => handleChat(d)}>
            <View style={styles.message_left}>
              <Image source={d.image} style={styles.image2} />
              <View style={styles.message_column}>
                <Text style={[styles.name2, {color:theme.color}]}>{d.name}</Text>
                <Text style={styles.sender}>
                  {d.sender}
                  <Text style={[styles.message, {color:theme.color}]}>{d.message}</Text>
                </Text>
              </View>
            </View>
            <View style={styles.message_column2}>
              <Text style={styles.time}>{d.time}</Text>
              {d.noof && <Text style={styles.noof}>{d.noof}</Text>}
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
    </View>
  )
}

export default MessageComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 30,
    },
    box_container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30,
    },
    box: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FF007E',
        width: Platform.OS === 'web'? 230 : 80,
        height: Platform.OS === 'web'? 230 :  80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    plus: {
        color: '#FF007E',
        fontSize: 26,
    },
    profiles_container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        marginLeft: 16,
    },
    image: {
      width: Platform.OS === 'web'? 230 : 80,
      height: Platform.OS === 'web'? 230 :  80,
      borderRadius: 10,
        borderWidth: 1,
        borderColor: 'transparent',
    },
    name: {
        fontSize: 12,
        lineHeight: 22,
        fontFamily: 'Montserrat_700Bold',
        color: '#000000',
        textAlign: 'center',
    },
    message_container: {},
    message_row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#EEEEEE',
    },
    message_left: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 4,
    },
    image2: {
      width: 50,
      height: 50,
    },
    message_column: {
      gap: 3,
    },
    name2: {
      fontSize: 14,
      lineHeight: 24,
      fontFamily: 'Montserrat_600SemiBold',
      color: '#000000',
    },
    sender: {
      fontSize: 14,
      lineHeight: 24,
      fontFamily: 'Lato_400Regular',
      color: '#4C4C4C',
    },
    message: {
      color: '#000000',
    },
    message_column2: {
      alignItems: 'center',
    },
    time: {
      fontSize: 12,
      lineHeight: 24,
      fontFamily: 'Lato_400Regular',
      color: '#ADAFBB',
    },
    noof: {
      fontSize: 12,
      lineHeight: 18,
      color: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FF0023',
      borderRadius: 50,
      width: 20,
      height: 20,
      textAlign: 'center',
    }
})