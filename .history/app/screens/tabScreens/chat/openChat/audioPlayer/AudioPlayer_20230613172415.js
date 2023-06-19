import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Sound from 'react-native-sound';
Sound.setCategory('Playback', true);
import play from 'app/assets/img/pl.png';
import pause from 'app/assets/img/pause.png';
import {styles} from './style';

export function AudioPlayer({url, id, stopMusic}) {
  const [playStop, setPlayStop] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  let whoosh = new Sound(url, null);

  let startPlaying = () => {
    whoosh.play(());
    setIsPlaying({isPlaying: true});
    console.warn('Now playing');
  };

  let stopPlaying = () => {
    whoosh.pause();
    setIsPlaying({isPlaying: false});
    console.warn('Now paused');
  };

  let onPlay = item => {
    if (!isPlaying) {
      whoosh = new Sound(`${url}`, null, startPlaying);
    } else {
      return stopPlaying();
    }
  };

  return (
    <View style={{width: '100%'}}>
      <TouchableOpacity onPress={onPlay}>
        <Image source={playStop ? pause : play} style={styles.play} />
      </TouchableOpacity>
    </View>
  );
}
