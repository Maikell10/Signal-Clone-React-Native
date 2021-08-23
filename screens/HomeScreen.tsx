import * as React from "react";

import { StyleSheet, Image, FlatList, Pressable } from "react-native";
import { Text, View } from "../components/Themed";
import { Auth } from "aws-amplify";

import ChatoRoomItem from "../components/ChatRoomItem";
import chatRoomsData from "../assets/dummy-data/ChatRooms";

export default function TabOneScreen() {
    const logOut = () => {
        Auth.signOut();
    };

    return (
        <View style={styles.page}>
            <FlatList
                data={chatRoomsData}
                renderItem={({ item }) => <ChatoRoomItem chatRoom={item} />}
                showsVerticalScrollIndicator={false}
                //onEndReached={}
            />

            <Pressable onPress={logOut} style={styles.logout}>
                <Text>Logout</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    logout: {
        backgroundColor: "red",
        height: 50,
        margin: 10,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
});
