import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function StyledButton() {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => {
          console.warn("hey there");
        }}
      >
        {}
        <Text style={styles.text}>custom order</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
  button: {
    backgroundColor: "white",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    textTransform: "uppercase",
    fontSize: 12,
    fontWeight: "500",
  },
});
