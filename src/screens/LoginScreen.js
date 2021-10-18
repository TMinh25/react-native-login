import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";

export default function LoginScreen({ navigation }) {
  return (
    <Background>
        <BackButton goBack={navigation.goBack} />
        <Logo />
        <Header>Đăng nhập</Header>
        <TextInput placeholder="Email" keyboardType="email-address" />
        <TextInput placeholder="Mật khẩu" secureTextEntry />
        <View style={styles.forgotPassword}>
          <TouchableOpacity>
            <Text style={styles.forgot}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("HomeScreen")}
        >
          Đăng nhập
        </Button>
        <View style={styles.row}>
          <Text>Bạn chưa có tài khoản? </Text>
          <TouchableOpacity
            onPress={() => navigation.replace("RegisterScreen")}
          >
            <Text style={styles.link}>Đăng kí</Text>
          </TouchableOpacity>
        </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
