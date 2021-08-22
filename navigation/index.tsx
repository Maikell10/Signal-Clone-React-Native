/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName, Image, useWindowDimensions } from "react-native";
import { Text, View } from "../components/Themed";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
//import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";

import HomeScreen from "../screens/HomeScreen";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import { Feather } from "@expo/vector-icons";

export default function Navigation({
    colorScheme,
}: {
    colorScheme: ColorSchemeName;
}) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <RootNavigator colorScheme={colorScheme} />
        </NavigationContainer>
    );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator({ colorScheme }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerTitle: () => <HomeHeader color={{ colorScheme }} />,
                }}
            />
            <Stack.Screen
                name="ChatRoom"
                component={ChatRoomScreen}
                options={{
                    headerTitle: ChatRoomHeader,
                    headerBackTitleVisible: false,
                }}
            />
            <Stack.Screen
                name="NotFound"
                component={NotFoundScreen}
                options={{ title: "Oops!" }}
            />
        </Stack.Navigator>
    );
}

const HomeHeader = ({ color }) => {
    const { width } = useWindowDimensions();

    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width,
                padding: 10,
                alignItems: "center",
                backgroundColor: "null",
            }}
        >
            <Image
                source={{
                    uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
                }}
                style={{ width: 30, height: 30, borderRadius: 30 }}
            />
            <Text style={{ marginLeft: 55, fontWeight: "bold" }}>Signal</Text>

            <View style={{ flexDirection: "row" }}>
                <Feather
                    name="camera"
                    size={24}
                    color={color.colorScheme === "dark" ? "white" : "black"}
                    style={{ marginHorizontal: 10 }}
                />
                <Feather
                    name="edit-2"
                    size={24}
                    color={color.colorScheme === "dark" ? "white" : "black"}
                    style={{ marginHorizontal: 10 }}
                />
            </View>
        </View>
    );
};

const ChatRoomHeader = (props) => {
    const { width } = useWindowDimensions();

    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: width - 25,
                marginLeft: 25,
                padding: 10,
                alignItems: "center",
                backgroundColor: "null",
            }}
        >
            <Image
                source={{
                    uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
                }}
                style={{ width: 30, height: 30, borderRadius: 30 }}
            />
            <Text style={{ marginLeft: 10, fontWeight: "bold" }}>
                {props.children}
            </Text>

            <View style={{ flexDirection: "row", backgroundColor: "null" }}>
                <Feather
                    name="camera"
                    size={24}
                    color="black"
                    style={{ marginHorizontal: 10 }}
                />
                <Feather
                    name="edit-2"
                    size={24}
                    color="black"
                    style={{ marginHorizontal: 10 }}
                />
            </View>
        </View>
    );
};
