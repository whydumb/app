import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { ThemeProvider } from '../theme/ThemeContext';
import { MessageProvider } from '../message_context';

const Root_layout = () => {
  return (
    <MessageProvider>
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='index' />
        <Stack.Screen name='(auth)' />
        <Stack.Screen name='(tabs)' />
        <Stack.Screen name='(screens)/matchPartner' />
        <Stack.Screen name='(screens)/profileDetails' />
        <Stack.Screen name='(screens)/chatScreen' />
        <Stack.Screen name='(screens)/audioCall' />
        <Stack.Screen name='(screens)/videoCall' />
      </Stack>
    </ThemeProvider>
  </MessageProvider>
  )
}

export default Root_layout;

const styles = StyleSheet.create({})
