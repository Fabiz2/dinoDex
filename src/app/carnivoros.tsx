import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList, ScrollView } from "react-native";
import logo from "../../assets/images/logo-dinodex.png";
import { Link } from "expo-router";

export default function Index() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Link href={"/"}>
                    <Image source={logo} style={styles.logo} />
                </Link>
            </View>



        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0F1711",
    },

    header: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20
    },

    logo: {
        height: 150,
        width: 200,
    },

    titulo: {
        color: "#CBB071",
        fontSize: 20,
        textDecorationLine: "underline",
        marginBottom: 5
    },

    subtitulo: {
        color: "#E5D9C3",
        fontSize: 10
    },
});
