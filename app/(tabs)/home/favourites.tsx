import { StyleSheet, Text, View } from "react-native";

export default function Favourites() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Favourites</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        backgroundColor: "white",
    },
    title: {
        textAlign: "center",
        fontSize: 30,
    },
});
