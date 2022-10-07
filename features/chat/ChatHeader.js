import React from "react";
import { Text, View } from "react-native-ui-lib";
import { Back, More, Status } from "../core";

export default function ChatHeader() {
  return (
    <View
      style={{
        flex: 0,
        height: 120,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingTop: 15,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          padding: 15,
        }}
      >
        <Back />

        <View
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 24,
              marginStart: 15,
              color: "#000",
              fontWeight: "bold",
            }}
          >
            Group 1
          </Text>
          <Status />
        </View>
        <More />
      </View>
    </View>
  );
}
