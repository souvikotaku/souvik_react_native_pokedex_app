import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
// import CarComponent from "./components/CarComponent";
import Pokemoncomp from "./components/Pokemoncomp";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  TouchableNativeFeedback,
  ImageBackground,
  Button,
  Modal,
} from "react-native";

// touchable props:-
// TouchableWithoutFeedback,
// TouchableOpacity,
// TouchableHighlight
// TouchableNativeFeedback

export default function App() {
  console.log("App executed");

  const [newone, setNewone] = useState([]);
  const [infobox, setInfoBox] = useState(false);
  const [pokename, setPokename] = useState("");
  const [poketype, setPoketype] = useState("");
  const [poketype2, setPoketype2] = useState("");
  const [pokeimg, setPokeimg] = useState("");
  const [pokeheight, setPokeheight] = useState("");
  const [pokeweight, setPokeweight] = useState("");
  const [pokeweaknesses, setPokeweaknesses] = useState("");

  useEffect(() => {
    async function fetchapi() {
      const url =
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";
      const response = await fetch(url);
      const response2 = await response.json();
      console.log(response2.pokemon);
      setNewone(response2.pokemon);
    }
    fetchapi();
  }, []);

  const clickinfo = (name, type1, type2, img, height, weight, weaknesses) => {
    setInfoBox(true);
    setPokename(name);
    setPoketype(type1);
    setPoketype2(type2);
    setPokeimg(img);
    setPokeheight(height);
    setPokeweight(weight);
    setPokeweaknesses(weaknesses);
  };

  const closebox = () => {
    setInfoBox(false);
  };

  return (
    <>
      <Modal visible={infobox} closebox={closebox} animationType="slide">
        <TouchableOpacity
          style={{
            height: 44,
            backgroundColor: "blue",
          }}
          onPress={closebox}
        >
          {/* <Button title="Close" onPress={closebox} /> */}

          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 30,
            }}
          >
            Close
          </Text>
        </TouchableOpacity>

        <Pokemoncomp
          name={pokename}
          type1={poketype}
          type2={poketype2}
          img={pokeimg}
          height={pokeheight}
          weight={pokeweight}
          weakness={pokeweaknesses}
        />
      </Modal>
      <Image
        source={{
          uri:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png",
        }}
        style={styles.imageheader}
      />
      <ScrollView style={styles.container}>
        {newone.map((pokemon) => (
          <View style={styles.titles}>
            <Text style={styles.title}>{pokemon.name}</Text>
            <View
              style={{
                width: "100%",
                backgroundColor: "pink",
              }}
            >
              <Image source={{ uri: pokemon.img }} style={styles.image} />
            </View>
            <TouchableOpacity
              style={{
                height: 44,
                backgroundColor: "blue",
              }}
              onPress={() => {
                clickinfo(
                  pokemon.name,
                  pokemon.type[0],
                  pokemon.type[1],
                  pokemon.img,
                  pokemon.height,
                  pokemon.weight,
                  pokemon.weaknesses
                );
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 30,
                }}
              >
                Click Me
              </Text>
            </TouchableOpacity>
          </View>
        ))}

        <StatusBar style="auto" />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  titles: {
    marginTop: "30%",
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  image: {
    width: 200,
    height: 200,
    marginLeft: "20%",
  },
  imageheader: {
    width: "100%",
    height: 140,
    marginTop: "5%",
  },
});
