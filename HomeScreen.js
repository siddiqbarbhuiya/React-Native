import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  ImageBackground
} from "react-native";

const HomeScreen = ({ navigation }) => {
  const webviewRef = React.useRef(null);

  const option1 = () => {
    Linking.openURL("https://warm-manatee-5de0df.netlify.app/");
  };

  const option2 = () => {
    navigation.navigate("Browser", {
      url: "https://warm-manatee-5de0df.netlify.app/",
    });
  };

  const option3 = () => {
    navigation.navigate("Browser", {
      url: "https://myportfolio-pwa.netlify.app/",
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground></ImageBackground>
      <Text style={styles.bold}>Option 1</Text>
      <Text style={styles.text}>Switch apps to the device's web browser:</Text>

      <TouchableOpacity onPress={option1}>
        <Text style={styles.link}>Link to PWA1</Text>
      </TouchableOpacity>

      <Text style={styles.bold}>Option 2</Text>
      <Text style={styles.text}>Showing a webpage directly in the app:</Text>

      <TouchableOpacity onPress={option2}>
        <Text style={styles.link}>Link to PWA 1</Text>
      </TouchableOpacity>

      <Text style={styles.bold}>Option 2</Text>
      <Text style={styles.text}>Showing a webpage directly in the app:</Text>

      <TouchableOpacity onPress={option3}>
        <Text style={styles.link}>PWA 2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 40,
  },
  text: {
    fontSize: 16,
    margin: 20,
    marginBottom: 0,
  },
  bold: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 40,
  },
  link: {
    margin: 20,
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
  },
});
