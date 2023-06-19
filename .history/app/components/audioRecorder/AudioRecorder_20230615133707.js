import {View, Text, Button, Platform, PermissionsAndroid} from 'react-native';
import React, {useRef, useState} from 'react';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
  PlayBackType,
  RecordBackType,
} from 'react-native-audio-recorder-player';
import Slider from '@react-native-community/slider'; 
import {styles} from './style';
import send from 'app/assets/img/send.png';


const audioRecorderPlayer = new AudioRecorderPlayer();
export function AudioRecorder({onRecord}) {
  const [lowPrice, setLowPrice] = useState(1);
  const [isLoadingIn, setIsLoadingIn] = useState(false);
  const [recordSecs, setRecordSecs] = useState(0);
  const [recordTime, setRecordTime] = useState('00:00:00');
  const [currentPositionSec, setCurrentPositionSec] = useState(0);
  const [currentDurationSec, setCurrentDurationSec] = useState(0);
  const [playTime, setPlayTime] = useState('00:00:00');
  const [duration, setDuration] = useState('00:00:00');
  const sliderRef = useRef();


  
  let onStartRecord = async () => {
    if (Platform.OS === 'android') {
      try {
        const grants = await PermissionsAndroid.requestMultiple([
          // PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          // PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);
        console.log('write external stroage', grants);
        if (
          // grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
          //   PermissionsAndroid.RESULTS.GRANTED &&
          // grants['android.permission.READ_EXTERNAL_STORAGE'] ===
          //   PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.RECORD_AUDIO'] ===
          PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log('permissions granted');
        } else {
          console.log('All required permissions not granted');
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }

    const result = await audioRecorderPlayer.startRecorder();
    audioRecorderPlayer.addRecordBackListener(e => {
      setRecordSecs(e.currentPosition);
      setRecordTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
      return;
    });
    console.log(result);
  };

  //   if (Platform.OS === 'android') {
  //     try {
  //       const grants = await PermissionsAndroid.requestMultiple([
  //         // PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //         // PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  //         PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
  //       ]);

  //       console.log('write external stroage', grants);

  //       if (
  //         // grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
  //         //   PermissionsAndroid.RESULTS.GRANTED &&
  //         // grants['android.permission.READ_EXTERNAL_STORAGE'] ===
  //         //   PermissionsAndroid.RESULTS.GRANTED &&
  //         grants['android.permission.RECORD_AUDIO'] ===
  //         PermissionsAndroid.RESULTS.GRANTED
  //       ) {
  //         console.log('permissions granted');
  //       } else {
  //         console.log('All required permissions not granted');
  //         return;
  //       }
  //     } catch (err) {
  //       console.warn(err);
  //       return;
  //     }
  //   }

  //   const audioSet: AudioSet = {
  //     AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
  //     AudioSourceAndroid: AudioSourceAndroidType.MIC,
  //     AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
  //     AVNumberOfChannelsKeyIOS: 2,
  //     AVFormatIDKeyIOS: AVEncodingOption.aac,
  //   };

  //   const uri = await audioRecorderPlayer.startRecorder(undefined, audioSet);
  //   console.log(uri, 'uri');
  // };

  let onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setRecordSecs(0);
    console.log(result);
  };

  let onStartPlay = async () => {
    console.log('onStartPlay');
    const msg = await audioRecorderPlayer.startPlayer();
    audioRecorderPlayer.addPlayBackListener(e => {
      setCurrentPositionSec(e.currentPosition);
      setCurrentDurationSec(e.duration);
      setPlayTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
      setDuration(audioRecorderPlayer.mmssss(Math.floor(e.duration)));
      return;
    });
  };

  let onPausePlay = async () => {
    await audioRecorderPlayer.pausePlayer();
  };

  let onSliderEditing = value => {
    setCurrentPositionSec(value);
    audioRecorderPlayer.seekToPlayer(value);
  };

  let onStopPlay = async () => {
    console.log('onStopPlay');
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  };

  return (
    <View style={styles.audioView}>
      <View style={{flexDirection:'row'}}>
        <Button title="Start Rec" onPress={onStartRecord} color={'red'}/>
        <Button title="Stop Rec" onPress={onStopRecord}  color={'black'}/>
        <Button title="Play " onPress={onStartPlay}  color={'red'}/>
        <Button title="Stop" onPress={onStopPlay}  color={'grey'}/>
        <Button title="Pause" onPress={onPausePlay}  color={'green'}/>
      </View>
      <View style={{paddingHorizontal: 22}}>
        <Slider
          ref={sliderRef}
          style={{width: '100%', height: 20}}
          minimumValue={0}
          maximumValue={currentDurationSec}
          value={currentPositionSec}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={values => onSliderEditing(values)}
        />
        <View style={styles.timeView}>
          <Text style={styles.lText}>{playTime}</Text>
          <Text style={styles.rText}>{recordTime}</Text>
        </View>
      </View>
    </View>
  );
}
