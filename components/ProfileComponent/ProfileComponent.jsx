import { StyleSheet, Text, View, Image, ScrollView, Switch, Modal, Pressable, Platform } from 'react-native';
import React, { useContext, useState}  from 'react';
import ThemeContext from '../../theme/ThemeContext';
import Profiles from "../../assets/images/profile_image.png";
import { profile_data } from '../../Data/Data';
import { router } from 'expo-router';

const ProfileComponent = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [modalVisible, setModalVisible] = useState(false);
    const handleLogout = () => {
      setModalVisible(true);
    };
    const confirmLogout = () => {
      setModalVisible(false);
      router.push('login');
    };
    const cancelLogout = () => {
      setModalVisible(false);
    };
   
      const languages = ['English', 'Spanish', 'French'];

      const edit = () => {
        router.push('edit_restaurant');
    };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrolls}>
        <View style={styles.image_box}>
          <View style={styles.image_border}>
            <View style={styles.image_circle}></View>
          <Image source={Profiles} alt='image' style={styles.image} />
          </View>
          <Text style={[styles.name, {color:theme.color}]}>Vinx</Text>
          <Text style={[styles.position, {color:theme.color}]}>Manager</Text>
        </View>
        <View style={styles.containers}>
            <View style={styles.profile_data_container}>
                {profile_data.map((d) => (
                    <View key={d.id}>
                        <Pressable
                            style={styles.row}
                            onPress={() => {
                                if (d.name === 'Edit Restaurant') {
                                    edit();
                                }
                            }}
                        >
                            <View style={styles.row_left}>
                                <Pressable style={styles.circle}>
                                {darkMode ? d.dark_icon : d.icon}
                                </Pressable>
                                <View style={styles.profile_column}>
                                <Text style={[styles.row_text, { color: theme.color }]}>{d.name}</Text>
                              { d.text && <Text style={[styles.profile_text, {color:theme.color3}]}>{d.text}</Text>}
                                </View>
                            </View>
                            {d.name === 'Dark Mode' && (
                                <Switch
                                    trackColor={{ false: "#767577", true: "#FF6DB5" }}
                                    thumbColor={darkMode ? "#f4f3f4" : "#f4f3f4"}
                                    onValueChange={toggleTheme}
                                    value={darkMode}
                                    style={styles.switch}
                                />
                            )}
                        </Pressable>
                    </View>
                ))}
            </View>
        </View>
        <View>
      <View style={styles.logout_container}>
      <Pressable style={[styles.logout, {backgroundColor:'#FF007E'}]} onPress={handleLogout}>
        <Text style={[styles.logout_text, { color: '#FFFFFF' }]}>logout</Text>
      </Pressable>
      <Pressable style={[styles.logout, {backgroundColor: 'rgba(255, 109, 181, 0.35)'}]}>
        <Text style={[styles.logout_text, { color: '#FF007E' }]}>Delete Account</Text>
      </Pressable>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={cancelLogout}
      >
        <View style={styles.modalContainer}>
          <View style={[styles.modalView, { backgroundColor: theme.cardbg2 }]}>
            <Text style={styles.modalText}>Are you sure you want to logout?</Text>
            <View style={styles.modalButtons}>
              <Pressable style={styles.button} onPress={confirmLogout}>
                <Text style={styles.buttonText}>Yes</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonCancel]} onPress={cancelLogout}>
                <Text style={styles.buttonText}>No</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
      </ScrollView>
    </View>
    
  )
}

export default ProfileComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrolls: {
    flexGrow: 1,
  },
    image_box: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30,
      },
      image_border: {
        borderWidth: 2,
        borderColor: '#FF007E',
        borderTopRightRadius: 36,
        borderBottomRightRadius: 36,
        borderBottomLeftRadius: 36,
        paddingVertical: 20,
        paddingHorizontal: 15,
        position: 'relative',
      },
      image_circle: {
        backgroundColor: '#FF007E',
        width: 16,
        height: 16,
        borderWidth: 2,
        borderColor: '#ffffff',
        borderRadius: 50,
        position: 'absolute',
        top: 22,
        right: -5,
      },
      image: {
        width: 100,
        height: 100,
      },
      name: {
        fontSize: 20,
        lineHeight: 27,
        fontFamily: 'Montserrat_700Bold',
        color: '#000000',
        textTransform: 'capitalize',
        marginTop: 16,
      },
      position: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Lato_400Regular',
        color: '#000000',
        textTransform: 'capitalize',
      },
      dropdownContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    profile_data_container: {
        gap: 8,
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    row_left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    circle: {
        borderRadius: 50,
        backgroundColor: 'rgba(255, 109, 181, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height: 44,
    },
    row_text: {
        fontSize: 20,
        lineHeight: 30,
        fontFamily: 'Montserrat_700Bold',
        color: '#000000',
        textTransform: 'capitalize',
        marginLeft: 10, 
    },
    profile_text: {
        fontSize: 12,
        lineHeight: 22,
        fontFamily: 'Lato_700Bold',
        color: '#4C4C4C',
        marginLeft: 10,
    },
    switch: {
        width: 50,
    },
    logout_container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom:Platform.OS === 'web'? 0 : 50,
    },
    logout: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      height: 60,
      width: '49%',
    },
    logout_text: {
      fontSize: 16,
      lineHeight: 26,
      fontFamily: 'Montserrat_600SemiBold',
      color: '#000000',
      textTransform: 'capitalize',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalText: {
      fontSize: 18,
      marginBottom: 15,
      textAlign: 'center',
    },
    modalButtons: {
      flexDirection: 'row',
      gap: 10,
    },
    buttonCancel: {
      backgroundColor: '#757575',
    },
    button: {
      backgroundColor: '#FF007E',
      borderRadius: 5,
      paddingVertical: 5,
      paddingHorizontal: 10,
    },
})
