import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {Stack} from "expo-router";

const Authlayout = () => {
  return (
    <Stack>
        <Stack.Screen name='login' options={{headerShown: false}} />
        <Stack.Screen name='signup' options={{headerShown: false}} />
        <Stack.Screen name='mobile' options={{headerShown: false}} />
        <Stack.Screen name='verification' options={{headerShown: false}} />
        <Stack.Screen name='paginationScreens' options={{headerShown: false}} />
    </Stack>
  )
}

export default Authlayout;

const styles = StyleSheet.create({})