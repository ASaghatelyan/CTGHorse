import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Sound from 'react-native-sound';
import SoundPlayer from 'react-native-sound-player';

Sound.setCategory('Playback', true);
import play from 'app/assets/img/pl.png';
import pause from 'app/assets/img/pause.png';
import {styles} from './style';

export function AudioPlayer({url, id, stopMusic}) {
  const [playStop, setPlayStop] = useState(false);
  let whoosh = new Sound(url, null);
  let a = SoundPlayer.loadUrl(url);

  let playSong = () => {
    try {
      SoundPlayer.loadUrl(url);
    } catch (e) {
      alert('Cannot play the file');
      console.log('cannot play the song file', e);
    }
  };

  let getInfo = async () => {
    // You need the keyword `async`
    try {
      const info = await SoundPlayer.getInfo(); // Also, you need to await this because it is async
      console.log('getInfo', info); // {duration: 12.416, currentTime: 7.691}
    } catch (e) {
      console.log('There is no song playing', e);
    }
  };

  let onPressPlayButton = () => {
    playSong();
    getInfo();
  };
  return (
    <View style={{width: '100%'}}>
      <TouchableOpacity
        onPress={() => {
          if (playStop) {
            SoundPlayer.stop();
            console.log('pause');
            // whoosh.stop();
            setPlayStop(false);
          } else {
            console.log('play');
            // whoosh.play();
            setPlayStop(true);
            SoundPlayer.playUrl(url);
          }
        }}>
        <Image source={playStop ? pause : play} style={styles.play} />
      </TouchableOpacity>
    </View>
  );
}
