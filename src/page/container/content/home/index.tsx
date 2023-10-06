import React from "react";
import { ScrollView, View } from "react-native";
import CardHome, { CardHomeProps } from "./card";
import { listCard } from "./utils";
import { styles } from "./styled";

const Home: React.FC = () => {
  return (
    <ScrollView
      style={styles.root}
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