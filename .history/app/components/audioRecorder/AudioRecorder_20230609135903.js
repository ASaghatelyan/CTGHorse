import {View, Text, Button, Platform, PermissionsAndroid} from 'react-native';
import React, {useState} from 'react';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const audioRecorderPlayer = new AudioRecorderPlayer();
export function AudioRecorder() {
  const [isLoadingIn, setIsLoadingIn] = useState(false);
  const [recordSecs, setRecordSecs] = useState(0);
  const [recordTime, setRecordTime] = useState('00:00:00');
  const [currentPositionSec, setCurrentPositionSec] = useState(0);
  const [currentDurationSec, setCurrentDurationSec] = useState(0);
  const [playTime, setPlayTime] = useState('00:00:00');
  const [duration, setDuration] = useState('00:00:00');
  interface AudioSet {
    AVSampleRateKeyIOS?: number;
    AVFormatIDKeyIOS?: AVEncodingType;
    AVModeIOS?: AVModeType;
    AVNumberOfChannelsKeyIOS?: number;
    AVEncoderAudioQualityKeyIOS?: AVEncoderAudioQualityIOSType;
    AudioSourceAndroid?: AudioSourceAndroidType;
    OutputFormatAndroid?: OutputFormatAndroidType;
    AudioEncoderAndroid?: AudioEncoderAndroidType;
  }

  let onStartRecord = async () => {
    if (Platform.OS === 'android') {
      try {
        const grants = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);

        console.log('write external stroage', grants);

        if (
          grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.READ_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
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
      setRecordTime(
        this.audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
      );
      return;
    });
    console.log(result);
  };

  let onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();

    setRecordSecs(0);

    console.log(result);
  };

  let onStartPlay = async () => {
    console.log('onStartPlay');
    const msg = await this.audioRecorderPlayer.startPlayer();
    console.log(msg);
    this.audioRecorderPlayer.addPlayBackListener(e => {
      this.setState({
        currentPositionSec: e.currentPosition,
        currentDurationSec: e.duration,
        playTime: this.audioRecorderPlayer.mmssss(
          Math.floor(e.currentPosition),
        ),
        duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
      });
      return;
    });
  };

  let onPausePlay = async () => {
    await this.audioRecorderPlayer.pausePlayer();
  };

  let onStopPlay = async () => {
    console.log('onStopPlay');
    this.audioRecorderPlayer.stopPlayer();
    this.audioRecorderPlayer.removePlayBackListener();
  };
  return (
    <View>
      <Button title="Start Rec" onPress={onStartRecord} />
      <Button title="Stop Rec" onPress={onStopRecord} />
      <Button title="Play " onPress={onStartPlay} />
      <Button title="Stop" onPress={onStopPlay} />
      <Button title="Paus" onPress={onPausePlay} />
    </View>
  );
}
