import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text } from "react-native";
import ALinkToThePast from "../views/ALinkToThePast.js";
import MajorasMask from "../views/MajorasMask.js";
import OcarinaOfTime from "../views/OcarinaOfTime.js";
import OracleOfAges from "../views/OracleOfAges.js";
import OracleOfSeasons from "../views/OracleOfSeasons.js";
import TheMinishCap from "../views/TheMinishCap.js";

const Tab = createBottomTabNavigator();

const App = () => (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: '#C8921E',
            tabBarInactiveTintColor: '#6E7B91',
            tabBarLabelStyle: { fontSize: 11, fontWeight: '700' },
            headerShown: true,
            tabBarStyle: { height: 68, paddingBottom: 6, paddingTop: 4 }
        }} initialRouteName="OOT"
    >
        <Tab.Screen
            name="OOT"
            component={OcarinaOfTime}
            options={{
                title: 'Ocarina of Time',
                tabBarLabel: 'Ocarina',
                tabBarIcon: ({ color, size }) => <Text style={{ color, fontSize: size }}>🎼</Text>
            }}
        />
        <Tab.Screen
            name="MM"
            component={MajorasMask}
            options={{
                title: 'Majora\'s Mask',
                tabBarLabel: 'Majora',
                tabBarIcon: ({ color, size }) => <Text style={{ color, fontSize: size }}>🌙</Text>
            }}
        />
        <Tab.Screen
            name="MC"
            component={TheMinishCap}
            options={{
                title: 'The Minish Cap',
                tabBarLabel: 'Minish',
                tabBarIcon: ({ color, size }) => <Text style={{ color, fontSize: size }}>🧢</Text>
            }}
        />
        <Tab.Screen
            name="ALTTP"
            component={ALinkToThePast}
            options={{
                title: 'A Link to the Past',
                tabBarLabel: 'ALttP',
                tabBarIcon: ({ color, size }) => <Text style={{ color, fontSize: size }}>⚔️</Text>
            }}
        />
        <Tab.Screen
            name="OOA"
            component={OracleOfAges}
            options={{
                title: 'Oracle of Ages',
                tabBarLabel: 'Ages',
                tabBarIcon: ({ color, size }) => <Text style={{ color, fontSize: size }}>⏳</Text>
            }}
        />
        <Tab.Screen
            name="OOS"
            component={OracleOfSeasons}
            options={{
                title: 'Oracle of Seasons',
                tabBarLabel: 'Seasons',
                tabBarIcon: ({ color, size }) => <Text style={{ color, fontSize: size }}>🌿</Text>
            }}
        />
    </Tab.Navigator>
);

export default App;