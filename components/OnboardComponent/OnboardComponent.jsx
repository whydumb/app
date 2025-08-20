import React, { useState, useRef, useEffect, useCallback, useContext } from "react";
import { View, StyleSheet, Dimensions, ScrollView, Platform, Animated, Image, Pressable } from "react-native";
import { pages } from "../../Data/Data";
import * as SplashScreen from 'expo-splash-screen';
import ThemeContext from "../../theme/ThemeContext";
import Arrow from '../../assets/images/button_arrow.svg';
import { router } from "expo-router";
import Pagination from '../Pagination/Pagination';

const { width } = Dimensions.get('window');
SplashScreen.preventAutoHideAsync();

export default function OnboardComponent() {
  const { theme } = useContext(ThemeContext);
  const swiperRef = useRef(null);
  const totalPages = pages.length;
  const [activePageIndex, setActivePageIndex] = useState(0);

  const headingOpacity = useRef(new Animated.Value(1)).current;
  const descriptionOpacity = useRef(new Animated.Value(1)).current;
  const paginationOpacity = useRef(new Animated.Value(1)).current;

  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  const animateContent = useCallback(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(headingOpacity, { toValue: 0, duration: 200, useNativeDriver: true }),
        Animated.timing(descriptionOpacity, { toValue: 0, duration: 200, useNativeDriver: true }),
      ]),
      Animated.parallel([
        Animated.timing(headingOpacity, { toValue: 1, duration: 200, useNativeDriver: true }),
        Animated.timing(descriptionOpacity, { toValue: 1, duration: 200, useNativeDriver: true }),
      ])
    ]).start();
  }, [headingOpacity, descriptionOpacity]);

  useEffect(() => {
    animateContent();
  }, [activePageIndex, animateContent]);

  const handleImageScroll = (event) => {
    const pageIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActivePageIndex(pageIndex);
  };

  const handleNextPress = () => {
    const nextIndex = Math.min(activePageIndex + 1, totalPages - 1);
    swiperRef.current.scrollTo({ x: nextIndex * width, animated: true });
    setActivePageIndex(nextIndex);
  };

  const handleCreateAccountPress = () => {
    router.push('login'); 
  };

  return (
      <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={swiperRef}
        onScroll={handleImageScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{ width: width * totalPages }}
        style={{ flex: 1 }}
      >
        {pages.map((page, index) => (
          <View key={index} style={[styles.page, { width }]}>
            <View style={index === 1 ? styles.imagecontainer2 : styles.imageContainer}>
              <Image source={page.image} alt="images"   style={[
    styles.image, 
    index === 1 && styles.Img2, 
    index === 2 && styles.img3
  ]}  />
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.onboard_content}>
        <Animated.View style={{ opacity: paginationOpacity }}>
          <Pagination activePageIndex={activePageIndex} totalPages={pages.length} />
        </Animated.View>
        <Animated.Text style={[styles.heading, { color: theme.color }, { opacity: headingOpacity }]}>
          {pages[activePageIndex].heading}
        </Animated.Text>
        <Animated.Text style={[styles.description, { opacity: descriptionOpacity, color:theme.color3 }]}>
          {pages[activePageIndex].text}
        </Animated.Text>
        <View style={styles.page_button_container}>
        {activePageIndex === totalPages - 1 ? (
          <View>
            <Pressable style={styles.nextButton} onPress={handleCreateAccountPress}>
              <Arrow />
            </Pressable>
          </View>
        ) : (
          <Pressable onPress={handleNextPress} style={styles.nextButton}>
            <Arrow />
          </Pressable>
        )}
      </View>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
  page: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  imagecontainer2: {
    alignItems: 'center',
  },
  image: {
    height: Platform.OS === 'web'? 430 : '80%',
    width: Platform.OS === 'web'? 350 : '100%' ,
    marginTop: Platform.OS === 'web'? 3 : '8%',
  },
  Img2: {
    height: 270,
    width: 330,
    marginTop: "30%",
  },
  img3: {
    height: Platform.OS === 'web'? 400: '75%',
    width: Platform.OS === 'web'? 350 : '100%',
  },
  onboard_content: {
    position: 'absolute',
    backgroundColor: 'transparent',
    bottom: Platform.OS === 'web'? 0 : 20,
    width: '100%',
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 24,
    lineHeight: 34,
    color: '#000000',
    textAlign: 'center',
    paddingTop: 0,
    maxWidth: 222,
  },
  description: {
    fontSize: 14,
    lineHeight: 24,
    color: '#4C4C4C',
    textAlign: 'center',
    fontFamily: 'Lato_400Regular',
    paddingTop: 10,
  },
  page_button_container: {
    paddingTop: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: '#FF007E',
    paddingHorizontal: 20,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 68,
    height: 68,
    borderRadius: 50,
  }
});
