import { Link } from "expo-router";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FilmCard from "../../components/FilmCard";

const DATA = [
  {
    id: "1",
    name: "Fight club",
    logo: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg",
  },
  {
    id: "2",
    name: "Evangelion 3.0 + 1.0",
    logo: "https://cinemags.org/wp-content/uploads/2021/08/eoxcgdyjwyn61-e1629090869423.jpg",
  },
  {
    id: "3",
    name: "Dune",
    logo: "https://upload.wikimedia.org/wikipedia/id/5/5e/DunePartPost2021.jpg",
  },
  {
    id: "4",
    name: "Apocalypse Now",
    logo: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p5545_p_v13_at.jpg",
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        data={DATA}
        numColumns={2}
        renderItem={({ item }) => <FilmCard item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});