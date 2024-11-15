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
  {
    id: "5",
    name: "Oldboy",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/67/Oldboykoreanposter.jpg",
    text: "film keluarga",
  },
  {
    id: "6",
    name: "1917",
    logo: "https://upload.wikimedia.org/wikipedia/id/a/ae/1917_film_poster.jpg",
    text: "perang pt.1",
  },
  {
    id: "7",
    name: "2001: a space odyssey",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/2001_A_Space_Odyssey_%281968%29.png/220px-2001_A_Space_Odyssey_%281968%29.png",
    text: "luar angkasa",
  },
  {
    id: "8",
    name: "waterloo",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/e6/Waterloo_1970_poster.jpg",
    text: "perang kakek-kakek",
  },
  {
    id: "9",
    name: "shin godzilla",
    logo: "https://www.pifff.fr/2017/images/181/affiche.jpg",
    text: "iguana raksasa lepas"
  },
  { 
    id: "10",
    name: "Parasite",
    logo:"https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png"
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