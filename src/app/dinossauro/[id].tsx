import { BuscarDinossauro } from '@/api/get-dinossauro'
import { useQuery } from '@tanstack/react-query'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { View, Image, ActivityIndicator, StyleSheet,Button, Pressable, Text} from 'react-native'

export default function dinossauro() {
  
  const {id} = useLocalSearchParams<{id:string}>()

   const {data, isLoading, isError} = useQuery({
      queryKey:["dinossauros"],
      queryFn:() => BuscarDinossauro(id)
    })

     if(isLoading){
        return(
          <View  style={styles.centro}>
            <ActivityIndicator/>
            <Text>Carregando dinossauro...</Text>
          </View>
        )
      }
    
      if(isError){
        return(
        <View>
          <Text>Ops! Erro ao carregar dinossauro!</Text>
        </View>
        )
      }
  
    return (

        <View style={styles.container}>
           <Image source={{uri: data.urlImagem}} style={styles.avatar}/>


           <View style={styles.content}>

           <Text style={styles.nome}>
            {data.nome} 
           </Text>

           <View style={styles.subinfos}>
           <Text style={styles.ano}>{data.descricao}</Text>
           <Text style={styles.duracao}>{data.era}</Text>
           <Text style={styles.classificacao}>{data.dieta}</Text>
           </View>

           <Pressable style={styles.btnAssistir}>
            <Text style={styles.btnText}>

            Assistir
            </Text>
            </Pressable>
            <Pressable style={styles.btnLista}>
              <Text style={styles.btnText}>

            Minha Lista
              </Text>
            </Pressable>


          <View style={styles.subInfo}>
           <Text style={styles.subTitle}>Gênero</Text>
           <Text style={styles.subDesc}>{data.genero}</Text>
           </View>

           
          <View style={styles.subInfo}>

           <Text style={styles.subTitle}>Direção</Text>
           <Text style={styles.subDesc}>{data.familia}</Text>
          </View>
        </View>
           </View>
  )
}

const styles = StyleSheet.create({

  subInfo:{
    flexDirection: "row",
    marginBottom: 10
    
  },

  subTitle:{
    marginRight: 100,
    color:"#747272",
    fontWeight: 600,
  },

  subDesc:{
    fontWeight: 600,
  },

  btnAssistir:{
      padding:20,
      backgroundColor:"#ff1717",
      maxWidth:400,
      alignItems:"center",
      color:"white",
      fontFamily: "Arial",
      fontWeight: 700,
      marginBottom: 12
  },
   btnLista:{
      padding:20,
      backgroundColor:"#747272",
      maxWidth:400,
      alignItems:"center",
      marginBottom: 30
  },

  btnText:{
      color:"#ffffff",
      fontFamily: "Arial",
      fontWeight: 700,
      fontSize: 16
  },

  sinopseTitle:{
    fontFamily:"Arial",
    fontWeight:700,
    fontSize: 20,
    marginBottom:12,
    marginTop:12
  },


  subinfos:{
    marginTop:10,
    flexDirection:"row",
    marginBottom: 30
    
  },

  ano:{
    marginTop:10,
    fontWeight:700,
    marginRight: 20,
    fontSize:17
  },

  duracao:{
    marginTop:10,
    fontWeight:700,
    marginRight: 20,
    fontSize:17
  },

  classificacao:{
    fontWeight:500,
    marginRight: 20,
    fontSize:17,
    color: "#ee0303",
    borderColor:"#ff0000",
    borderWidth: 1,
    padding:9
  },


    content:{
      marginLeft: 20
    },

    centro:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },

    container:{
        flex:1,
        fontFamily: "arial",
        gap: 6
   
    },

    avatar:{
        width:"100%",
        height:350,
        
        marginBottom: 8,
        borderBottomWidth:4,
        borderBottomColor:"#aaaaaab0"
        
    },

    nome:{
        fontSize:35,
        fontWeight:"800"
    },

    sinopseText:{
        marginBottom: 12
    },

    sinopse:{
      borderBottomWidth:3,
      borderTopWidth:3,
      borderColor:"grey",
      paddingBottom:10,
      paddingTop:10,
      marginBottom: 12
    }
}

)
