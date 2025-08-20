import React, { useCallback, useContext } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import ThemeContext from "../theme/ThemeContext";
import { Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold, Montserrat_400Regular, Montserrat_800ExtraBold } from "@expo-google-fonts/montserrat";
import OnboardComponent from "../components/OnboardComponent/OnboardComponent";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { theme, darkMode } = useContext(ThemeContext);
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Montserrat_700Bold,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_400Regular,
    Montserrat_800ExtraBold,
    Lato_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={[styles.safearea, { backgroundColor: theme.background }]} onLayout={onLayoutRootView}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={darkMode ? "light-content" : "dark-content"}
      />
      <OnboardComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
  }
});
