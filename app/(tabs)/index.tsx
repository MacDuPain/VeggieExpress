import { View, StyleSheet, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/veggie-banner.png')} 
        style={styles.banner}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f8f3',
  },
  banner: {
    width: '100%',
    height: '100%',
  },
});
