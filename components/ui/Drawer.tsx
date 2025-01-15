import { Pressable, PressableProps, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter, useSegments } from "expo-router";

import { ROUTES } from "@/constants/routes";
import React from "react";

export type Props = Omit<PressableProps, "style"> & {
    onMenuPress: () => void;
};
const CustomDrawer = ({ onMenuPress }: Props) => {
    const router = useRouter();
    const segments = useSegments();
    const activeRoute = segments?.pop() || "";

    return (
        <View style={styles.container}>
            <Pressable onPress={onMenuPress}>
                <Text style={styles.menuText}>{"Gerald"}</Text>
            </Pressable>
            {ROUTES.map((o) => (
                <TouchableOpacity
                    style={[styles.routeButton, activeRoute == o.routename ? styles.activeRoute : styles.inactiveRoute]}
                    onPress={() => {
                        onMenuPress();
                        router.push(o.routename == "home" ? o.routename : (`home/${o.routename}` as any));
                    }}
                    key={o.id}
                >
                    <Text style={styles.title}>{o.title}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default CustomDrawer;

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        width: 220,
        paddingTop: 100,
    },
    menuText: {
        fontSize: 30,
        color: "white",
        fontWeight: "600",
        textAlign: "center",
    },
    routeButton: {
        padding: 20,
        borderRadius: 8,
        marginTop: 30,
    },
    activeRoute: {
        backgroundColor: "rgba(0,0,0,0.3)",
    },
    inactiveRoute: {
        backgroundColor: "transparent",
    },
    title: {
        fontSize: 20,
        color: "white",
        fontWeight: "500",
        textAlign: "center",
    },
});
