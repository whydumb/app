import React, { useState, useRef, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import ThemeContext from '../../theme/ThemeContext';

const ITEM_HEIGHT = 50;

const BirthYearPicker = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const scrollViewRef = useRef(null);
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  useEffect(() => {
    if (scrollViewRef.current) {
      const initialIndex = years.indexOf(selectedYear);
      scrollViewRef.current.scrollTo({
        y: initialIndex * ITEM_HEIGHT,
        animated: false,
      });
    }
  }, [selectedYear]);

  const handleMomentumScrollEnd = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / ITEM_HEIGHT);
    setSelectedYear(years[index]);
  };

  const handlePress = (year) => {
    setSelectedYear(year);
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: years.indexOf(year) * ITEM_HEIGHT,
        animated: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        onMomentumScrollEnd={handleMomentumScrollEnd}
        contentContainerStyle={styles.scrollViewContent}
      >
        {years.map((year, index) => (
          <Pressable
            key={index}
            style={[
              styles.yearContainer,
              selectedYear === year && styles.selectedYear
            ]}
            onPress={() => handlePress(year)}
          >
            <Text
              style={[
                styles.yearText,
                selectedYear === year && styles.selectedYearText
              ]}
            >
              {year}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default BirthYearPicker;

const styles = StyleSheet.create({
  container: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  scrollViewContent: {
    paddingVertical: ITEM_HEIGHT * 2, 
    justifyContent: 'center',
  },
  yearContainer: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  selectedYear: {
    backgroundColor: '#FF007E',
    borderRadius: 10,
    width: '100%',
    paddingHorizontal: 100,
  },
  yearText: {
    fontSize: 20,
    lineHeight: 30,
    fontFamily: 'Lato_400Regular',
    color: '#BABABA',
  },
  selectedYearText: {
    color: '#FFFFFF',
  },
});
