import {View, Text, Button} from 'react-native';
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
  return <View>
    <Button title='Start Rec'/>
  </View>;
}
