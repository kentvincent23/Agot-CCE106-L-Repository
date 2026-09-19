import { Pressable, Image, ImageBackground, Text, View, StyleSheet } from "react-native";

export default function StudentCard({ student, onPress }) {
  const imageSource =
    typeof student.image === "string" ? { uri: student.image } : student.image;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <Image source={imageSource} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{student.name}</Text>
        <Text style={styles.course}>{student.course}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f4deaa",
    padding: 12,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  pressed: { opacity: 0.6 },
  image: { width: 64, height: 64, borderRadius: 32 },
  info: { marginLeft: 14, flex: 1 },
  name: { fontSize: 17, fontWeight: "bold" },
  course: { fontSize: 14, color: "#666", marginTop: 2 },
  pressed: { opacity: 0.6, borderColor: "#4a90e2",
},
});