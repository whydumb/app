import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, Image, ScrollView, Pressable, Platform } from "react-native";
import { paginationComponentData, gender_data, interest_data, looking_data, interest_data2, upload_photo_data, upload_photo_data2 } from "../../Data/Data";
import NameInput from '../NameInput/NameInput';
import ThemeContext from '../../theme/ThemeContext';
import CheckCircle from '../CheckCircle/CheckCircle';
import BirthYearPicker from '../BirthyearPicker/BirthyearPicker';
import * as ImagePicker from 'expo-image-picker'; 
import Plus from "../../assets/images/plus_circle.svg";
import ImageUpload from '../ImageUpload/ImageUpload';
import Input from '../Input/Input';
import { Lato_400Regular } from "@expo-google-fonts/lato";

const PaginationScreensComponent = ({ currentPage }) => {
    const { theme } = useContext(ThemeContext);
    const page = paginationComponentData[currentPage];
    const imageItem = upload_photo_data.find(d => d.id === 1);
    const uploadItems = upload_photo_data.filter(d => [2, 3].includes(d.id));
    const [activestack2, setActivestack2] = useState(looking_data[0].id);
    const [activeStacks, setActiveStacks] = useState([]);
    const [activetab, setActivetab] = useState(gender_data[0].id);
    const [activetab2, setActivetab2] = useState([]);

    const tab_press = (id) => {
        setActivetab(id);
    };

    const pressStack = (id) => {
      setActiveStacks((prev) => {
        if (prev.includes(id)) {
          return prev.filter((stackId) => stackId !== id);
        } else if (prev.length < 3) {
          return [...prev, id];
        }
        return prev;
      });
    };

    const press2 = (id) => {
        setActivestack2(id);
    };
    const press3 = (id) => {
      setActivetab2((prev) => {
        if (prev.includes(id)) {
          return prev.filter((item) => item !== id); 
        }else if (prev.length < 5) {
          return [...prev, id];
        }
        return prev;
      });
    };

    const pickImage = async () => {
        let result = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (result.granted) {
          let pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
    
          if (!pickerResult.cancelled) {
            console.log(pickerResult.uri);
          }
        } else {
          alert('Permission to access gallery was denied');
        }
      };

    const renderContent = () => {
      switch (page.id) {
        case 1:
          return <NameInput placeholder="Enter your name" />;
        case 2:
          return <Input placeholder="Enter your email" />;
        case 3:
          return (
            <View style={styles.tab_container}>
              {
              gender_data.map((d) => (
                <Pressable
                  style={[
                    [styles.tab,  { backgroundColor: theme.cardbg3 }],
                    activetab === d.id && styles.activetab,
                  ]}
                  onPress={() => tab_press(d.id)}
                  key={d.id}
                >
                  <Text style={styles.emoji}>{d.emoji}</Text>
                  <Text style={[styles.text, { color: theme.color }]}>{d.text}</Text>
                </Pressable>
              ))}
            </View>
          );
        case 4:
          return <BirthYearPicker />;
        case 5:
          return (
            <ScrollView 
            showsVerticalScrollIndicator={false} 
            contentContainerStyle={styles.scrollContent}
            style={styles.scrollView}>
            <View style={styles.stack_container}>
              {interest_data.map((d) => (
                <Pressable
                  style={[
                    styles.stack_circle,
                    activeStacks.includes(d.id) && styles.activestack,
                    { width: d.size, height: d.size },
                  ]}
                  key={d.id}
                  onPress={() => pressStack(d.id)}
                >
                  <Text
                    style={[
                      styles.stack_text,
                      activeStacks.includes(d.id) && styles.activestack_text,
                    ]}
                  >
                    {d.text}
                  </Text>
                </Pressable>
              ))}
            </View>
            </ScrollView>
          );
        case 6:
          return (
            <View style={styles.stack_container2}>
              {looking_data.map((d) => (
                <Pressable
                  style={[
                    [styles.stack2, { backgroundColor: theme.cardbg3 }],
                    activestack2 === d.id && styles.activestack2,
                  ]}
                  onPress={() => press2(d.id)}
                  key={d.id}
                >
                  <Text
                    style={[
                      [styles.stack_text2, { color: theme.color }],
                      activestack2 === d.id && [
                        styles.active_stack_text2,
                        { color: theme.color },
                      ],
                    ]}
                  >
                    {d.text}
                  </Text>
                  <CheckCircle checked={activestack2 === d.id} />
                </Pressable>
              ))}
            </View>
          );
          case 7:
            return (
              <View style={styles.tab_container2}>
                {interest_data2.map((d) => (
                  <Pressable
                    style={[
                      [styles.tab2, { backgroundColor: theme.cardbg3 }],
                      activetab2.includes(d.id) && styles.activetab2,
                    ]}
                    onPress={() => press3(d.id)}
                    key={d.id}
                  >
                    <Text style={styles.emoji2}>{d.emoji}</Text>
                    <Text style={[styles.tab_text2, { color: theme.color }]}>
                      {d.text}
                    </Text>
                  </Pressable>
                ))}
              </View>
            );
        case 8:
          return (
            <View style={styles.image_upload_container}>
              <View style={styles.image_upload_row}>
                {imageItem?.image && (
                  <View style={styles.image_upload_item}>
                    <Image source={imageItem.image} style={styles.image} />
                  </View>
                )}
                <View style={styles.column2}>
                  {uploadItems.map((d) => (
                    <View key={d.id} style={styles.imageUploadContainer2}>
                      <ImageUpload
                        text={d.text}
                        bordercolor={d.bordercolor}
                        borderwidth={d.borderwidth}
                        borderstyle={d.borderstyle}
                        onPress={pickImage}
                      />
                      <Pressable
                        style={styles.plusIcon}
                        onPress={pickImage}
                      >
                        <Plus />
                      </Pressable>
                    </View>
                  ))}
                </View>
              </View>
              <View style={styles.imagecontainer}>
        {upload_photo_data2.map((d) => (
          <View style={styles.row} key={d.id}>
            <View style={styles.imageUploadContainer}>
              <ImageUpload
                text={d.text}
                bordercolor={d.bordercolor}
                borderwidth={d.borderwidth}
                borderstyle={d.borderstyle}
                onPress={pickImage} 
              />
              {d.id !== 1 && (
                <Pressable style={styles.plusIcon2} onPress={pickImage}>
                  <Plus />
                </Pressable>
              )}
            </View>
          </View>
        ))}
      </View>
            </View>
          );
        default:
          return null;
      }
    };
  
    return (
      <View style={[styles.container, {backgroundColor:theme.background}]}>
        <View style={[styles.main_content, {backgroundColor:theme.background}]} key={page.id}>
          <Text style={[styles.heading, { color: theme.color }]}>{page.heading}</Text>
          <Text style={[styles.text, {color:theme.color5}]}>{page.text}</Text>
          {renderContent()}
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    main_content: {
      marginTop: 50,
      flex: 1,
    },
    heading: {
      fontSize: 26,
      fontFamily: 'Montserrat_800ExtraBold',
      textAlign: 'center',
    },
    text: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        textAlign: 'center',
    },
    tab_container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 50,
      
    },
    tab: {
      width: '48%',
      height: 110,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      gap: 5,
    },
    tab_text: {
      fontSize: 18,
      fontWeight: '500',
    },
    emoji: {
      fontSize: 30,
    },
    activetab: {
      borderWidth: 1,
      borderColor: '#F5386A',
      backgroundColor: 'transparent',
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    scrollView: {
      flex: 1, 
    },
    stack_container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: Platform.OS === 'web'? 'center' : 'space-between',
      alignItems: 'center',
      width: '100%',
      paddingVertical: 30,
    },
    stack_circle: {
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#EEEEEE',
      paddingHorizontal: 5,
      minWidth: Platform.OS === 'web'? '10%' : 0,
      minHeight: Platform.OS === 'web'? '20%' : 0,
    },
    stack_text: {
      textAlign: 'center',
      fontSize: 14,
      lineHeight: 24,
      fontFamily: 'Lato_400Regular',
    },
    activestack: {
      backgroundColor: '#F5386A',
    },
    activestack_text: {
      color: '#fff',
    },
    stack_container2: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
      gap: 20,
    },
    stack2: {
      width: '100%',
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 10,
      paddingHorizontal: 10,
    },
    stack_text2: {
      fontSize: 18,
      fontWeight: '500',
      color: 'black',
    },
    active_stack_text2: {
      fontSize: 18,
      fontWeight: '700',
    },
    activestack2: {
      borderWidth: 2,
      borderColor: '#F5386A',
      backgroundColor: 'transparent',
    },
    tab_container2: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent:Platform.OS === 'web'?'center' : 'flex-start',
      alignItems: 'center',
      marginTop: 50,
      gap: 8,
    },
    tab2: {
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 12,
      minWidth: Platform.OS === 'web'? '20%' : 70,
      gap: 5,
      marginVertical: 10,
    },
    tab_text2: {
      fontSize: 18,
      fontWeight: '500',
      color: 'black',
    },
    activetab2: {
      borderWidth: 1,
      borderColor: '#F5386A',
      backgroundColor: 'transparent',
    },
    image_upload_container: {
      marginTop: 20,
    },
    image_upload_row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image_upload_item: {
      width: '60%',
      height: 250,
      borderRadius: 10,
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 10,
    },
    column2: {
      gap: 20,
    },
    imageUploadContainer: {
      width: 90,
      height: 120,
      borderRadius: 10,
    },
    plusIcon: {
      position: 'absolute',
      top: '40%',
      left: '40%',
    },
    imagecontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: Platform.OS === 'web'? 'center' : null ,
      },
      row: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        maxWidth: 100,
      },
      imageUploadContainer2: {
        position: 'relative',
        width: 100, 
        height: 100, 
      },
      plusIcon2: {
        position: 'absolute',
        top: '45%',
        left: '60%',
        transform: [{ translateX: -12 }, { translateY: -12 }], 
      }
  });

export default PaginationScreensComponent;
