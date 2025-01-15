import { Pressable, PressableProps, View, StyleSheet } from "react-native";

import React from "react";

export type Props = Omit<PressableProps, "style"> & {};

const MenuIcon = ({ onPress }: Props) => {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.line} />
            <View style={styles.line} />
            <View style={styles.line} />
        </Pressable>
    );
};

export default MenuIcon;

const styles = StyleSheet.create({
    line: {
        height: 3,
        width: 25,
        backgroundColor: "rgba(0,0,0,0.3)",
        marginBlock: 3,
        borderRadius: 2,
    },
});
