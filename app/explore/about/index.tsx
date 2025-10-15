import { ScrollView, StyleSheet, Text } from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#8BC34A" }} // Fond complet
      contentContainerStyle={styles.container}        // Layout interne
    >
      <Text style={styles.title}>À propos</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        malesuada, libero sit amet tincidunt egestas, neque justo cursus nisl,
        sit amet vehicula orci tortor a velit. Nullam non metus sit amet justo
        commodo lacinia. Morbi sed venenatis erat. Duis eget ultricies est.
      </Text>
      <Text style={styles.text}>
        Donec id massa a sapien fermentum interdum. Maecenas at diam et diam
        faucibus gravida. Nam dictum justo vitae dolor pharetra, nec tincidunt
        ex feugiat. Suspendisse potenti.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 16,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: "#fff",
    marginBottom: 16,
  },
});
