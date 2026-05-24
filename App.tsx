import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  Keyboard,
  StatusBar,
  TouchableWithoutFeedback,
  useColorScheme,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { useNavBarTheme } from './src/utils/useNavBarTheme';

const App = () => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? 'dark' : 'light';

  useNavBarTheme(theme);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <NavigationContainer>
            <StatusBar
              barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
            />
            <AppNavigator />
          </NavigationContainer>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
