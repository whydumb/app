import React, { useContext, useState } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import Pagination from '../../components/Pagination/Pagination';
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/dark_back.svg";
import Button from '../../components/Button/Button';
import PaginationScreensComponent from '../../components/PaginationScreensComponent/PaginationScreensComponent';
import { router } from 'expo-router';
import ThemeContext from '../../theme/ThemeContext';

const PaginationScreens = () => {
  const { theme, darkMode } = useContext(ThemeContext);
  const [activePage, setActivePage] = useState(0);
  const totalPages = 8;

  const handleNext = () => {
    if (activePage < totalPages - 1) {
      setActivePage(activePage + 1);
    } else if (activePage === 7) {
      router.push('home');
    }
  };

  const handlePrevious = () => {
    if (activePage > 0) {
      setActivePage(activePage - 1);
    } else if (activePage === 0) {
      router.push('verification');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.column, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        {darkMode ? <Dark_back onPress={handlePrevious} style={styles.back} /> : <Back onPress={handlePrevious} style={styles.back} />}
        <View style={styles.pagination_container}>
        <Pagination 
          activePageIndex={activePage} 
          totalPages={totalPages} 
          dotWidth={Platform.OS === 'web'? '8%' : 29}
          dotHeight={6}
        />
        </View>
      </View>
      <View style={[styles.contentContainer, {backgroundColor:theme.background}]}>
        <PaginationScreensComponent currentPage={activePage} />
      </View>
      </View>
      <View style={[styles.buttonContainer, {backgroundColor:theme.background}]}>
        <Button buttonText="continue" onPress={handleNext} disabled={activePage === totalPages - 1} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    paddingVertical: 10,
  },
  back: {
    position: 'absolute',
    left: 0,
    zIndex: 100,
  },
  pagination_container: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    marginLeft: Platform.OS === 'web'? 0 : 10,
  },
  contentContainer: {
    flex: 1,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: Platform.OS === 'web'? '2%' : '12%',
  },
});

export default PaginationScreens;
