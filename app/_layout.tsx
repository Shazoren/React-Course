import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { useColorScheme } from '@/components/useColorScheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '@/constants/Colors';

export {
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const [currentTheme, setCurrentTheme] = useState(Colors.light);

  useEffect(() => {
    getThemeName().then((tn: keyof typeof Colors) =>{
      setCurrentTheme(Colors[tn])
    })  
  })

  return (
    
    <ThemeProvider value={currentTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </ThemeProvider>
  );
}

async function storeThemeName(value: string) {
  try {
    await AsyncStorage.setItem('themeName', value)
  } catch (e) {
  }
}

async function getThemeName(): Promise<keyof typeof Colors> {
  try {
    const value = await AsyncStorage.getItem('themeName')
    if(value !== null) {
      return value as keyof typeof Colors;
    } else { return 'light'}
  } catch(e) {
    throw new Error(); 
  }
}