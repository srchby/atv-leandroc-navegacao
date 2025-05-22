// App.js
import React from "react";
import {
  Button,
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Linking,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function Plato({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ImageBackground
        style={styles.imageBg}
        source={require("./assets/platobg.jpg")}
      >
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Platão</Text>
          <Text style={styles.cardText}>
            “Sou o homem mais sábio do mundo, pois sei de uma coisa: que não sei
            nada.”
          </Text>
          <Button
            color="#df8f6a"
            title="Aristotéles"
            onPress={() => navigation.navigate("Aristotle")}
          />
          <View style={{ margin: 12 }} />
          <Button
            color="#472c17"
            title="Ordem de Leitura"
            onPress={() =>
              Linking.openURL(
                "https://helkein.com.br/esboco-de-um-guia-de-leitura-para-as-obras-de-platao/"
              )
            }
          />
        </View>
      </ImageBackground>
    </View>
  );
}

function Aristotle({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ImageBackground
        style={styles.imageBg}
        source={require("./assets/aristotlebg.jpg")}
      >
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Aristóteles</Text>
          <Text style={styles.cardText}>
            “O objetivo da arte é representar não a aparência externa das
            coisas, mas seu significado interno.”
          </Text>
          <Button
            color="#5c4b37"
            title="Platão"
            onPress={() => navigation.navigate("Plato")}
          />
          <View style={{ margin: 12 }} />
          <Button
            color="#c3a373"
            title="Ordem de Leitura"
            onPress={() =>
              Linking.openURL(
                "https://helkein.com.br/esboco-de-um-guia-de-leitura-para-as-obras-de-aristoteles/"
              )
            }
          />
        </View>
      </ImageBackground>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Plato">
        <Stack.Screen
          name="Plato"
          component={Plato}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Aristotle"
          component={Aristotle}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  imageBg: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#343434",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    width: "100%",
    maxWidth: 320,
  },
  cardText: {
    textAlign: "center",
    margin: 10,
    fontWeight: "700",
    color: "#fff",
  },
  cardTitle: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    fontWeight: "700",
    color: "#fff",
  },
});
