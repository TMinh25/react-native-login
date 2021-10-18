import React from "react";
import { SafeAreaView } from "react-native";
import Background from "../components/Background";
import Button from "../components/Button";
import { ProductsList } from "./ProductsList";

export default function Home({ navigation }) {
  return (
    <Background>
        <ProductsList />
        <Button
          mode="outlined"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: "LoginScreen" }],
            })
          }
        >
          Đăng xuất
        </Button>
    </Background>
  );
}
