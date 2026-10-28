import {BuscarDinossauros} from "../api/get-dinossauros";
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image, ActivityIndicator, ScrollView } from "react-native";
import logo from "../../assets/images/logo-dinodex.png";
import { Link, useRouter } from "expo-router";
import { useQuery } from "@tanstack/react-query";


export default function dinossauros() {

const router = useRouter()

    const { data, isLoading, isError } = useQuery({
        queryKey: ["dinossauros"],
        queryFn: BuscarDinossauros
    })

    if (isLoading) {
        return (
            <View style={styles.centro}>
                <ActivityIndicator />
                <Text>Carregando dinossauros...</Text>
            </View>
        )
    }

    if (isError) {
        return (
            <View style={styles.centro}>
                <Text>Ops! Erro ao carregar dinossauros!</Text>
            </View>
        )
    }

    
    return (
        <ScrollView style={styles.container}>

            <View style={styles.header}>
                <Link href={"/"}>
                    <Image source={logo} style={styles.logo} />
                </Link>

                <Text style={styles.titulo}>
                    Geral
                </Text>
            </View>




            <FlatList
                data={data}
                contentContainerStyle={styles.lista}
                renderItem={({ item }) => (

                    <TouchableOpacity style={styles.dinoCard} onPress={() => router.push(`/dinossauro/${item.id}` as any)}>

                        <View style={styles.infos}>
                            <Text style={styles.nome}>{item.nome}</Text>
                        </View>

                        <Image style={styles.imagem} source={item.urlImagem} />

                        <View>


                            <View style={styles.descricaoDiv}>
                                <Text style={styles.descricao}>{item.descricao}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
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
        fontSize: 30,
        marginBottom: 5,
        marginTop: 15,
        fontWeight: "700",
    },

    nome: {
        color: "#E5D9C3",
        fontSize: 19,
        fontWeight: "600",
        marginVertical: 10
    },

    infos: {
        flexDirection: "row",
        gap: 10
    },

    main: {
        justifyContent: "center",
        alignItems: "center"
    },

    dinoCard: {
        backgroundColor: "#294B29",
        width: 300,
        height: 300,
        borderRadius: 25,
        alignItems: "center",
        padding: 20,
        borderWidth: 4,
        borderColor: "#CBB071"
    },

    cardImage: {
        padding: 10,
        width: 180,
        alignItems: "center",
    },

    imagem: {
        width: "100%",
        height: 150,
        resizeMode: "contain"
    },

    centro: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 12
    },

    lista: {
        padding: 16,
        gap: 12,
        alignItems: "center"
    },

    icon: {
        height: 20,
        width: 20,
        marginTop: 15,
    },

    iconDiv: {
        flexDirection: "row-reverse"
    },

    descricaoDiv: {
        padding: 10
    },

    descricao: {
        fontSize: 14,
        color: "#E5D9C3"
    }
});