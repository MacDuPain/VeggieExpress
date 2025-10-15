import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Fonts } from "@/constants/theme";

export default function ExploreScreen() {
  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}
        >
          Explore
        </ThemedText>
      </ThemedView>

      <ThemedText style={styles.subtitle}>
        Choisissez une catégorie à explorer :
      </ThemedText>

      <View style={styles.menuContainer}>
        {/* Bouton Recettes */}
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => router.push("/explore/recettes")}
        >
          <Image
            source={require("@/assets/images/salad.png")}
            style={styles.menuImage}
          />
          <ThemedText style={styles.menuText}>Recettes</ThemedText>
        </TouchableOpacity>

        {/* Bouton À propos */}
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => router.push("/explore/about")}
        >
          <Image
            source={require("@/assets/images/react-logo.png")}
            style={styles.menuImage}
          />
          <ThemedText style={styles.menuText}>À propos</ThemedText>
        </TouchableOpacity>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
  },
  menuContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
    marginTop: 32,
  },
  menuButton: {
    width: 150,
    height: 150,
    borderRadius: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  menuImage: {
    width: 64,
    height: 64,
    marginBottom: 8,
  },
  menuText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
