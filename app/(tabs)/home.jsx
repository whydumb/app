import { StyleSheet, Text, View, Image, ScrollView, StatusBar } from 'react-native';
import React, { useContext, useState } from 'react';
import profile from "../../assets/images/head_img.png";
import Notification from "../../assets/images/notification.svg";
import Dark_notification from "../../assets/images/dark_notification.svg";
import ThemeContext from '../../theme/ThemeContext';
import FilterComponent from '../../components/FilterComponent/FilterComponent';
import HomeComponent from '../../components/HomeComponent/HomeComponent';

const Home = () => {
  const { theme, darkMode } = useContext(ThemeContext);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar translucent barStyle={darkMode ? 'light-content' : 'dark-content' } />
      <View style={styles.header}>
        <View style={styles.head_left}>
          <Image source={profile} alt="image" style={styles.profile} />
          <View style={styles.heading_content}>
            <Text style={[styles.heading, { color: theme.color }]}>Aliana, 21</Text>
            <Text style={[styles.heading_text, { color: theme.color }]}>Designer</Text>
          </View>
        </View>
        {darkMode ? <Dark_notification /> : <Notification />}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FilterComponent setModalVisible={setModalVisible} modalVisible={modalVisible} /> 
        <HomeComponent />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  head_left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  profile: {
    width: 66,
    height: 61,
  },
  heading: {
    fontSize: 20,
    lineHeight: 30,
    fontFamily: 'Montserrat_700Bold',
    color: '#000000',
    textTransform: 'capitalize',
  },
  heading_text: {
    fontSize: 12,
    lineHeight: 22,
    fontFamily: 'Lato_400Regular',
    color: '#000000',
  },
});
