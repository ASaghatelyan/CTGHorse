import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Sound from 'react-native-sound';
Sound.setCategory('Playback', true);
import play from 'app/assets/img/pl.png';
import pause from 'app/assets/img/pause.png';
import {styles} from './style';

export function AudioPlayer({url, id, stopMusic}) {
  const [playStop, setPlayStop] = useState(false);
  const [urls, setUrls] = useState(url);
  let whoosh = new Sound(url, null);

  return (
    <View style={{width: '100%'}}>
      {!playStop ? (
        <TouchableOpacity
          onPress={() => {
            whoosh.play();
            setPlayStop(!playStop)
          }}>
          <Image source={play} style={styles.play} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            whoosh.pause();
            set
          }}>
          <Image source={pause} style={styles.play} />
        </TouchableOpacity>
      )}
    </View>
  );
}
