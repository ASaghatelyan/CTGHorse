import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Sound from 'react-native-sound';
Sound.setCategory('Playback', true);
import play from 'app/assets/img/pl.png';
import pause from 'app/assets/img/pause.png';
import {styles} from './style';
import Slider from '@react-native-community/slider';
let whoosh = new Sound();

export function AudioPlayer({url, id, stopMusic}) {
  const [playStop, setPlayStop] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playSeconds, setPlaySeconds] = useState(0);
  const [timers, setTimers] = useState(null);

  //   let whoosh = new Sound(url, null);
  let startPlaying = () => {
    whoosh.play();
    setIsPlaying(true);
    console.warn('Now playing');
  };

  let stopPlaying = () => {
    whoosh.pause();
    setIsPlaying(false);
    console.warn('Now paused');
  };

  let onPlay = () => {
    whoosh._duration === playSeconds && setPlaySeconds(0);
    setIsPlaying(!isPlaying);
    // const info = await SoundPlayer.getInfo();
    let timer = setInterval(() => {
      whoosh.getCurrentTime(seconds => {
        setPlaySeconds(seconds);
        if (whoosh._duration === seconds) {
          clearInterval(timer);
          global.whoosh.stop(() => {});
          setPlay(true);
        }
      });
    }, 1000);
    if (!isPlaying) {
        // SoundPlayer.play();
        // _onFinishedPlayingSubscription = SoundPlayer.addEventListener(
        //   'FinishedPlaying',
        //   () => {
        //     setPlay(true);
        //   },
        // );
        whoosh.play();
      } else if (isPlaying) {
        // SoundPlayer.pause();
        whoosh.pause();
      }
      // else if(global?.whoosh._duration===playSeconds){
      //   setPlaySeconds(0);
      // }
      setTimers(timer);
      return;
    if (!isPlaying) {
      whoosh = new Sound(`${url}`, null, startPlaying);
    } else {
      return stopPlaying();
    }
  };

  let onSliderEditing = value => {
    if (whoosh) {
      whoosh.setCurrentTime(value);
      setPlaySeconds(Math.trunc(value));
    }
  };
  return (
    <View style={{width: '100%'}}>
      <TouchableOpacity onPress={onPlay}>
        <Image source={isPlaying ? pause : play} style={styles.play} />
      </TouchableOpacity>
      <Slider
        style={{flex: 1}}
        minimumValue={0}
        value={playSeconds}
        thumbTintColor={'#E9A13A'}
        maximumValue={whoosh?._duration}
        minimumTrackTintColor={'#E9A13A'}
        maximumTrackTintColor="#000000"
        onValueChange={values => onSliderEditing(values)}
      />
    </View>
  );
}
