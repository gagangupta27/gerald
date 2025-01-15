import { PressableProps, StyleSheet, Text, View } from "react-native";

import MenuIcon from "./MenuIcon";
import React from "react";
import { getHeaderTitle } from "@/utils/common";

export type Props = Omit<PressableProps, "style"> & {
    onMenuPress: () => void;
    route: { name: string };
};

const StackHeader = ({ onMenuPress, route }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <MenuIcon onPress={onMenuPress} />
                <Text style={styles.routeName}>{getHeaderTitle(route.name)}</Text>
            </View>
        </View>
    );
};

export default StackHeader;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "white",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingBottom: 8,
    },
    routeName: {
        paddingLeft: 16,
        fontSize: 18,
        textTransform: "uppercase",
        letterSpacing: 4,
        fontWeight: "500",
        color: "rgba(0,0,0,0.3)",
    },
});
