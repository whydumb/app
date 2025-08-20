import React from 'react';
import { Text, StyleSheet, Platform, Pressable } from 'react-native';

const Button = ({ buttonText, onPress, backgroundColor, textColor, borderColor, borderRadius, width }) => {
  return (
    <Pressable
      style={[
        styles.button,
        {
          backgroundColor: backgroundColor || '#FF007E',
          borderColor: borderColor || 'transparent',
          borderRadius: borderRadius || 20,
          width: width || '100%',
        },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor || '#ffffff' }]}>
        {buttonText}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    height: 55,
    justifyContent: 'center',
    minWidth: 150,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 20,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  buttonText: {
    textTransform: 'capitalize',
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
});

export default Button;
