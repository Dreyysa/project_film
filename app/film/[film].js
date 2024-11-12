import { View, Text, Image } from "react-native-web";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FilmCard from "../../components/FilmCard";

const DATA = [
  {
    id: "1",
    name: "Fight club",
    logo: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg",
    text: "orang gila gelut",
  },
  {
    id: "2",
    name: "Evangelion 3.0 + 1.0",
    logo: "https://cinemags.org/wp-content/uploads/2021/08/eoxcgdyjwyn61-e1629090869423.jpg",
    text: "film gay pt.3",
  },
  {
    id: "3",
    name: "Dune",
    logo: "https://upload.wikimedia.org/wikipedia/id/5/5e/DunePartPost2021.jpg",
    text: "arab",
  },
  {
    id: "4",
    name: "Apocalypse Now",
    logo: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p5545_p_v13_at.jpg",
    text: "orang gila perang",
  },
];

const FilmDetail = () => {
    const { film } = useLocalSearchParams();
    const selectedFilm = DATA.filter(function (item) {
      return item.name === film;
    });
  
    console.log(selectedFilm);
  
    return (
      <SafeAreaView
        style={{
          backgroundColor: "grey",
          flex: 1,
          // flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FilmCard item={selectedFilm[0]} />
      </SafeAreaView>
    );
  };
  
  export default FilmDetail;