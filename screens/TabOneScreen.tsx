import * as React from "react";

import { StyleSheet, Image, FlatList } from "react-native";
import { Text, View } from "../components/Themed";

import ChatoRoomItem from "../components/ChatRoomItem";
import chatRoomsData from "../assets/dummy-data/ChatRooms";

export default function TabOneScreen() {
    return (
        <View style={styles.page}>
            <FlatList
                data={chatRoomsData}
                renderItem={({ item }) => <ChatoRoomItem chatRoom={item} />}
                showsVerticalScrollIndicator={false}
                //onEndReached={}
                horizontal
            />
            <FlatList
                data={chatRoomsData}
                renderItem={({ item }) => <ChatoRoomItem chatRoom={item} />}
                showsVerticalScrollIndicator={false}
                //onEndReached={}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
});
