import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "CCE106 ACTIVITY - Flatlists" }} />
      <Stack.Screen name="students/[id]" options={{ title: "Student Details" }} />
    </Stack>
  );
}