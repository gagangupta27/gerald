import "react-native-reanimated";

import * as SplashScreen from "expo-splash-screen";

import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";

import CustomDrawer from "@/components/ui/Drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import StackHeader from "@/components/ui/StackHeader";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const ANIMATION_TIME = 800;

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    });

    const rotate = useSharedValue(0);

    const animatedStylesScreen = useAnimatedStyle(() => ({
        transform: [
            { rotate: withTiming(`-${rotate.value ? 8 : 0}deg`, { duration: ANIMATION_TIME }) },
            { translateY: withTiming(rotate.value ? 45 : 0, { duration: ANIMATION_TIME }) },
            { translateX: withTiming(rotate.value ? 260 : 0, { duration: ANIMATION_TIME }) },
        ],
        borderRadius: withTiming(rotate.value ? 40 : 10, { duration: ANIMATION_TIME }),
    }));

    const animatedStylesDrawer = useAnimatedStyle(() => ({
        transform: [{ translateY: withTiming(rotate.value ? 50 : 0, { duration: ANIMATION_TIME }) }],
        borderTopLeftRadius: withTiming(rotate.value ? 32 : 10, { duration: ANIMATION_TIME }),
    }));

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    const onMenuPress = () => {
        rotate.value = rotate.value === 1 ? 0 : 1;
    };

    if (!loaded) {
        return null;
    }

    return (
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <StatusBar style="dark" />
                <View style={styles.container}>
                    <Animated.View style={[styles.animatedView, animatedStylesDrawer]}>
                        <CustomDrawer onMenuPress={onMenuPress} />
                        <Animated.View
                            style={[styles.innerView, { paddingTop: useSafeAreaInsets().top }, animatedStylesScreen]}
                        >
                            <View style={styles.mainScreen}>
                                <Stack
                                    screenOptions={{
                                        header: ({ route }) => <StackHeader route={route} onMenuPress={onMenuPress} />,
                                    }}
                                >
                                    <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
                                </Stack>
                            </View>
                        </Animated.View>
                    </Animated.View>
                </View>
            </GestureHandlerRootView>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    animatedView: {
        flex: 1,
        backgroundColor: "#00165a",
        borderRadius: 0,
    },
    innerView: {
        flex: 1,
        backgroundColor: "white",
        ...StyleSheet.absoluteFillObject,
    },
    mainScreen: {
        flex: 1,
        backgroundColor: "black",
    },
});
