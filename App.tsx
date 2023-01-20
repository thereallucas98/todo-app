import { useCallback, useEffect, useState } from "react";
import { View } from "react-native";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import { Home } from "./src/screens/Home";
import { initalizateServer } from "./src/api/mock";

initalizateServer();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    console.log("useEffect app")
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Inter_400Regular,
          Inter_500Medium,
          Inter_700Bold,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <Home />
    </View>
  );
}
