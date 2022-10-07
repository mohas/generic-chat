import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Chat from "./features/chat";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Chat />
      <StatusBar style="light" animated={true} />
    </View>
  );
}
