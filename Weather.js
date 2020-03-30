import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOpts = {
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#BA8B02", "#181818"],
    title: "What the fuck? Thunderstorm?",
    subtitle: "Don't go outside, please!!"
  },
  Drizzle: {
    iconName: "weather-fog",
    gradient: ["#304352", "#d7d2cc"],
    title: "Drizzle-rizzle",
    subtitle: "Fucking my glasses!!"
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#136a8a", "#267871"],
    title: "Good to see you, Rain!",
    subtitle: "Let's have a cup of tea and watch the window outside"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#e6dada", "#274046"],
    title: "Yeah, it's snowing!!",
    subtitle: "This is a trash from the sky..."
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#00d2ff", "#3a7bd5"],
    title: "Sunny😊",
    subtitle: "Let's have some walk with lover❤"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#5f2c82", "49a09d"],
    title: "Where's the sun??",
    subtitle: "There is always sun behind the clouds"
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#304352", "#d7d2cc"],
    title: "Mist?",
    subtitle: "Is it cosmetic?"
  },
  Haze: {
    iconName: "weather-fog",
    gradient: ["#304352", "#d7d2cc"],
    title: "Can't breathe!!",
    subtitle: "Watch out your throat"
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#304352", "#d7d2cc"],
    title: "I can't see anything",
    subtitle: "Open your eyes"
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOpts[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOpts[condition].iconName}
          size={106}
          color="white"
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOpts[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOpts[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Clear",
    "Clouds",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 40,
    color: "white"
  },
  title: { color: "white", fontSize: 44, fontWeight: "300", marginBottom: 10 },
  subtitle: { color: "white", fontSize: 24, fontWeight: "600" },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
  }
});
