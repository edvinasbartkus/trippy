import { registerRootComponent } from 'expo';
import Amplify from 'aws-amplify';
import awsconfig from './src/aws-exports';
import 'react-native-gesture-handler';

Amplify.configure(awsconfig);

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
