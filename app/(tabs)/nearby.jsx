import { StyleSheet, View, Image, StatusBar, Pressable } from 'react-native';
import React, { useContext } from 'react';
import Map from "../../assets/images/map.png";
import Dark_map from "../../assets/images/dark_map.png";
import Location from "../../assets/images/active_nearby.svg";
import Near1 from "../../assets/images/nearby1.png";
import Near2 from "../../assets/images/gallery2.png";
import Near3 from "../../assets/images/profiles1.png";
import Near4 from "../../assets/images/profiles3.png";
import Near5 from "../../assets/images/near5.png";
import ThemeContext from '../../theme/ThemeContext';
import NearbyComponent from '../../components/NearbyComponent/NearbyComponent';

const Nearby = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle={darkMode? 'light-content' : 'dark-content'} />
      <Image source={darkMode? Dark_map : Map} alt='image' style={styles.map} />
      <Pressable style={styles.location}>
        <Location />
      </Pressable>
      <Image source={Near1} style={styles.near1} alt='image' />
      <Image source={Near2} style={styles.near2} alt='image' />
      <Image source={Near3} style={styles.near3} alt='image' />
      <Image source={Near4} style={styles.near4} alt='image' />
      <Image source={Near5} style={styles.near5} alt='image' />
      <NearbyComponent />
    </View>
  )
}

export default Nearby;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    position: 'relative',
    flex: 1,
    width: '100%',
  },
  location: {
    backgroundColor: '#FF007E',
    width: 62,
    height: 62,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    borderRadius: 50,
    top: '40%',
    left: '42%',
  },
  near1: {
    position: 'absolute',
    right: 90,
    top: 95,
  },
  near2: {
    position: 'absolute',
    right: 34,
    top: 275,
    borderRadius: 50,
    width: 44,
    height: 44,
  },
  near3: {
    position: 'absolute',
    right: 33,
    bottom: 295,
    borderRadius: 50,
    width: 81,
    height: 81,
  },
  near4: {
    position: 'absolute',
    left: 37,
    bottom: 375,
    borderRadius: 50,
    width: 44,
    height: 44,
  },
  near5: {
    position: 'absolute',
    left: 37,
    top: 150,
    width: 62,
    height: 62,
  }
})
