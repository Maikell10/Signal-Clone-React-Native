import React from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import { Text } from "../components/Themed";
import { useRoute, useNavigation } from "@react-navigation/core";
import ChatRoomData from "../assets/dummy-data/Chats";

import Message from "../components/Message";
import MessageInput from "../components/MessageInput";

export default function ChatRoomScreen() {
    const route = useRoute();
    const navigation = useNavigation();

    navigation.setOptions({ title: "Elon Musk" });

    console.warn(route.params?.id);
    return (
        <SafeAreaView style={styles.page}>
            <FlatList
                data={ChatRoomData.messages}
                renderItem={({ item }) => <Message message={item} />}
                inverted
            />
            <MessageInput />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
});
