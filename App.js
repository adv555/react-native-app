import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const image = require("./assets/wallpaper.jpg");
  // console.log(Platform.OS);
  const initialState = {
    email: "",
    password: "",
  };

  const loadApplication = async () => {
    await Font.loadAsync({
      "DMMono-Regular": require("./assets/fonts/DMMono-Regular.ttf"),
    });
  };

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isReady, setIsReady] = useState(false);
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      console.log(width);
    };
    const subscription = Dimensions.addEventListener("change", onChange);
    return () => {
      // Dimensions.removeEventListener("change", onChange);
      subscription?.remove();
    };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();

    console.log(state);
    setState(initialState);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <ImageBackground source={image} style={styles.image}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.header}>
              <Text style={styles.title}>React Native</Text>
              <Text style={styles.subTitle}>That's my new App!</Text>
            </View>
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? 50 : 100,
                width: dimensions,
              }}
            >
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                textAlign={"center"}
                inlineImageLeft="search_icon"
                onFocus={() => setIsShowKeyboard(true)}
                value={state.email}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
              />

              <View style={{ marginVertical: 20 }}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  inlineImageLeft="search_icon"
                  secureTextEntry={true}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
              </View>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={keyboardHide}
              >
                <Text style={styles.buttonTitle}>SIGN IN</Text>
              </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
          </KeyboardAvoidingView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    marginBottom: 150,
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    // textAlign: "center",
  },
  subTitle: {
    fontSize: 30,
    color: "#eee",
    fontWeight: "normal",
    // textAlign: "center",
    marginBottom: 15,
  },
  image: {
    flex: 1,
    // justifyContent: "center",
    justifyContent: "flex-end",
    resizeMode: "cover",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 5,
    height: 40,
    borderColor: "#f0f8ff",
    color: "#f0f8ff",
  },
  form: {
    // marginHorizontal: 40,
    marginBottom: 100,
  },
  label: {
    fontFamily: "DMMono-Regular",
    fontSize: 18,
    marginBottom: 10,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "left",
  },
  button: {
    fontFamily: "DMMono-Regular",
    alignItems: "center",
    marginHorizontal: 40,
    marginTop: 30,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    // backgroundColor: Platform.OS === "ios" ? "transparent" : "#ffb6c1",
    // borderColor: Platform.OS === "ios" ? "#f0f8ff" : "transparent",
    ...Platform.select({
      ios: {
        backgroundColor: "transparent",
        borderColor: "#f0f8ff",
      },
      android: {
        backgroundColor: "#ffb6c1",
        borderColor: "transparent",
      },
    }),
  },
  buttonTitle: {
    color: Platform.OS === "ios" ? "#483d8b" : "#f0f8ff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
