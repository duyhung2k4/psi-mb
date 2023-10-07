import React from "react";
import { View } from "react-native";
import CardHome, { CardHomeProps } from "./card";
import { listCard } from "./utils";
import { styles } from "./styled";
import OverlayHeader from "../../../../components/OverlayHeader";

const Home: React.FC = () => {
  return (
    <OverlayHeader>
      <View
        style={styles.root}
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
      </View>
    </OverlayHeader>
  )
}

export default Home;