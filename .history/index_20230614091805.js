/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {PlaybackService} from 'app/constant/PlaybackService';
import TrackPlayer from 'react-native-track-player';

AppRegistry.registerComponent(appName, () => App); 
