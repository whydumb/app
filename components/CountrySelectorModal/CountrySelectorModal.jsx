import React, { useContext } from 'react';
import { Modal, View, FlatList, Text, Image, StyleSheet, Pressable } from 'react-native';
import Arrow from "../../assets/images/down_arrow.svg";
import ThemeContext from '../../theme/ThemeContext';

const countries = [
    { code: '+1', name: 'United States', flag: 'https://flagcdn.com/w320/us.png' },
    { code: '+91', name: 'India', flag: 'https://flagcdn.com/w320/in.png' },
    { code: '+44', name: 'United Kingdom', flag: 'https://flagcdn.com/w320/gb.png' },
    { code: '+33', name: 'France', flag: 'https://flagcdn.com/w320/fr.png' },
    { code: '+49', name: 'Germany', flag: 'https://flagcdn.com/w320/de.png' },
    { code: '+34', name: 'Spain', flag: 'https://flagcdn.com/w320/es.png' },
    { code: '+39', name: 'Italy', flag: 'https://flagcdn.com/w320/it.png' },
    { code: '+31', name: 'Netherlands', flag: 'https://flagcdn.com/w320/nl.png' },
    { code: '+41', name: 'Switzerland', flag: 'https://flagcdn.com/w320/ch.png' },
    { code: '+46', name: 'Sweden', flag: 'https://flagcdn.com/w320/se.png' },
    { code: '+47', name: 'Norway', flag: 'https://flagcdn.com/w320/no.png' },
    { code: '+45', name: 'Denmark', flag: 'https://flagcdn.com/w320/dk.png' },
    { code: '+43', name: 'Austria', flag: 'https://flagcdn.com/w320/at.png' },
    { code: '+32', name: 'Belgium', flag: 'https://flagcdn.com/w320/be.png' },
    { code: '+30', name: 'Greece', flag: 'https://flagcdn.com/w320/gr.png' },
    { code: '+351', name: 'Portugal', flag: 'https://flagcdn.com/w320/pt.png' },
    { code: '+353', name: 'Ireland', flag: 'https://flagcdn.com/w320/ie.png' },
    { code: '+48', name: 'Poland', flag: 'https://flagcdn.com/w320/pl.png' },
    { code: '+420', name: 'Czech Republic', flag: 'https://flagcdn.com/w320/cz.png' },
    { code: '+36', name: 'Hungary', flag: 'https://flagcdn.com/w320/hu.png' },
    { code: '+358', name: 'Finland', flag: 'https://flagcdn.com/w320/fi.png' },
    { code: '+386', name: 'Slovenia', flag: 'https://flagcdn.com/w320/si.png' },
    { code: '+421', name: 'Slovakia', flag: 'https://flagcdn.com/w320/sk.png' },
    { code: '+376', name: 'Andorra', flag: 'https://flagcdn.com/w320/ad.png' },
    { code: '+357', name: 'Cyprus', flag: 'https://flagcdn.com/w320/cy.png' },
    { code: '+372', name: 'Estonia', flag: 'https://flagcdn.com/w320/ee.png' },
    { code: '+370', name: 'Lithuania', flag: 'https://flagcdn.com/w320/lt.png' },
    { code: '+371', name: 'Latvia', flag: 'https://flagcdn.com/w320/lv.png' },
    { code: '+356', name: 'Malta', flag: 'https://flagcdn.com/w320/mt.png' },
    { code: '+86', name: 'China', flag: 'https://flagcdn.com/w320/cn.png' },
    { code: '+81', name: 'Japan', flag: 'https://flagcdn.com/w320/jp.png' },
    { code: '+82', name: 'South Korea', flag: 'https://flagcdn.com/w320/kr.png' },
    { code: '+62', name: 'Indonesia', flag: 'https://flagcdn.com/w320/id.png' },
    { code: '+63', name: 'Philippines', flag: 'https://flagcdn.com/w320/ph.png' },
    { code: '+60', name: 'Malaysia', flag: 'https://flagcdn.com/w320/my.png' },
    { code: '+65', name: 'Singapore', flag: 'https://flagcdn.com/w320/sg.png' },
    { code: '+66', name: 'Thailand', flag: 'https://flagcdn.com/w320/th.png' },
    { code: '+84', name: 'Vietnam', flag: 'https://flagcdn.com/w320/vn.png' },
    { code: '+855', name: 'Cambodia', flag: 'https://flagcdn.com/w320/kh.png' },
    { code: '+856', name: 'Laos', flag: 'https://flagcdn.com/w320/la.png' },
    { code: '+95', name: 'Myanmar', flag: 'https://flagcdn.com/w320/mm.png' },
    { code: '+94', name: 'Sri Lanka', flag: 'https://flagcdn.com/w320/lk.png' },
    { code: '+92', name: 'Pakistan', flag: 'https://flagcdn.com/w320/pk.png' },
    { code: '+880', name: 'Bangladesh', flag: 'https://flagcdn.com/w320/bd.png' },
    { code: '+977', name: 'Nepal', flag: 'https://flagcdn.com/w320/np.png' },
    { code: '+960', name: 'Maldives', flag: 'https://flagcdn.com/w320/mv.png' },
    { code: '+673', name: 'Brunei', flag: 'https://flagcdn.com/w320/bn.png' },
    { code: '+64', name: 'New Zealand', flag: 'https://flagcdn.com/w320/nz.png' },
    { code: '+61', name: 'Australia', flag: 'https://flagcdn.com/w320/au.png' },
    { code: '+374', name: 'Armenia', flag: 'https://flagcdn.com/w320/am.png' },
    { code: '+994', name: 'Azerbaijan', flag: 'https://flagcdn.com/w320/az.png' },
    { code: '+995', name: 'Georgia', flag: 'https://flagcdn.com/w320/ge.png' },
    { code: '+976', name: 'Mongolia', flag: 'https://flagcdn.com/w320/mn.png' },
    { code: '+850', name: 'North Korea', flag: 'https://flagcdn.com/w320/kp.png' },
    { code: '+7', name: 'Russia', flag: 'https://flagcdn.com/w320/ru.png' },
  ];

const CountrySelectorModal = ({ visible, onSelect, onClose }) => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <FlatList
          data={countries}
          keyExtractor={(item) => item.code}
          renderItem={({ item }) => (
            <Pressable style={styles.countryItem} onPress={() => onSelect(item)}>
              <Image source={{ uri: item.flag }} style={styles.flag} />
              <Text style={styles.countryName}>{item.name}</Text>
              <Text style={styles.countryCode}>{item.code}</Text>
            </Pressable>
          )}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  flag: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  countryName: {
    flex: 1,
    fontSize: 16,
  },
  countryCode: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default CountrySelectorModal;
