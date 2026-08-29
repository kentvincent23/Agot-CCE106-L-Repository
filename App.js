import { StyleSheet, Text, View } from "react-native";
import StatCard from "./components/StatCard";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>"My Custom Dashboard" </Text>
      <StatCard
        title="Total Users 💻"
        value="1,240"
        bgColor="#fffec5"
      />
      <StatCard
        title="Revenue 💰"
        value="12,450"
        bgColor="#eeafce"
      />
      <StatCard
        title="Pending Issues 🌍"
        value="3"
        bgColor="#dfacd6"
      />
      </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,      
        backgroundColor: '#773030',
        padding: 20,
        paddingTop: 120,    
    },
    header: {
        fontSize: 24,
        color: '#ffffff',
        fontWeight: "bold",
        marginBottom: '#b17d7d',
        textAlign: 'center', 
    },          
});   