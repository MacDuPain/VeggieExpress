import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const recipes = [
  {
    id: "1",
    title: "Vrapapapa",
    subtitle: "Wrap Méditerranéen Express",
    time: "10 minutes",
    image: require("@/assets/images/wrap.png"), 
  },
  {
    id: "2",
    title: "Salade Caprice",
    subtitle: "Salade caprese revisitée",
    time: "8 minutes",
    image: require("@/assets/images/salad.png"),
  },
    {
    id: "3",
    title: "Oeuf & misme",
    subtitle: "oeufs brouillés aux légumes",
    time: "8 minutes",
    image: require("@/assets/images/oeufs.png"), 
  },
  {
    id: "4",
    title: "Chill Toast",
    subtitle: "Grilled cheese végétarien",
    time: "10 minutes",
    image: require("@/assets/images/toast.png"),
  },
    {
    id: "5",
    title: "Rice N'Jump",
    subtitle: "Riz sauté aux légumes",
    time: "12 minutes",
    image: require("@/assets/images/rice.png"),
  },
];

export default function RecipesScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/recipes/${item.id}`)}
          >
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
              <Text style={styles.time}>⏱ {item.time}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  list: {
    paddingBottom: 50,
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: "100%",
    height: 180,
  },
  textContainer: {
    padding: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginVertical: 4,
  },
  time: {
    fontSize: 14,
    color: "#555",
    marginTop: 8,
  },
});
