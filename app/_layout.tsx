import { useFonts } from "expo-font";
import { Stack, SplashScreen } from "expo-router";
import "./global.css";
import { useEffect } from "react";

export default function RootLayout() {
  const [areFontsLoaded] = useFonts({
    "Rubik-Bold": require("@/assets/fonts/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("@/assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-Light": require("@/assets/fonts/Rubik-Light.ttf"),
    "Rubik-Medium": require("@/assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Regular": require("@/assets/fonts/Rubik-Regular.ttf"),
    "Rubik-SemiBold": require("@/assets/fonts/Rubik-SemiBold.ttf"),
  });

  useEffect(() => {
    if (areFontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [areFontsLoaded]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "white", padding: 8 },
      }}
    />
  );
}
