import { Link } from "expo-router";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FilmCard from "../../components/FilmCard";
import { useState } from "react";

const CATEGORIES = [
  {
    id: 1,
    name: "Aksi",
  },
  {
    id: 2,
    name: "Gay",
  },
  {
    id: 3,
    name: "Gila",
  },
  {
    id: 4,
    name: "ayam",
  }
];

const DATA = [
  {
    id: "1",
    category_id: "1",
    name: "Fight club",
    logo: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg",
  },
  {
    id: "2",
    category_id: "2",
    name: "Evangelion 3.0 + 1.0",
    logo: "https://cinemags.org/wp-content/uploads/2021/08/eoxcgdyjwyn61-e1629090869423.jpg",
  },
  {
    id: "3",
    category_id: "4",
    name: "Dune",
    logo: "https://upload.wikimedia.org/wikipedia/id/5/5e/DunePartPost2021.jpg",
  },
  {
    id: "4",
    category_id: "3",
    name: "Apocalypse Now",
    logo: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p5545_p_v13_at.jpg",
  },
  {
    id: "5",
    category_id: "3",
    name: "Oldboy",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/67/Oldboykoreanposter.jpg",
  },
  {
    id: "6",
    category_id: "1",
    name: "1917",
    logo: "https://upload.wikimedia.org/wikipedia/id/a/ae/1917_film_poster.jpg",
  },
  {
    id: "7",
    category_id: "3",
    name: "2001: a space odyssey",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/2001_A_Space_Odyssey_%281968%29.png/220px-2001_A_Space_Odyssey_%281968%29.png",
  },
  {
    id: "8",
    category_id: "1",
    name: "waterloo",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/e6/Waterloo_1970_poster.jpg",
  },
  {
    id: "9",
    category_id: "4",
    name: "shin godzilla",
    logo: "https://www.pifff.fr/2017/images/181/affiche.jpg",
  },
  { 
    id: "10",
    category_id: "2",
    name: "Parasite",
    logo:"https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png"
  },
];

export default function HomeScreen() {
  const [movies, setMovies] = useState(DATA);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filterMoviesS = (category) => {
    setSelectedCategory(category);
    if (category) {
      const filteredMovies = DATA.filter((movie) => movie.category_id === category.toString());
      setMovies(filteredMovies);
    } else {
      setMovies(DATA); // Show all movies if no category is selected
    }
  };

  return (
    <SafeAreaView className="p-4">
      <FlatList
        data={CATEGORIES}
        horizontal
        renderItem={({ item }) => (
          <Pressable onPress={() => filterMoviesS(item.id)}>
            <Text
              className={`m-2 border p-2 rounded-xl ${selectedCategory === item.id ? "bg-blue-500 text-white" : ""}`}
            >
              {item.name}
            </Text>
          </Pressable>
        )}
        className="space-x-4"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
      />
      <FlatList
        data={movies}
        numColumns={6}
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