import React from "react";
import { Badge, Text, View } from "react-native-ui-lib";

export default function Status() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#5dcb61",

        borderRadius: 25,
        paddingHorizontal: 8,
        paddingBottom: 2,
      }}
    >
      <Badge label={""} size={8} backgroundColor="#03fc0b" />
      <Text style={{ color: "#03fc0b", marginStart: 3 }}>online</Text>
    </View>
  );
}
