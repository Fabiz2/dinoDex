import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList, ScrollView } from "react-native";
import logo from "../../assets/images/logo-dinodex.png";
import carnivoro from "../../assets/images/carnivoro.png";
import herbivoro from "../../assets/images/herbivoro.png";
import todos from "../../assets/images/todos.png";
import { Link } from "expo-router";

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
      </View>


      <Link href={"/carnivoros"} asChild>
        <View style={styles.containerCarnivoro}>
          <View style={styles.carnivoroCard}>
            <Image source={carnivoro} style={styles.dinoImage} />
          </View>

          <View style={styles.dinoText}>
            <Text style={styles.titulo}>Carnivoros</Text>
            <Text style={styles.subtitulo}>Os dinossauros carnívoros eram predadores bípedes e velozes com dentes serrilhados, garras afiadas e sentidos apurados para caçar.</Text>
          </View>
        </View>
      </Link>

      <Link href={"/herbivoros"} asChild>
        <View style={styles.containerHerb}>
          <View style={styles.herbCard}>
            <Image source={herbivoro} style={styles.dinoImage} />
          </View>

          <View style={styles.dinoText}>
            <Text style={styles.titulo}>Herbivoros</Text>
            <Text style={styles.subtitulo}>Os dinossauros herbívoros eram animais com dentes trituradores, bicos córneos e defesas como chifres, armaduras ou pescoços longos para comer plantas.</Text>
          </View>
        </View>
      </Link>

      <Link href={"/todos"} asChild>
        <View style={styles.containerTodos}>
          <View style={styles.todosCard}>
            <Image source={todos} style={styles.dinoImageTodos} />
          </View>

          <View style={styles.dinoTextTodos}>
            <Text style={styles.titulo}>Todos</Text>
            <Text style={styles.subtitulo}>Os dinossauros eram répteis bípedes ou quadrúpedes divididos entre carnívoros predadores com dentes e garras afiadas e herbívoros adaptados com armaduras, chifres ou pescoços longos para comer plantas.</Text>
          </View>
        </View>
      </Link>

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

  containerCarnivoro: {
    flexDirection: "row",
    marginTop: 50,
    alignContent: "space-between"
  },

  containerHerb: {
    flexDirection: "row-reverse",
    marginTop: 50,
    alignContent: "space-between"
  },

  carnivoroCard: {
    backgroundColor: "#294B29",
    width: 115,
    height: 60,
    padding: 10,
    borderRadius: 5,
    margin: 10,
    marginTop: 25,
    flexDirection: "column-reverse",
  },

  containerTodos: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 50
  },

  todosCard: {
    backgroundColor: "#294B29",
    width: 200,
    height: 60,
    padding: 10,
    borderRadius: 5,
    margin: 10,
    marginTop: 25,
    flexDirection: "column-reverse",
    alignItems: "center"
  },

  herbCard: {
    backgroundColor: "#294B29",
    width: 115,
    height: 60,
    padding: 10,
    borderRadius: 5,
    margin: 10,
    marginTop: 25,
    flexDirection: "column-reverse",
  },

  dinoImage: {
    height: 110,
    width: 100,
    margin: 0
  },

  dinoText: {
    flex: 1,
    marginLeft: 15
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

  dinoImageTodos: {
    height: 250,
    width: 220
  },

  dinoTextTodos:{
    alignItems: "center",
    marginLeft: 15,
  }
});
