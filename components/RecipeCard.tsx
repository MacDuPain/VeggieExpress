import { Clock } from "lucide-react-native";
import { Image, StyleSheet, Text, View } from "react-native";

export default function RecipeCard({ title, subtitle, time, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="cover" />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>

        <View style={styles.details}>
          {/* Icones sans cercle */}
          <Image source={require("../assets/icons/leaf.png")} style={styles.icon} />
          
          <View style={styles.timeContainer}>
            <Clock size={16} color="#333" />
            <Text style={styles.time}>{time}</Text>
          </View>

          <Image source={require("../assets/icons/leaf.png")} style={styles.icon} />
        </View>
      </View>
    </View>
  );
}

const CARD_SIZE = 200;

const styles = StyleSheet.create({
  card: {
    width: CARD_SIZE,
    height: CARD_SIZE,
    backgroundColor: "#fff",
    borderRadius: 16,
    margin: 8,
    alignItems: "center",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  image: {
    width: "100%",
    height: "65%",
  },
  textContainer: {
    width: "100%",
    padding: 8,
    backgroundColor: "rgba(255,255,255,0.95)",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    color: "#222",
  },
  subtitle: {
    fontSize: 12,
    textAlign: "center",
    color: "#444",
    marginBottom: 4,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "70%",
  },
  icon: {
    width: 20,
    height: 20,
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  time: {
    fontSize: 12,
    color: "#333",
    marginLeft: 2,
  },
});