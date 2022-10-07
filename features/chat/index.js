import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Back, More, Status } from "../core";
import ChatHeader from "./ChatHeader";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  var ws = React.useRef(
    new WebSocket("ws://192.168.1.7:3001/websocket")
  ).current;

  useEffect(() => {
    ws.onopen = () => {};
    ws.onerror = (e) => {
      console.log("error", e);
    };
    ws.onmessage = (e) => {
      console.log("message", e.data);
    };
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    console.log("sending", messages);
    ws.send(messages[0].text);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ccc",
        flexDirection: "column",
      }}
    >
      <ImageBackground
        style={{ flex: 1, justifyContent: "center" }}
        resizeMode="repeat"
        source={{
          uri: "https://theabbie.github.io/blog/assets/official-whatsapp-background-image.jpg",
        }}
      >
        <ChatHeader />
        <View style={{ flex: 1, backgroundColor: "#fff", borderRadius: 15 }}>
          <GiftedChat
            messagesContainerStyle={{ borderRadius: 5 }}
            messages={messages}
            onSend={(messages) => onSend(messages)}
            user={{
              _id: 1,
            }}
            alwaysShowSend
          />
        </View>
      </ImageBackground>
      {/* {Platform.OS === "android" && <KeyboardAvoidingView behavior="padding" />} */}
    </View>
  );
}
