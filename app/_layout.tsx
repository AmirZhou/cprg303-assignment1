import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

// Prevents the splash screen from auto-hiding before fonts are ready
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // Load custom fonts from local assets
  const [loadedFonts] = useFonts({
    'SF-Pro-Display-Regular': require('../assets/fonts/SF-Pro-Display-Regular.otf'),
    'SF-Pro-Display-Medium': require('../assets/fonts/SF-Pro-Display-Medium.otf'),
    'SF-Pro-Display-Semibold': require('../assets/fonts/SF-Pro-Display-Semibold.otf'),
    'SF-Pro-Display-Bold': require('../assets/fonts/SF-Pro-Display-Bold.otf'),
  });

  useEffect(() => {
    if (loadedFonts) SplashScreen.hideAsync(); // this is an side effect,  like in a stage ply you don't raise the curtain during rehearsal(render)
  }, [loadedFonts]);

  if (!loadedFonts) return null;

  return (
    <>
      <StatusBar style='light'></StatusBar>
      <Stack screenOptions={{ headerShown: false, headerStyle: {} }} initialRouteName="index">
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="data-sharing" options={{ presentation: 'modal', animation: 'slide_from_bottom', gestureEnabled: true, gestureDirection: 'vertical', headerShown: false }} />
        <Stack.Screen name="home" options={{ presentation: 'card', animation: 'slide_from_right' }} />
      </Stack>
    </>
  );

  // Joseph Mathew - Edited this layout file for CPRG303 Assignment 1

}

