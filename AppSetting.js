import React from "react";
import { View, Text, StyleSheet, SafeAreaView,TouchableOpacity } from "react-native";

const AppSetting = () => {

  const webviewRef = React.useRef(null);

  function webViewgoback() {
    if (webviewRef.current) webviewRef.current.goBack();
  }

  return (
    <>
      <SafeAreaView style={styles.flexContainer}>
        <View style={styles.tabBarContainer}>
          <TouchableOpacity onPress={webViewgoback}>
            <Text style={{ color: "black", fontSize: 20 }}>&lt;</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={styles.bold}>Option 1</Text>
          <Text style={styles.text}>
            Switch apps to the device's web browser:
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 40,
  },
  flexContainer: {
    flex: 1,
  }
});
export default AppSetting;
