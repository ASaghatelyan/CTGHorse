import {
  View,
  Text,
  Button,
  Platform,
  PermissionsAndroid,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
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
import send from 'app/assets/img/sendRec.png';
import rec from 'app/assets/img/mic.png';
import stop from 'app/assets/img/stopRec.png';
import play from 'app/assets/img/playRec.png';
import pause from 'app/assets/img/pauseRec.png';
import close from 'app/assets/img/closeRec.png';

export function AudioRecorder({sendVoice, onCloseRec}) {
  const audioRecorderPlayer = new AudioRecorderPlayer();
  const [recStop, setRecStop] = useState(false);
  const [playPause, setPlayPause] = useState(false);
  const [isLoadingIn, setIsLoadingIn] = useState(false);
  const [res, setRes] = useState('');
  const [recordSecs, setRecordSecs] = useState(0);
  const [recordTime, setRecordTime] = useState('00:00:00');
  const [currentPositionSec, setCurrentPositionSec] = useState(0);
  const [currentDurationSec, setCurrentDurationSec] = useState(0);
  const [playTime, setPlayTime] = useState('00:00:00');
  const [duration, setDuration] = useState('00:00:00');
  const sliderRef = useRef();

  useEffect(() => {
    console.log('dddd');
    return () => {};
  }, []);

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
    setRecStop(!recStop);
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
    setRecStop(!recStop);
    console.log(result);
    setRes(result);
  };

  let onStartPlay = async () => {
    console.log('onStartPlay');
    const msg = await audioRecorderPlayer.startPlayer();
    audioRecorderPlayer.addPlayBackListener(e => {
      setCurrentPositionSec(e.currentPosition);
      setCurrentDurationSec(e.duration);
      setPlayTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
      setDuration(audioRecorderPlayer.mmssss(Math.floor(e.duration)));
      if (e.duration === e.currentPosition) {
        console.log(e.duration == e.currentPosition);
        setPlayPause(false);
        setPlayTime('00:00:00');
        setCurrentDurationSec(0);
      }
      return;
    });
    setPlayPause(!playPause);
  };

  let onPausePlay = async () => {
    await audioRecorderPlayer.pausePlayer();
    setPlayPause(!playPause);
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
        }}>
        <View style={{width: '90%'}}>
          <View style={{height: 30}}>
            <Slider
              ref={sliderRef}
              style={{width: '95%', height: 22}}
              minimumValue={0}
              maximumValue={currentDurationSec}
              value={currentPositionSec}
              minimumTrackTintColor="#E9A13A"
              maximumTrackTintColor="#000000"
              thumbTintColor="#E9A13A"
              onValueChange={values => onSliderEditing(values)}
            />
          </View>
          <View style={styles.timeView}>
            <Text style={styles.lText}>{playTime}</Text>
            <View style={styles.buttonView}>
              {!recStop ? (
                <TouchableOpacity onPress={onStartRecord}>
                  <Image source={rec} style={styles.icon} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={onStopRecord}>
                  <Image source={stop} style={styles.icon} />
                </TouchableOpacity>
              )}
              {!recStop ? (
                !playPause ? (
                  <TouchableOpacity onPress={onStartPlay}>
                    <Image source={play} style={styles.icon} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={onPausePlay}>
                    <Image source={pause} style={styles.icon} />
                  </TouchableOpacity>
                )
              ) : null}
              {!recStop && (
                <TouchableOpacity
                  onPress={() => {
                    onCloseRec();
                    setRes('')
                  }}>
                  <Image source={close} style={styles.icon} />
                </TouchableOpacity>
              )}
            </View>
            <Text style={styles.rText}>{recordTime}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => sendVoice(res)}>
          <Image source={send} style={styles.send} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
