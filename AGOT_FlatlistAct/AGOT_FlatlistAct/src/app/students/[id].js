import { View, Text, Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import students from "../../data/students";

export default function StudentDetail() {
  const { id } = useLocalSearchParams();
  const student = students.find((s) => s.id === id);

  const imageSource =
    typeof student.image === "string" ? { uri: student.image } : student.image;

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.name}>{student.name}</Text>
      <Text style={styles.detail}>Course: {student.course}</Text>
      <Text style={styles.detail}>Year: {student.year}</Text>
      <Text style={styles.detail}>Email: {student.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 24, backgroundColor: "#e2c070" },
  image: { width: 160, height: 160, borderRadius: 80, marginBottom: 20 },
  name: { fontSize: 26, fontWeight: "bold", marginBottom: 12 },
  detail: { fontSize: 16, color: "#000000", marginBottom: 6 },
});