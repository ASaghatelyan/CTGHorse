/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { PlaybackService } from 'app/constant/PlaybackService';
PlaybackService
AppRegistry.registerComponent(appName, () => App);
