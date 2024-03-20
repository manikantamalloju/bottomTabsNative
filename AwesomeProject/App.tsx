import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import BottomTabs from './src/BottomTabs';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'}></StatusBar>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
