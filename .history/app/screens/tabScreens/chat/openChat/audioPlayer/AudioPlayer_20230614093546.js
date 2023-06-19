import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Sound from 'react-native-sound';
Sound.setCategory('Playback', true);
import play from 'app/assets/img/pl.png';
import s from 'app/assets/img/thumb.png';
import pause from 'app/assets/img/pause.png';
import {styles} from './style';
import Slider from '@react-native-community/slider';
import {useAudioHelper} from 'app/components/helpers/audio-helper';
let whoosh = new Sound();

export function AudioPlayer({url, id, stopMusic}) {
  const [playStop, setPlayStop] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playSeconds, setPlaySeconds] = useState(0);
  const [timers, setTimers] = useState(null);
  
 

  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Slider
        style={{width: '75%', transform: [{scaleX: 0.9}, {scaleY: 0.8}]}}
        minimumValue={0}
        value={player.currentTime}
        thumbTintColor={'#E9A13A'}
        maximumValue={player.duration}
        minimumTrackTintColor={'#E9A13A'}
        maximumTrackTintColor="#190C04"
        onValueChange={seconds =>  player.seekToTime(seconds)}
      />
      {player.status === 'play' ? (
        <TouchableOpacity style={{width: '20%'}} onPress={player.pause}>
          <Image source={pause} style={styles.play} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={{width: '20%'}} onPress={player.play}>
          <Image source={play} style={styles.play} />
        </TouchableOpacity>
      )}
    </View>
  );
}
