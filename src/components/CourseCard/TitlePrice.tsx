import React from "react";
import { styles } from "./styled";
import { View } from "react-native";
import { Text } from "@rneui/base";

interface TitlePriceProps {
  price: number
}
const TitlePrice: React.FC<TitlePriceProps> = (props) => {
  return (
    <View style={styles.titlePrice}>
      <Text
        style={{
          color: "#00c638",
          fontSize: 16,
          fontWeight: "700",
        }}
      >Giá: </Text>
      <Text>{props.price} <Text style={{ fontWeight: "800" }}>VND</Text></Text>
    </View>
  )
}

export default TitlePrice