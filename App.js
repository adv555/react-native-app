import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";

export default function App() {
  const image = require("./assets/wallpaper.jpg");
  console.log(Platform.OS);
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.title}>React Native</Text>
        <Text style={styles.subTitle}>That's my new App!</Text>
        <View style={styles.form}>
          <View>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              textAlign={"center"}
              inlineImageLeft="search_icon"
            />
          </View>
          <View style={{ marginVertical: 20 }}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              textAlign={"center"}
              inlineImageLeft="search_icon"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.buttonTitle}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 30,
    color: "#eee",
    fontWeight: "normal",
    textAlign: "center",
    marginBottom: 15,
  },
  image: {
    flex: 1,
    // justifyContent: "center",
    justifyContent: "flex-start",
    resizeMode: "cover",
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 5,
    height: 40,
    borderColor: "#f0f8ff",
    color: "#f0f8ff",
  },
  form: {
    marginHorizontal: 25,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "left",
  },
  button: {
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: Platform.OS === "ios" ? "transparent" : "#ffb6c1",
    marginTop: 30,
    padding: 10,
    borderColor: Platform.OS === "ios" ? "#f0f8ff" : "transparent",
    borderRadius: 8,
    marginHorizontal: 40,
    // backgroundColor: "#ff6347",
  },
  buttonTitle: {
    color: Platform.OS === "ios" ? "#4169e1" : "#f0f8ff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
