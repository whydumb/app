import React, { useContext } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import ThemeContext from '../../theme/ThemeContext';

const { width: screenWidth } = Dimensions.get('window');

const Pagination = ({ 
  activePageIndex, 
  totalPages, 
  dotWidth, 
  dotHeight, 
  dotBackgroundColor, 
  activeDotBackgroundColor 
}) => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);

  const defaultDotStyle = {
    width: dotWidth || 10,
    height: dotHeight || 10,
    borderRadius: 50,
    backgroundColor: dotBackgroundColor || '#D9D9D9',
    marginHorizontal: 4,
  };

  const defaultActiveDotStyle = {
    backgroundColor: activeDotBackgroundColor || '#FF007E',
    width: dotWidth || 10,
    height: (dotHeight || 10),
  };

  return (
    <View style={styles.paginationContainer}>
      {Array.from({ length: totalPages }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            defaultDotStyle,
            activePageIndex === index && defaultActiveDotStyle
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  dot: {
    borderRadius: 50,
    marginHorizontal: 4,
  },
});

export default Pagination;
