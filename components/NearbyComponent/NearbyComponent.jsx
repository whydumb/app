import { StyleSheet, Text, View, ScrollView, StatusBar, Pressable } from 'react-native';
import React, { useContext } from 'react';
import { nearby_data } from '../../Data/Data';
import Location from "../../assets/images/grey_location.svg";
import EmptyWishlist from "../../assets/images/empty_heart.svg"; 
import DarkEmptyHeart from "../../assets/images/empty_heart2.svg";
import FilledWishlist from "../../assets/images/filled_heart2.svg"; 
import ThemeContext from '../../theme/ThemeContext';

const NearbyComponent = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  const [wishlist, setWishlist] = React.useState([]);

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(item => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle={darkMode? 'light-content' : 'dark-content'} />
      <ScrollView style={styles.stack_container} horizontal={true}>
        {nearby_data.map((d) => (
          <Pressable style={styles.stack} key={d.id} onPress={() => toggleWishlist(d.id)}>
            <View style={styles.left}>
              <Text style={[styles.name, {color:theme.color}]}>{d.name}</Text>
              <View style={styles.location}>
                <Location />
                <Text style={[styles.location_text, {color:theme.color3}]}>{d.location}</Text>
              </View>
            </View>
            <View style={styles.wishlist}>
              <Pressable style={styles.wishlistIcon} onPress={() => toggleWishlist(d.id)}>
                {wishlist.includes(d.id) ? <FilledWishlist /> : (darkMode? <DarkEmptyHeart /> : <EmptyWishlist />)}
              </Pressable>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  )
}

export default NearbyComponent;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    padding: 10,
    borderRadius: 10,
  },
  stack_container: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },
  stack: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'rgba(255, 109, 181, 0.21)',
    borderRadius: 8,
    marginRight: 20,
  },
  left: {
    flexDirection: 'column',
    gap: 4,
  },
  name: {
    fontSize: 18,
    lineHeight: 28,
    fontFamily:  'Montserrat_700Bold',
    color: '#000000',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location_text: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Lato_400Regular',
    color: '#474747',
  },
  wishlist: {
    padding: 10,
  },
  wishlistIcon: {
    width: 24,
    height: 24,
  },
});
