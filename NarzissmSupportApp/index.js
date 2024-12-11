/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App'; // Hauptkomponente Ihrer App
import { name as appName } from './app.json'; // App-Name aus app.json

// Hauptkomponente registrieren
AppRegistry.registerComponent(appName, () => App);
