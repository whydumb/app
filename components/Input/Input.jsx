import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useContext } from 'react';
import ThemeContext from '../../theme/ThemeContext';
import { Lato_700Bold } from '@expo-google-fonts/lato';

const Input = ({
  label,
  placeholder,
  keyboardType,
  borderRadius,
  backgroundColor,
  borderColor,
  width,
}) => {
  const { theme, darkMode } = useContext(ThemeContext);

  return (
    <View>
      <View style={styles.inputBox}>
        <Text style={[styles.label, { color: theme.color }]}>{label}</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={[
              styles.input,
              {
                color: theme.color,
                borderRadius: borderRadius || 15,
                backgroundColor: backgroundColor || 'transparent',
                borderColor: borderColor || '#FF007E',
                width: width || '100%',
              },
            ]}
            placeholderTextColor={darkMode ? '#ffffff' : '#808080'}
            placeholder={placeholder}
            keyboardType={keyboardType}
          />
        </View>
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputBox: {
    gap: 10,
  },
  label: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Lato_700Bold',
    color: '#121212',
    textTransform: 'capitalize',
  },
  inputWrapper: {
    position: 'relative',
  },
  input: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderWidth: 1,
    minWidth: 140,
  },
});
