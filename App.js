import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./components/Home";

import {ApplicationProvider} from "@ui-kitten/components"
import * as eva from "@eva-design/eva"
import {default as evaDarkTheme} from "./themes/eva-dark-theme.json";
import {default as evaLightTheme} from "./themes/eva-light-theme.json";

const customDarkTheme = {...eva.dark, ...evaDarkTheme};
const defaultLight = {...eva.light, ...evaLightTheme};
const themes = {defaultLight, customDarkTheme};

/**
 * Follow tutorial below: 
 * https://medium.com/akveo-engineering/how-to-implement-dark-mode-in-react-native-app-7f22a47a1fef
 * https://justinnoel.dev/2019/12/21/create-universal-react-native-apps-using-expo-for-web-and-ui-kitten/
 * https://akveo.github.io/react-native-ui-kitten/docs/getting-started/where-to-start#where-to-start
 * 
 */
export default function App() {

  const [theme, setTheme] = useState(defaultLight);

  const toggleTheme = () => {  
    const nextTheme = theme === defaultLight ? customDarkTheme  : defaultLight;
    setTheme(nextTheme);
  }

  return (
    //<ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
    <ApplicationProvider mapping={eva.mapping} theme={theme}>
      <View style={styles.container}>
        <Home toggleTheme={toggleTheme} />
      </View>
    </ApplicationProvider> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

