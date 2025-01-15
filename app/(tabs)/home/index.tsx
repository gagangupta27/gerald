import { Text, View, StyleSheet } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>HOME</Text>
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
