import {BuscarDinossauros} from "../api/get-dinossauros";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image, ActivityIndicator, ScrollView, } from "react-native";


export default function dinossauros() {

const router = useRouter()

    const { data, isLoading, isError } = useQuery({
        queryKey: ["dinossauros"],
        queryFn: BuscarDinossauros
    })

    if (isLoading) {
        return (
            <View style={style.centro}>
                <ActivityIndicator />
                <Text>Carregando dinossauros...</Text>
            </View>
        )
    }

    if (isError) {
        return (
            <View style={style.centro}>
                <Text>Ops! Erro ao carregar dinossauros!</Text>
            </View>
        )
    }

    
      return (
        
           <ScrollView>


            <Text style={style.title}>
                Catalogo
            </Text>

            <FlatList
                data={data}
                contentContainerStyle={style.lista}
                renderItem={({ item }) => (

                    <TouchableOpacity style={style.card} onPress={() => router.push(`/dinossauro/${item.id}` as any)}>
                        <Image style={style.avatar} source={item.urlImagem} />

                        <View>

                            <View >
                                <Text style={style.nome}>{item.nome}</Text>
                            </View>
                            <View>
                                <Text style={style.anoEduracao}>{item.descricao}</Text>

                                <Text style={style.genero}>{item.genero}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />

        </ScrollView>
    )
}

    const style = StyleSheet.create({

    lista: {
        padding: 16,
        gap: 12
    },

    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#831010",
        borderRadius: 4,
        padding: 14,
        gap: 14,





    },
    nome: {
        fontSize: 24,
        fontWeight: 700,
        maxWidth: 400,
                color:"#FFFF"



    },

    anoEduracao: {
        fontSize: 13,
        marginTop: 5,
               color:"#ffffff80"

    },

    genero: {
        fontSize: 13,
        marginTop: 8,
        marginLeft: 10,
        color:"#ffffff80"
    },

    avatar: {
        width: 100,
        height: 150,
        borderRadius: 5,
        borderWidth:3,
        borderColor:"#FFF"

    },

    centro: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 12
    },

    title: {
        color: "#564d4d",
        fontSize: 24,
        fontWeight: 700,
        maxWidth: 400,
        margin: 14
    },

    bgcolor: {
        backgroundColor: "#0000"
    }
})

    
