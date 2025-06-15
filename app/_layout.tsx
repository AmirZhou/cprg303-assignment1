import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
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
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="data-sharing" />
      <Stack.Screen name="home" />
    </Stack>
  );

  // Joseph Mathew - Edited this layout file for CPRG303 Assignment 1

}

