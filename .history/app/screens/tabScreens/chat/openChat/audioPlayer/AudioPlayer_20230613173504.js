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
    if (!isPlaying) {
        
      whoosh = new Sound(`${url}`, null, startPlaying);
    } else {
      return stopPlaying();
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
        thumbTintColor={'blue'}
        maximumValue={whoosh?._duration}
        minimumTrackTintColor={'red'}
        maximumTrackTintColor="#000000"
        onValueChange={values => onSliderEditing(values)}
      />
    </View>
  );
}
