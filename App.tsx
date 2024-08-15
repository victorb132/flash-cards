import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { PrismicProvider } from '@prismicio/react';
import { client } from "./src/config/prismic";

import { FlashCard } from "./src/components/flashCard";

export default function App() {
  return (
    <PrismicProvider client={client}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <FlashCard />
      </View>
    </PrismicProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});