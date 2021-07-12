import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { View as MotiView } from 'moti'

export default function index() {
  return (
    <View style={styles.container}>
      <MotiView
        from={{ opacity: 0, marginTop: -100 }}
        animate={{ opacity: 1, marginTop: 0 }}
        transition={{ delay: 100, type: 'spring' }}
      >
        <Text>Open up App.tsx to start working on your app!</Text>
      </MotiView>
      <MotiView
         style={{ marginTop: 100 }}
         from={{ opacity: 0, marginLeft: -100 }}
         animate={{ opacity: 1, marginLeft: 0 }}
         transition={{ delay: 500, type: 'spring' }}
      >
            <Button title="Hello there" onPress={() => alert('Pressed')} />
      </MotiView>

      <StatusBar style="auto" />
    </View>
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
