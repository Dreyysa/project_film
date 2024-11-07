import { View, Text, Image } from "react-native-web";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

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
];

const FilmDetail = () => {
    const { film } = useLocalSearchParams();
  
    // Find the team by matching the 'name' with 'film' parameter
    const selectedFilm = DATA.find(item => item.name === film);
  
    const Item = ({ item }) => (
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 10 }}>
          {item.name}
        </Text>
        <Image
          source={{
            uri: item.logo,
          }}
          style={{
            height: 150,
            width: 150,
            resizeMode: "cover",
            borderRadius: 10,
          }}
        />
      </View>
    );
  
    return (
      <SafeAreaView
        style={{
          backgroundColor: "white",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {selectedFilm ? (
          <Item item={selectedFilm} />
        ) : (
          <Text>Film not found</Text>
        )}
      </SafeAreaView>
    );
  };
  
  export default FilmDetail;