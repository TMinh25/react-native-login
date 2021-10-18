import React from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";

export default function RegisterScreen({ navigation }) {
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Tạo tài khoản</Header>
      <TextInput placeholder="Họ và tên" />
      <TextInput placeholder="Email" keyboardType="email-address" />
      <TextInput placeholder="Mật khẩu" secureTextEntry />
      <Button
        mode="contained"
        onPress={() => {
          Alert.alert("Đăng kí thành công", "", [
            { text: "OK", onPress: () => navigation.replace("LoginScreen") },
          ]);
        }}
        style={{ marginTop: 24 }}
      >
        Đăng kí
      </Button>
      <View style={styles.row}>
        <Text>Bạn đã có tài khoản? </Text>
        <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
          <Text style={styles.link}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
