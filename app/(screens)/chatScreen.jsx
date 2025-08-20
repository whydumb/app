import { StyleSheet, Text, View, Image, StatusBar, Platform, Pressable } from 'react-native';
import React, { useContext } from 'react';
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/dark_back.svg";
import Call from "../../assets/images/audio.svg";
import Dark_Call from "../../assets/images/dark_audio_icon.svg";
import Video from "../../assets/images/video.svg";
import Dark_Video from "../../assets/images/dark_video_icon.svg";
import Notification from "../../assets/images/msg_notification.svg";
import Dark_noti from "../../assets/images/dark_notification.svg";
import MessageContext from '../../message_context';
import { router } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';
import ChatScreenComponent from '../../components/ChatScreenComponent/ChatScreenComponent';

const ChatScreen = () => {
  const { theme, darkMode } = useContext(ThemeContext);
  const { selectedMessage } = useContext(MessageContext);

  if (!selectedMessage) {
    return <Text>Loading...</Text>; 
  }
  const audio = () => {
    router.push('(screens)/audioCall');
  };
  const video = () => {
    router.push('(screens)/videoCall');
  };
  const back = () => {
    router.push('message');
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <StatusBar translucent barStyle={darkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.header}>
        <View style={styles.header_left}>
          <Pressable onPress={back}>
            {darkMode ? <Dark_back /> : <Back />}
          </Pressable>
          <View style={styles.content}>
            <Image source={selectedMessage.image} style={styles.profile} />
            <Text style={[styles.name, {color:theme.color}]}>{selectedMessage.name}</Text>
          </View>
        </View>
        <View style={styles.header_right}>
          {darkMode ? <Dark_Call onPress={audio} /> : <Call onPress={audio} />}
          {darkMode ? <Dark_Video onPress={video} /> : <Video onPress={video} />}
          {darkMode ? <Dark_noti /> : <Notification />}
        </View>
      </View>
      <ChatScreenComponent />
    </View>
  );
}

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'web'? 10 : 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header_left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  header_right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  name: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
