import React from "react";
import { ScrollView } from "react-native";
import RecipeCard from "../../../components/RecipeCard";

const recipes = [
  {
    id: "1",
    title: "Vrapapapa",
    subtitle: "Wrap Méditerranéen Express",
    time: "10 minutes",
    image: require("@assets/images/wrap.png"),
  },
  {
    id: "2",
    title: "Salade Caprice",
    subtitle: "Salade caprese revisitée",
    time: "8 minutes",
    image: require("@assets/images/salad.png"),
  },
  {
    id: "3",
    title: "Oeuf & misme",
    subtitle: "Oeufs brouillés aux légumes",
    time: "8 minutes",
    image: require("@assets/images/oeufs.png"),
  },
  {
    id: "4",
    title: "Chill Toast",
    subtitle: "Grilled cheese végétarien",
    time: "10 minutes",
    image: require("@assets/images/toast.png"),
  },
  {
    id: "5",
    title: "Rice N'Jump",
    subtitle: "Riz sauté aux légumes",
    time: "12 minutes",
    image: require("@assets/images/rice.png"),
  },
];

export default function RecipesScreen() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#8BC34A" }} // Fond complet
      contentContainerStyle={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: 8,
      }}
    >
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          title={recipe.title}
          subtitle={recipe.subtitle}
          time={recipe.time}
          image={recipe.image}
        />
      ))}
    </ScrollView>
  );
}
