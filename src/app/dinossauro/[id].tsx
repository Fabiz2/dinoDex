import { BuscarDinossauro } from '@/api/get-dinossauro'
import { useQuery } from '@tanstack/react-query'
import { useLocalSearchParams, Link } from 'expo-router'
import React from 'react'
import { View, Image, ActivityIndicator, StyleSheet, Button, Pressable, Text } from 'react-native'

export default function dinossauro() {

  const { id } = useLocalSearchParams<{ id: string }>()

  const { data, isLoading, isError } = useQuery({
    queryKey: ["dinossauros"],
    queryFn: () => BuscarDinossauro(id)
  })

  if (isLoading) {
    return (
      <View style={styles.centro}>
        <ActivityIndicator />
        <Text>Carregando dinossauro...</Text>
      </View>
    )
  }

  if (isError) {
    return (
      <View>
        <Text>Ops! Erro ao carregar dinossauro!</Text>
      </View>
    )
  }

  return (

    <View style={styles.container}>

      <Text style={styles.nome}>
        {data.nome}
      </Text>

      <Image source={{ uri: data.urlImagem }} style={styles.avatar} />


      <View style={styles.content}>

        <View style={styles.subinfos}>
          <Text style={styles.era}>{data.era}</Text>
          <Text style={styles.dieta}>{data.dieta}</Text>
        </View>

        <View style={styles.subinfos}>
          <Text style={styles.subTitle}>Altura</Text>
          <Text style={styles.subDesc}>{data.altura}</Text>
        </View>


        <View style={styles.subinfos}>
          <Text style={styles.subTitle}>Peso</Text>
          <Text style={styles.subDesc}>{data.peso}</Text>
        </View>

        <View style={styles.subinfos}>
          <Text style={styles.subTitle}>Comprimento</Text>
          <Text style={styles.subDesc}>{data.comprimento}</Text>
        </View>

        <Link href={"/dinossauros"}>
          <Pressable style={styles.btnLista}>
            <Text style={styles.btnText}>
              Voltar
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  subTitle: {
    marginRight: 100,
    color: "#CBB071",
    fontWeight: 600,
    fontSize: 15
  },

  subDesc: {
    fontWeight: 600,
    color: "#E5D9C3"
  },


  subinfos: {
    marginTop: 10,
    flexDirection: "row",
    marginBottom: 30,
    justifyContent: "space-between"
  },

  era: {
    marginTop: 10,
    fontWeight: 700,
    marginRight: 20,
    fontSize: 17,
    color: "#E5D9C3"
  },


  dieta: {
    fontWeight: 500,
    marginRight: 20,
    fontSize: 17,
    color: "#E5D9C3",
    borderColor: "#E5D9C3",
    borderWidth: 1,
    padding: 9,
    borderRadius: 5
  },


  content: {
    marginLeft: 20
  },

  centro: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  container: {
    flex: 1,
    fontFamily: "arial",
    gap: 6,
    backgroundColor: "#0F1711",
    alignItems: "center"
  },

  avatar: {
    width: "100%",
    height: 200,
    resizeMode: "contain"

  },

  nome: {
    fontSize: 25,
    fontWeight: "800",
    marginBottom: 10,
    color: "#CBB071"
  },

  btnLista: {
    padding: 15,
    backgroundColor: "#CBB071",
    maxWidth: 400,
    alignItems: "center",
    marginBottom: 30,
    borderRadius: 4
  },

  btnText: {
    color: "#ffffff",
    fontFamily: "Arial",
    fontWeight: 700,
    fontSize: 16
  },

}

)
