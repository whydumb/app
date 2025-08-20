import { StyleSheet, View, Modal, Text, Pressable, Platform, Dimensions } from 'react-native';
import React, { useContext, useState, useCallback, useRef } from 'react';
import Input from "../Input/Input";
import Arrow from "../../assets/images/right_arrow.svg";
import Slider from '@react-native-community/slider';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { modal_tab_data } from '../../Data/Data';
import Search from "../../assets/images/search.svg";
import Dark_search from "../../assets/images/dark_search.svg";
import Filter from "../../assets/images/filter.svg";
import Dark_filter from "../../assets/images/dark_filter.svg";
import ThemeContext from '../../theme/ThemeContext';
import Button from '../Button/Button';
import { debounce } from 'lodash';

const screenWidth = Dimensions.get('window').width;

const FilterComponent = ({ setModalVisible, modalVisible }) => {
  const { theme, darkMode } = useContext(ThemeContext);
  const [activetab, setActivetab] = useState(modal_tab_data[0].id);
  const [distance, setDistance] = useState(40);
  const [ageRange, setAgeRange] = useState([20, 28]);
  
  const sliderValueRef = useRef(distance / 100); // to store the slider value to avoid jittering

  // Create a debounced version of the distance change handler
  const handleDistanceChange = useCallback(debounce((newDistance) => {
    // Directly update the distance state after debounce
    setDistance(Math.floor(newDistance * 100));
  }, 100), []); // 100ms debounce

  const handleAgeRangeChange = useCallback((newAgeRange) => {
    setAgeRange(newAgeRange);
  }, []);

  const press = useCallback((id) => {
    setActivetab(id);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.input_container}>
          <Input placeholder="Search" borderColor="transparent" backgroundColor={darkMode ? 'rgba(190, 190, 190, 0.3)' : '#EEEEEE'} />
          {darkMode ? <Dark_search style={styles.search} /> : <Search style={styles.search} />}
        </View>
        <Pressable style={styles.filter} onPress={() => setModalVisible(true)}>
          {darkMode ? <Dark_filter /> : <Filter />}
        </Pressable>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={[styles.modalOverlay, { backgroundColor: theme.overlay }]}>
          <View style={[styles.modalContainer, { backgroundColor: theme.background }]}>
            <View style={styles.header}>
              <Text style={[styles.modalText, { color: theme.color }]}>Filters</Text>
              <Pressable
                style={[styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Clear</Text>
              </Pressable>
            </View>
            <View style={styles.content}>
              <Text style={[styles.heading, { color: theme.color }]}>Interested in</Text>
              <View style={styles.tab_container}>
                {modal_tab_data.map((d) => (
                  <Pressable
                    style={StyleSheet.flatten([
                      styles.tab,
                      activetab === d.id && styles.activetab,
                      d.id === 1 && styles.firstTab,
                      d.id === 3 && styles.lastTab,
                    ])}
                    key={d.id}
                    onPress={() => press(d.id)}
                  >
                    <Text style={[styles.tab_text, activetab === d.id && styles.active_tab_text]}>
                      {d.text}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>
            <View>
              <View style={styles.input_container2}>
                <Text style={[styles.heading, { color: theme.color }]}>Location</Text>
                <Input placeholder="Chicago, Us" width="100%" />
                <Arrow style={styles.arrow} />
              </View>
              <View style={styles.container}>
                <View style={styles.head_row}>
                  <Text style={[styles.heading, { color: theme.color }]}>Distance</Text>
                  <Text style={[styles.value, { color: theme.color }]}>{distance}km</Text>
                </View>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={1}
                  minimumTrackTintColor="#FF007E"
                  maximumTrackTintColor={darkMode ? '#ffffff' : '#000000'}
                  thumbTintColor="#FF007E"
                  thumbStyle={styles.thumb}
                  onValueChange={handleDistanceChange}
                  value={sliderValueRef.current} // Control the slider with ref
                  onSlidingComplete={(value) => {
                    sliderValueRef.current = value; // Update ref when sliding is complete
                  }}
                />
              </View>
              <View style={styles.head_row}>
                <Text style={[styles.heading, { color: theme.color }]}>Age</Text>
                <Text style={[styles.value, { color: theme.color }]}>{ageRange[0]}-{ageRange[1]}</Text>
              </View>
              <View style={styles.sliderContainer}>
                <MultiSlider
                  values={ageRange}
                  min={0}
                  max={100}
                  step={1}
                  sliderLength={screenWidth - 70}
                  onValuesChange={handleAgeRangeChange}
                  selectedStyle={{ backgroundColor: "#FF007E", width: "100%" }}
                  unselectedStyle={{ backgroundColor: "#f6f6f6", width: "100%" }}
                  customMarker={() => <View style={styles.thumb} />}
                />
              </View>
              <View style={styles.button_box}>
                <Button buttonText="continue" onPress={() => setModalVisible(!modalVisible)} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default React.memo(FilterComponent);

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  input_container: {
    position: 'relative',
    marginBottom: 30,
    width: Platform.OS === 'web' ? '90%' : '86%',
  },
  input_container2: {
    position: 'relative',
    marginBottom: 30,
    width: '100%',
  },
  search: {
    position: 'absolute',
    bottom: 15,
    right: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  filter: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'web' ? -20 : 0,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'relative',
  },
  modalText: {
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'Montserrat_700Bold',
    color: '#000000',
    textTransform: 'capitalize',
    textAlign: 'center',
    position: 'absolute',
    left: '35%',
  },
  textStyle: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Lato_400Regular',
    color: '#FF007E',
    textAlign: 'right',
  },
  tab_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 16,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    width: '100%',
  },
  tab: {
    height: 60,
    width: '33.5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab_text: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Lato_400Regular',
    color: '#000000',
    textTransform: 'capitalize',
  },
  activetab: {
    backgroundColor: '#FF007E',
  },
  firstTab: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  lastTab: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  active_tab_text: {
    color: '#ffffff',
  },
  head_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    marginTop: 20,
  },
  heading: {
    fontSize: 18,
    lineHeight: 28,
    fontFamily: 'Montserrat_700Bold',
    color: '#000000',
    textTransform: 'capitalize',
  },
  arrow: {
    position: 'absolute',
    bottom: 25,
    right: 20,
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FF007E',
  },
  slider: {
    marginTop: 20,
  },
  value: {
    fontSize: 16,
    fontFamily: 'Montserrat_400Regular',
    color: '#000000',
  },
  button_box: {
    marginTop: 30,
  },
  sliderContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
