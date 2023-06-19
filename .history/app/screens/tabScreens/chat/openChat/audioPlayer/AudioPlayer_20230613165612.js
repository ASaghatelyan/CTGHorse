import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Sound from 'react-native-sound';
import SoundPlayer from 'react-native-sound-player'

Sound.setCategory('Playback', true);
import play from 'app/assets/img/pl.png';
import pause from 'app/assets/img/pause.png';
import {styles} from './style';

export function AudioPlayer({url, id, stopMusic}) {
  const [playStop, setPlayStop] = useState(false);
  let whoosh = new Sound(url, null);
let aa = async()
  return (
    <View style={{width: '100%'}}>
      <TouchableOpacity
        onPress={() => {
          if (playStop) {
            console.log('pause');
            whoosh.stop();
            setPlayStop(false);
          } else {
            console.log('play');
            whoosh.play();
            setPlayStop(true);
          }
        }}>
        <Image source={playStop ? pause : play} style={styles.play} />
      </TouchableOpacity>
    </View>
  );
}
