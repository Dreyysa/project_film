import { View, Text, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

const FilmCard = ({ item }) => {
  return (
    <Link
      href={{
        pathname: "/film/[film]",
        params: { film: item.name },
      }}
    >
      <View>
        <Image
          source={{
            uri: item.logo,
            height: 150,
            width: 150,
          }}
        />
        <Text style={{ fontWeight: "bold" }}>
          {item.name}+ {item.id}
        </Text>
      </View>
    </Link>
  );
};

export default FilmCard;