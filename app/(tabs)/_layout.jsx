import { View, StyleSheet, Pressable } from 'react-native';
import { Tabs } from 'expo-router';
import React, { useContext } from 'react';
import Home from "../../assets/images/home.svg";
import Nearby from "../../assets/images/nearby.svg";
import Fav from '../../assets/images/favourite.svg';
import Message from "../../assets/images/message.svg";
import Profile from "../../assets/images/profile.svg";
import Active_Home from "../../assets/images/active_home.svg";
import Active_Nearby from "../../assets/images/active_nearby.svg";
import Active_Fav from '../../assets/images/active_favourite.svg';
import Active_Message from "../../assets/images/active_message.svg";
import Active_Profile from "../../assets/images/active_profile.svg";
import ThemeContext from '../../theme/ThemeContext';

const TabBarButton = ({ children, onPress, accessibilityState }) => {
  const { theme } = useContext(ThemeContext);
  const isSelected = accessibilityState.selected;
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.tabButton,
        isSelected ? styles.activeTabButton : null,
      ]}
    >
      <View style={[styles.iconContainer, isSelected ? styles.activeIconContainer : null]}>
        {children}
      </View>
    </Pressable>
  );
};

const TabsLayout = () => {
  const { theme, darkMode } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarButton: (props) => (
            <TabBarButton {...props} />
          ),
          tabBarStyle: [styles.tabBar, { backgroundColor: theme.background }],
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let IconComponent;
            switch (route.name) {
              case 'home':
                IconComponent = darkMode ? Active_Home : (focused ? Active_Home : Home);
                break;
              case 'nearby':
                IconComponent = darkMode ? Active_Nearby : (focused ? Active_Nearby : Nearby);
                break;
              case 'favourite':
                IconComponent = darkMode ? Active_Fav : (focused ? Active_Fav : Fav);
                break;
              case 'message':
                IconComponent = darkMode ? Active_Message : (focused ? Active_Message : Message);
                break;
              case 'profile':
                IconComponent = darkMode ? Active_Profile : (focused ? Active_Profile : Profile);
                break;
              default:
                IconComponent = null;
                break;
            }
            return IconComponent ? <IconComponent /> : null;
          },
        })}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
          }}
        />
        <Tabs.Screen
          name="nearby"
          options={{
            title: 'Nearby',
          }}
        />
        <Tabs.Screen
          name="favourite"
          options={{
            title: 'Favourite',
          }}
        />
        <Tabs.Screen
          name="message"
          options={{
            title: 'Message',
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
          }}
        />
      </Tabs>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  tabBar: {
    width: '100%',
    maxHeight: 85,
    height: '100%',
    borderTopWidth: 0,
    elevation: 0,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 7,
  },
  iconContainer: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    padding: 12,
    borderRadius: 48,
    alignItems: 'center',
    width: 48,
    height: 48,
  },
  activeIconContainer: {
    backgroundColor: '#FF007E',
  },
  activeTabButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabsLayout;
