import { useState } from "react";
import { View, TextInput, FlatList, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import students from "../data/students";
import StudentCard from "../components/StudentCard";

export default function Directory() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Search by name..."
        value={search}
        onChangeText={setSearch}
        autoCapitalize="none"
        clearButtonMode="while-editing"
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <StudentCard
            student={item}
            onPress={() => router.push(`/students/${item.id}`)}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Walay student nga anang pangalan dawg 🥀</Text>
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fac5c5" },
  search: {
    backgroundColor: "#f2a388",
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  empty: { textAlign: "center", marginTop: 40, fontSize: 16, color: "#000000" },
});