import { StyleSheet, Text, View, Pressable, Platform  } from 'react-native'
import React from 'react'
import { Log_data } from '../../Data/Data';

const LogMethod = () => {
  return (
    <View style={styles.container}>
      <View style={styles.stack_container}>
        {
            Log_data.map((d, index) => (
                <Pressable style={index === 0? styles.stack1 : styles.stack } key={d.id}>
                    <View style={styles.icon_box}>
                        {d.icon}
                    </View>
                    <Text style={styles.text}>{d.text}</Text>
                </Pressable>
            ))
        }
      </View>
    </View>
  )
}

export default LogMethod;

const styles = StyleSheet.create({
    stack_container: {
        gap: 16,
        marginTop: 20,
    },
    stack1: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4E229C',
        borderRadius: 10,
        position: 'relative',
    },
    stack: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1877F2',
        borderRadius: 10,
        position: 'relative',
    },
    icon_box: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: 44,
        height: 44,
        borderRadius: 10,
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Lato_400Regular',
        color: '#ffffff',
        position: 'absolute',
        left: Platform.OS === 'web'? '44%' : '30%',
    }
})