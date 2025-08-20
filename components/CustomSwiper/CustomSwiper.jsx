import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, Platform } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { swipper_data } from '../../Data/Data';
import { router } from "expo-router";
import Facebook from "../../assets/images/facebook2.svg";
import Insta from "../../assets/images/insta.svg";

const CustomSwiper = () => {
  console.log('CustomSwiper is rendered');
  console.log('Swipper Data Length:', swipper_data.length);
  const uniqueData = Array.from(new Set(swipper_data.map(card => card.id)));
  console.log('Unique Data Length:', uniqueData.length);
  swipper_data.forEach(card => console.log('Card ID:', card.id));

  return (
    <View style={styles.container}>
      <Swiper
        cards={swipper_data}
        infinite={true}
        renderCard={(card, index) => {
          if (!card) return <View key={`no-card-${index}`}><Text>No more cards</Text></View>;

          const cardKey = `${card.id}-${index}-${Math.random().toString(36).substr(2, 9)}`;
          console.log('Render Card Key:', cardKey); // Debugging info

          return (
            <Pressable
              key={cardKey}
              style={styles.card}
              onPress={() => router.push('/(screens)/profileDetails')}
            >
              <Image source={card.image} style={styles.image} />
              <View style={styles.cardContent}>
                <View style={styles.content_left}>
                  <Text style={styles.cardText}>{card.name}</Text>
                  <Text style={styles.cardSubText}>{card.position}</Text>
                </View>
                <View style={styles.content_right}>
                  <Facebook />
                  <Insta />
                </View>
              </View>
            </Pressable>
          );
        }}
        onSwiped={(index) => console.log('Swiped index:', index)}
        onSwipedAll={() => console.log('All cards swiped')}
        cardIndex={0}
        backgroundColor="transparent"
        stackSize={3}
        containerStyle={styles.swiperContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 520,
    height: Platform.OS === 'web'? 800 : 400,
  },
  swiperContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: Platform.OS === 'web'? 800 : 400,
  },
  card: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    height: Platform.OS === 'web'? 430 : 400,
    marginRight: Platform.OS === 'web'? -30 : 0,
  },
  image: {
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: Platform.OS === 'web'? '35%' : '100%',
    height: Platform.OS === 'web'? 400 : 450,
    position: 'relative',
  },
  cardContent: {
    position: 'absolute',
    bottom: Platform.OS === 'web'? 20 : 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Platform.OS === 'web'? '30%' : '80%',
  },
  content_right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cardText: {
    fontSize: 20,
    lineHeight: 30,
    fontFamily: 'Montserrat_700Bold',
    color: '#ffffff',
  },
  cardSubText: {
    fontSize: 12,
    lineHeight: 22,
    fontFamily: 'Lato_400Regular',
    color: '#ffffff',
  },
});

export default CustomSwiper;
