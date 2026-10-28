import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList, ScrollView } from "react-native";
import logo from "../../assets/images/logo-dinodex.png";
import herb from "../../assets/images/herbivoro.png";
import { Link } from "expo-router";

export default function Index() {
    return (
        <ScrollView style={styles.container}>
            
            <View style={styles.header}>
                <Link href={"/"}>
                    <Image source={logo} style={styles.logo} />
                </Link>
                <Text style={styles.titulo}>Herbivoros</Text>
            </View>

            <View style={styles.main}>
                <View style={styles.dinoCard}>
                    <View style={styles.cardImage}>
                        <Image source={herb} style={styles.imagem}></Image>
                    </View>
                    <Text>Triceratops</Text>

                </View>
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
        marginBottom: 5,
        marginTop: 15
    },

    subtitulo: {
        color: "#E5D9C3",
        fontSize: 10
    },

    main: {
        justifyContent: "center",
        alignItems: "center"
    },

    dinoCard: {
        backgroundColor: "#294B29",
        width: 300,
        height: 300,
        borderRadius: 5,
        alignItems: "center",
        paddingTop: 200
    },

    cardImage: {
        backgroundColor: "#fff",
        padding: 10,
        width: 180,
        alignItems: "center",
    },

    imagem: {
        height: 100,
        width: 100
    }
});
