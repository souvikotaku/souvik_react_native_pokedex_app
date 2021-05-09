import React from "react";
import { View, Text } from "react-native";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";
import StyledButton from "./StyledButton";

export default function CarComponent(props) {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={props.carimage} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{props.carname}</Text>
        <Text style={styles.subtitle}>{props.carprice}</Text>
      </View>

      <StyledButton />
    </View>
  );
}

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: "100%",
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
});
