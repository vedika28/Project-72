import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import readStoryScreen from "./screens/readStoryScreen";
import writeStoryScreen from "./screens/writeStoryScreen";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
}

const navigator = createBottomTabNavigator(
  {
    read: { screen: readStoryScreen },
    write: { screen: writeStoryScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        console.log(routeName);
        if (routeName === "read") {
          return (
            <Image
              source={require("./assets/read.png")}
              style={{ width: 50, height: 50 }}
            />
          );
        } else if (routeName === "write") {
          return (
            <Image
              source={require("./assets/write.png")}
              style={{ width: 50, height: 50 }}
            />
          );
        }
      },
    }),
  }
);

const AppContainer = createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
