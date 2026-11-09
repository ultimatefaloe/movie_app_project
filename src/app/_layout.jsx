import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import "./global.css";

SplashScreen.setOptions({
  duration: 2000,
  fadeInDuration: 500,
  fadeOutDuration: 500,
  fade: true,
});

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
