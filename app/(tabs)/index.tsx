import { Link } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Bannière principale */}
      <Image
        source={require('../../assets/images/veggie-banner.png')}
        style={styles.banner}
        resizeMode="cover"
      />

      {/* Bouton vers la page des recettes */}
      <View style={styles.linkContainer}>
        <Link href="/recettes" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>🌯 Voir toutes les recettes</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f8f3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    width: '100%',
    height: '80%',
  },
  linkContainer: {
    position: 'absolute',
    bottom: 60,
  },
  button: {
    backgroundColor: '#4caf50',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
