import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Sound from 'react-native-sound';
Sound.setCategory('Playback', true);
import play from 'app/assets/img/pl.png';
import pause from 'app/assets/img/pause.png';
import {styles} from './style';

export function AudioPlayer({url, id, stopMusic}) {
  const [playStop, setPlayStop] = useState(false);
  let whoosh;
  useEffect(() => {
    whoosh = new Sound(url, null);
  }, []);

  return (
    <View style={{width: '100%'}}>
      <TouchableOpacity
        onPress={() => {
          whoosh.play();
        }}>
        <Image source={play} style={styles.play} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          whoosh.pause();
        }}>
        <Image source={pause} style={styles.play} />
      </TouchableOpacity>
    </View>
  );
}
