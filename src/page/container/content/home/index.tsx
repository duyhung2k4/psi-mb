import { Card, Text } from "@rneui/base";
import React from "react";
import { ScrollView, View, Dimensions } from "react-native";

const Home: React.FC = () => {
  return (
    <ScrollView
      style={{
        width: "100%",
      }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      {[1, 2, 3, 4, 5].map((n: number) =>
        <Card
          key={n}
          containerStyle={{
            height: 150,
            marginTop: 20,
            marginBottom: n === 5 ? 20 : 0,
            backgroundColor: "blue",
            borderRadius: 8,
          }}
        >
          <View 
            style={{ 
              height: "100%", 
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}>
            <View
              style={{
                height: "100%",
                flex: 1,
                backgroundColor: "gray",
                borderRadius: 8,
              }}
            ></View>
            <View
              style={{
                height: "100%",
                flex: 3,
                backgroundColor: "red",
              }}
            ></View>
          </View>
        </Card>
      )}
    </ScrollView>
  )
}

export default Home;