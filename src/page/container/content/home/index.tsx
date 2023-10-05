import React from "react";
import { ScrollView, View } from "react-native";
import CardHome, { CardHomeProps } from "./card";
import { listCard } from "./utils";

const Home: React.FC = () => {
  return (
    <ScrollView
      style={{
        width: "100%",
        paddingLeft: 10,
        paddingRight: 10,
      }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      {
        listCard.map((c: CardHomeProps, index: number) =>
          <View
            style={{
              width: "100%",
              marginTop: 20,
              marginBottom: index === listCard.length - 1 ? 20 : 0,
            }}
            key={index}
          >
            <CardHome
              {...c}
            />
          </View>
        )
      }
    </ScrollView>
  )
}

export default Home;