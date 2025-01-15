import { StyleSheet, Text, View } from "react-native";

export default function Orders() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Orders</Text>
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
