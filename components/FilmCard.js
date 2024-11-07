import { View, Text, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

const FilmCard = ({ item }) => {
  return (
    <Link
      href={{
        pathname: "/team/[team]",
        params: { team: item.name },
      }}
    >
      <View>
        <Image
          source={{
            uri: item.logo,
            height: 300,
            width: 200,
          }}
        />
        <Text style={{ fontWeight: "bold" }}>
        {item.id} + {item.name}
        </Text>
      </View>
    </Link>
  );
};
export default FilmCard;