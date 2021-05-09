import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const Pokemoncomp = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Text>{"\n"}</Text>

      <Text style={{ textAlign: "center", fontSize: 40, fontWeight: "bold" }}>
        {props.name}
      </Text>
      <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
        Type:&nbsp;
        {props.type2 ? props.type1 + "," + props.type2 : props.type1}
        {/* {props.type1},{props.type2} */}
      </Text>
      <View
        style={{
          width: "100%",
          //   backgroundColor: "pink",
        }}
      >
        <Image source={{ uri: props.img }} style={styles.image} />
      </View>
      <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
        Height:&nbsp;{props.height}
      </Text>
      <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
        Weight:&nbsp;{props.weight}
      </Text>
      <Text>{"\n"}</Text>

      <View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: "red",
            fontWeight: "bold",
          }}
        >
          Weaknesses:-
        </Text>

        {props.weakness.map((weak) => {
          return (
            <>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                {weak}
              </Text>
            </>
          );
        })}
      </View>
    </View>
  );
};

export default Pokemoncomp;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    marginLeft: "10%",
  },
});
