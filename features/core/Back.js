import React from "react";
import { TouchableHighlight } from "react-native-gesture-handler";
import { View } from "react-native-ui-lib";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Back() {
  return (
    <TouchableHighlight>
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 50,
          width: 40,
          height: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="chevron-back" size={20} />
      </View>
    </TouchableHighlight>
  );
}
