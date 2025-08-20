import { StyleSheet, Text, View, ScrollView, Image, Pressable, Platform } from 'react-native';
import React, { useContext, useState } from 'react';
import { profiles } from '../../Data/Data';
import Star from "../../assets/images/star.svg";
import EmptyWishlist from "../../assets/images/empty_heart2.svg"; 
import FilledWishlist from "../../assets/images/empty_heart3.svg";
import Button from '../Button/Button';
import { router } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';
import CustomSwiper from '../CustomSwiper/CustomSwiper';

const HomeComponent = () => {
  const { theme } = useContext(ThemeContext);
  const [wishlist, setWishlist] = useState([]);
  const [currentCardId, setCurrentCardId] = useState(1); 
  
  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(item => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const press = () => {
    router.push('(screens)/matchPartner');
  };
   
  return (
    <View style={styles.mainContainer}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}  contentContainerStyle={styles.scrollContent}>
        <View style={styles.row}>
          <View style={styles.box_container}>
            <Pressable style={styles.box}>
              <Text style={[styles.plus]}>+</Text>
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
      <View style={styles.swiperWrapper}>
        <CustomSwiper />
      </View>
      <View style={[styles.bottomContainer, { backgroundColor: theme.background }]}>
        <View style={styles.row2}>
          <Pressable style={[styles.circle, {backgroundColor:theme.color2}]}>
            <Text style={styles.x}>x</Text>
          </Pressable>
          <Pressable style={styles.wishlistIcon} onPress={() => toggleWishlist(currentCardId)}>
            {wishlist.includes(currentCardId) ? <FilledWishlist /> : <EmptyWishlist />}
          </Pressable>
          <Pressable style={[styles.circle, {backgroundColor:theme.color2}]}>
            <Star />
          </Pressable>
        </View>
        <Button buttonText="matched" onPress={press} width='100%' />
      </View>
    </View>
  )
}

export default HomeComponent;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    paddingBottom: 20,
  },
  scrollContent: {
    alignItems: 'center', 
  },
  box_container: {
    alignItems: 'center',
    justifyContent: 'center',
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
  
    borderColor: 'transparent',
  },
  name: {
    fontSize: 12,
    lineHeight: 22,
    fontFamily: 'Montserrat_700Bold',
    color: '#000000',
    textAlign: 'center',
  },
  swiperWrapper: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:Platform.OS === 'web'? 360 : 200,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
   marginBottom: 10,
   position: 'absolute',
   width: '100%',
   bottom: 0,
   zIndex: 100,
  },
  row2: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5,
    marginVertical: 24,
  },
  circle: {
    borderRadius: 50,
    
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  x: {
    fontSize: 22,
    color: '#FF007E',
  },
  wishlistIcon: {
    width: 66,
    height: 66,
    borderRadius: 50,
    backgroundColor: '#FF007E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
