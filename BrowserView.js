import * as React from "react";

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { WebView } from "react-native-webview";

const BackButton = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => {
      navigation.goBack();
    }}
  >
    <Text>&lt; Back</Text>
  </TouchableOpacity>
);

const BrowserView = ({ navigation, route }) => {
  //for url from the home comp
  const { url } = route.params;
  const webviewRef = React.useRef(null);

  function webViewgoback() {
    if (webviewRef.current) webviewRef.current.goBack();
  }

  function webViewNext() {
    if (webviewRef.current) webviewRef.current.goForward();
  }

  function LoadingIndicatorView() {
    return (
      <ActivityIndicator
        color="#009b88"
        size="large"
        style={styles.ActivityIndicatorStyle}
      />
    );
  }

  return (
    <>
      <SafeAreaView style={styles.flexContainer}>
        <View style={styles.tabBarContainer}>
          <TouchableOpacity onPress={webViewgoback} disabled={webviewRef === "null"}>
          {/* <BackButton navigation={navigation} />  */}
            <Text style={{ color: "black" }}>&lt; Back</Text>
          </TouchableOpacity>
          
          
          
          {/*
          <TouchableOpacity onPress={webViewgoback}>
            <Text style={{ color: "black", fontSize: 20 }}>&lt;
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={{ color: "black" }}>Exit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={webViewNext}>
            <Text style={{ color: "black" }}>Next</Text>
          </TouchableOpacity> */}
        </View>

        <WebView
          source={{
            uri: url,
          }}
          renderLoading={LoadingIndicatorView}
          startInLoadingState={true}
          ref={webviewRef}
          style={{ flex: 1 }}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 200,
  },
  flexContainer: {
    flex: 1,
  },
  tabBarContainer: {
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  button: {
    fontSize: 24,
  },
  arrow: {
    color: "#ef4771",
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default BrowserView;

/* import * as React from "react";

import { View, TouchableOpacity, Text } from "react-native";
import { WebView } from 'react-native-webview';


const BackButton = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => {
      navigation.goBack();
    }}
  >
    <Text>&lt; Back</Text>
  </TouchableOpacity>
);

const BrowserView = ({ navigation, route }) => {

  const { url } = route.params

  const navigationOptions = () => ({
    title: "BrowserView",
    headerLeft: <BackButton navigation={navigation} />,
  });

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{
          uri: url,
        }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default BrowserView; */
