import { StyleSheet, Text, View, Image, Pressable, Platform } from 'react-native';
import React, { useContext, useState } from 'react';
import { interest_data2 } from '../../Data/Data';
import Button from '../Button/Button';
import Follow from "../../assets/images/follower.svg";
import Dark_follow from "../../assets/images/dark_follow.svg";
import Location from "../../assets/images/location.svg";
import ThemeContext from '../../theme/ThemeContext';
import Gallery from "../../assets/images/Swipper2.png";
import Gallery1 from "../../assets/images/gallery1.png";
import Gallery2 from "../../assets/images/gallery2.png";
import Gallery3 from "../../assets/images/gallery3.png";
import X from "../../assets/images/x.svg";
import Heart from "../../assets/images/white_heart.svg";

const ProfileDetailsComponent = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [isExpanded, setIsExpanded] = useState(false);
    const [activetab, setActivetab] = useState([interest_data2[0].id]);
    const press = (id) => {
      setActivetab((prev) => {
        if(prev.includes(id)) {
          return prev.filter((tabId) => tabId !== id);
        }
        else if(prev.length < prev.length + 1) {
          return [...prev, id];
        }
        return prev;
      })
    }
  
    
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const fullText = "My name is Jessica Parker and I enjoy meeting new people and finding ways to help them have an uplifting experience. I enjoy reading..My name is Jessica Parker and I enjoy meeting new people and finding ways to help read more";
  const truncatedText = fullText.split(' ').slice(0, 30).join(' ') + '...';

  return (
    <View>
      <View style={styles.button_container}>
        <Button buttonText="Follow" width='49%' backgroundColor={theme.background2} textColor={theme.color} />
        <Button buttonText="Message" width='49%' backgroundColor={theme.background2} textColor={theme.color} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.content_left}>
            <Text style={[styles.name, {color:theme.color}]}>Jessica Parker, 23</Text>
            <Text style={[styles.proffesion, {color:theme.color}]}>Professional model</Text>
        </View>
        <View style={styles.content_right}>
          {darkMode? <Dark_follow /> : <Follow />}
            <Text style={[styles.followers, {color:theme.color}]}>63K Followers</Text>
        </View>
      </View>
      <View style={styles.contentContainer2}>
        <View style={styles.content_left}>
            <Text style={[styles.name, {color:theme.color}]}>Location</Text>
            <Text style={[styles.proffesion, {color:theme.color}]}>Chicago, IL United States</Text>
        </View>
        <Pressable style={styles.location}>
            <Location />
            <Text style={styles.km}>1 km</Text>
        </Pressable>
        </View>
        <View style={styles.container}>
      <Text style={[styles.heading, {color:theme.color}]}>About</Text>
      <Text style={[styles.text, {color:theme.color3}]}>
        {isExpanded ? fullText : truncatedText}
      </Text>
      <Pressable onPress={toggleExpanded}>
        <Text style={styles.readMore}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </Text>
      </Pressable>
      <Text style={[styles.heading, {color:theme.color}]}>Interest</Text>
      <View style={styles.tab_container}>
      {
        interest_data2.map((d) => (
          <Pressable style={[[styles.tab, {backgroundColor:theme.cardbg3}], activetab.includes(d.id) && styles.activetab]} onPress={() => {press(d.id)}} key={d.id}>
            <Text style={styles.emoji}>{d.emoji}</Text>
            <Text style={[styles.tab_text, {color:theme.color}]}>{d.text}</Text>
          </Pressable>
        ))
      }
    </View>
    </View>
    <View>
         <View style={styles.header}>
            <Text style={[styles.heading, {color:theme.color}]}>Gallery</Text>
            <Text style={styles.see}>See all</Text>
         </View>
         <View style={styles.row}>
            <Image source={Gallery} style={styles.image} />
            <View style={styles.column}>
                <Image source={Gallery1} style={styles.image1} />
                <Image source={Gallery2} style={styles.image1} />
            </View>
            <Image source={Gallery3} style={styles.image} />
         </View>
    </View>
    <View style={styles.bottomContent}>
      <View style={[styles.button_row, {backgroundColor:theme.cardbg3}]}>
        <X />
        <Pressable style={styles.circle}>
            <Heart />
        </Pressable>
        <Pressable>
        <Text style={styles.hand}>👋</Text>
        </Pressable>
      </View>
    </View>
    </View>
  )
}

export default ProfileDetailsComponent;

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
      },
    button_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    name: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Montserrat_700Bold',
        color: '#000000',
        textTransform: 'capitalize',
    },
    profession: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        color: '#333333',
    },
    contentContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 30,
    },
    contentContainer2: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 30,
    },
    content_right: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 5,
    },
    followers: {
        fontSize: 12,
        lineHeight: 14,
        fontFamily: 'Montserrat_400Regular',
        color: '#000000',
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        borderRadius: 7,
        padding: 10,
        justifyContent: 'center',
        backgroundColor: '#FFE6F2',
    },
    km: {
        fontSize: 12,
        lineHeight: 18,
        fontFamily: 'Lato_400Regular',
        color: '#FF007E',
    },
      heading: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Montserrat_700Bold',
        color: '#000000',
      },
      text: {
        fontSize: 14,
        lineHeight: 21,
        fontFamily: 'Lato_400Regular',
        color: '#333333',
      },
      readMore: {
        color: '#FF007E',
        marginTop: 5,
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        marginBottom: 20,
      },
      tab_container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 9,
        marginVertical: 20,
      },
      tab: {
        borderRadius: 5,
        backgroundColor: '#EEEEEE',
        padding: 10,
        flexDirection: 'row',
        alignItems:'center',
        gap: 3,
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'transparent',
      },
      tab_text: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Lato_700Bold',
        color: '#000000',
        textTransform: 'capitalize',
      },
      activetab: {
        borderColor: '#FF007E',
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    heading: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Montserrat_700Bold',
        color: '#000000',
        textTransform: 'capitalize',
    },
    see: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        color: '#FF007E',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 15,
    },
    image: {
        width:Platform.OS === 'web'? '32%' : '31%',
        height: Platform.OS === 'web'? '100%' : 200,
        borderRadius: 5,
    },
    column: {
        gap: 10,
        justifyContent: 'space-between',
    },
    image1: {
        width:Platform.OS === 'web'? 330 : 110,
        height: 200,
        borderRadius: 5,
    },
    button_row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 280,
        paddingHorizontal: 33,
        paddingVertical: 10,
        backgroundColor: '#f6f6f6',
        borderRadius: 50,
        width: '100%',
    },
    circle: {
        backgroundColor: '#FF3578',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    hand: {
        fontSize: 24,
    },
    bottomContent: {
      alignItems: 'center',
      marginBottom: Platform.OS === 'web'? '2%' : '10%',
      marginTop: 30,
    }
})