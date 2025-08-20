import React, { useContext, useState } from 'react';
import { View, TextInput, Image, StyleSheet, Text, Pressable } from 'react-native';
import CountrySelectorModal from '../CountrySelectorModal/CountrySelectorModal';
import Arrow from "../../assets/images/down_arrow.svg";
import ThemeContext from '../../theme/ThemeContext';

const PhoneNumberInput = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [flagUri, setFlagUri] = useState('https://flagcdn.com/w320/us.png');
  const [modalVisible, setModalVisible] = useState(false);

  const handleCountrySelect = (country) => {
    setCountryCode(country.code);
    setFlagUri(country.flag);
    setModalVisible(false);
  };

  return (
    <View>
      <View style={[styles.container, {backgroundColor:'transparent'}]}>
        <Pressable style={styles.flagAndCode} onPress={() => setModalVisible(true)}>
          <Image source={{ uri: flagUri }} style={styles.flag} />
          <Text style={[styles.countryCode, {color:theme.color}]}>({countryCode})</Text>
          <Arrow />
        </Pressable>
        <View style={styles.divider}></View>
        <TextInput
          style={[styles.phoneNumberInput, {color:theme.color}]}
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          placeholder="Enter phone number"
          placeholderTextColor={darkMode ? '#ffffff' : '#808080'}
          keyboardType="phone-pad"
        />
      </View>
      <CountrySelectorModal
        visible={modalVisible}
        onSelect={handleCountrySelect}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#FF007E',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    backgroundColor: 'white',
  },
  flagAndCode: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  countryCode: {
    fontSize: 16,
    marginRight: 5,
  },
  divider: {
    width: 2,
    height: 20,
    backgroundColor: '#FF007E',
    marginHorizontal: 10,
  },
  phoneNumberInput: {
    flex: 1,
    fontSize: 16,
  },
});

export default PhoneNumberInput;
