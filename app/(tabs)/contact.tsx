import { StyleSheet, Text, View } from "react-native";

export default function Contact() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact</Text>
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
