import { Stack } from 'expo-router';
import React from 'react';

export default function ExploreLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // <-- ça s’applique à toutes les pages du stack
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="recettes" />
      <Stack.Screen name="about" />
    </Stack>
  );
}
