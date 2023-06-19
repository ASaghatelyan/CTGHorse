import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Sound from 'react-native-sound';
Sound.setCategory('Playback', true);
import play from 'app/assets/img/pl.png';
import s from 'app/assets/img/thumb.png';
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
  console.log(whoosh);
  let onPlay = () => {
    whoosh._duration === playSeconds && setPlaySeconds(0);
    setIsPlaying(!isPlaying);
    // const info = await SoundPlayer.getInfo();
    let timer = setInterval(() => {
      whoosh.getCurrentTime(seconds => {
        setPlaySeconds(seconds);
        if (whoosh._duration === seconds) {
          clearInterval(timer);
          whoosh.stop(() => {
            setPlaySeconds(0);
          });
          setPlay(true);
        }
      });
    }, 1000);
    if (!whoosh._playing) {
      whoosh = new Sound(`${url}`, null, startPlaying);
      setIsPlaying(true);
    } else if (whoosh._playing) {
      whoosh._playing.pause();
    }
    // else if(global?.whoosh._duration===playSeconds){
    //   setPlaySeconds(0);
    // }
    setTimers(timer);
    //   return;
    // if (!isPlaying) {
    //   whoosh = new Sound(`${url}`, null, startPlaying);
    // } else {
    //   return stopPlaying();
    // }
  };

  let onSliderEditing = value => {
    if (whoosh) {
      whoosh.setCurrentTime(value);
      setPlaySeconds(Math.trunc(value));
    }
  };
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Slider
        style={{width: '75%', transform: [{scaleX: 1}, {scaleY: 0.8}]}}
        minimumValue={0}
        value={playSeconds}
        thumbTintColor={'#E9A13A'}
        maximumValue={whoosh?._duration}
        minimumTrackTintColor={'#E9A13A'}
        maximumTrackTintColor="#190C04"
        onValueChange={values => onSliderEditing(values)}
      />
      <TouchableOpacity style={{width: '20%'}} onPress={onPlay}>
        <Image source={whoosh._playing ? pause : play} style={styles.play} />
      </TouchableOpacity>
    </View>
  );
}
