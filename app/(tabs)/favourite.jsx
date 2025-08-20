import { StyleSheet, Text, View, StatusBar, Image, Pressable, Platform, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/dark_back.svg";
import { router } from "expo-router";
import { Favourite_data } from '../../Data/Data';
import EmptyWishlist from "../../assets/images/empty_heart3.svg"; 
import FilledWishlist from "../../assets/images/filled_heart2.svg"; 
import ThemeContext from '../../theme/ThemeContext';

const Favourite = () => {
  const { theme, darkMode } = useContext(ThemeContext);
  const [wishlist, setWishlist] = React.useState([]);
  const back = () => {
    router.push('home');
  };
  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(item => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };
  return (
    <View style={[styles.container, {backgroundColor:theme.background}]}>
      <StatusBar translucent barStyle={darkMode? 'light-content' : 'dark-content'} />
        <View style={styles.header}>
          <Pressable onPress={back} style={styles.back}>
         {darkMode? <Dark_back  /> : <Back />}
         </Pressable>
          <Text style={[styles.heading, {color:theme.color}]}>My Favourite</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrolls}>
        <View style={styles.stack_container}>
          {
           Favourite_data.map((d) => (
            <Pressable style={styles.stack} key={d.id}>
            <Image source={d.image} style={styles.image} />
            <Text style={styles.name}>{d.name},{d.age}</Text>
            <View style={styles.bottom_row}>
              <Pressable style={styles.column}>
                 <Text style={styles.close}>X</Text>
              </Pressable>
              <Pressable style={styles.column}>
              <Pressable style={styles.wishlistIcon} onPress={() => toggleWishlist(d.id)}>
                {wishlist.includes(d.id) ? <FilledWishlist /> : <EmptyWishlist />}
              </Pressable>
              </Pressable>
            </View>
          </Pressable>
           ))
          }
        </View>
        </ScrollView>
    </View>
  )
}

export default Favourite;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    paddingVertical: 20,
  },
  back: {
    position: 'absolute',
    left: 0,
    zIndex: 100,
  },
  heading: {
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'Montserrat_700Bold',
    color: '#000000',
    textTransform: 'capitalize',
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
  },
  scrolls: {
    flex: 1,
    flexGrow: 1,

  },
  stack_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: Platform.OS === 'web'? 'center' : 'space-between',
    gap: Platform.OS === 'web'? 20 : 0,
    flexWrap: 'wrap',
    marginTop: 20,
  },
  stack: {
    width: Platform.OS === 'web'? '24%' : '48%',
    height: Platform.OS === 'web'? 300 : '30%',
    marginTop: 20,
    position: 'relative',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Montserrat_700Bold',
    color: '#FFFFFF',
    textTransform: 'capitalize',
    position: 'absolute',
    bottom: 50,
    left: 10,
  },
  bottom_row: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(200, 200, 200, 0.5)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  column: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 25,
  },
  wishlistIcon: {
    width: 24,
    height: 24,
    marginBottom: -10,
  },
  close: {
    color: '#FFFFFF',
    fontSize: 18,
  }
})