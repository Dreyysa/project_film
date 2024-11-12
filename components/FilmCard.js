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
      <View className="p-4 m-2 rounded-md bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ">
        <Image
            className="rounded-x1"
          source={{
            uri: item.logo,
            height: 300,
            width: 200,
          }}
        />
        <Text className="text-center font-bold text-white font-mono text-sm">
        {item.id}. {item.name}
        </Text>
        <Text className="text-center font-bold text-white font-mono text-sm">
            {item.text}
        </Text>
      </View>
    </Link>
  );
};
export default FilmCard;