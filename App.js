import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import getTheme from './native-base-theme/components';
import { Container, Content, Text, StyleProvider } from 'native-base';
import platform from './native-base-theme/variables/platform';

import { useFonts } from 'expo-font';

export default function App() {
  const [loaded, error] = useFonts({ 
    Roboto: require('./assets/fonts/roboto/Roboto.ttf'),
    RobotoLight: require('./assets/fonts/roboto/RobotoLight.ttf'),
    RobotoMedium: require('./assets/fonts/roboto/RobotoMedium.ttf'),

    HelveticaRegular: require('./assets/fonts/helvetica/HelveticaNeueRegular.otf'),
    HelveticaMedium: require('./assets/fonts/helvetica/HelveticaNeueMedium.otf'),
    HelveticaLight: require('./assets/fonts/helvetica/HelveticaNeueLight.otf'),
    HelveticaBold: require('./assets/fonts/helvetica/HelveticaNeueBold.otf'),
   });

  if (!loaded) {
    return null;
  }

  return (
    <StyleProvider style={getTheme(platform)}>
    <Container>
      <Content>
        <Text>
          I have changed the text color.
        </Text>
      </Content>
    </Container>
  </StyleProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
