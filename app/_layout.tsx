import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loadedFonts] = useFonts({
    'SFPro-Regular': require('./assets/fonts/SF-Pro-Display-Regular.otf'),
    'SFPro-Bold': require('./assets/fonts/SF-Pro-Display-Bold.otf'),
    'SFPro-Text': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
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
}
