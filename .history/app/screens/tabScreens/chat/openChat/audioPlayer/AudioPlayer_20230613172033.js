import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Sound from 'react-native-sound';
Sound.setCategory('Playback', true);
import play from 'app/assets/img/pl.png';
import pause from 'app/assets/img/pause.png';
import {styles} from './style';

export function AudioPlayer({url, id, stopMusic}) {
  const [playStop, setPlayStop] = useState(false);
  let whoosh = new Sound(url, null);

 let startPlaying = () => {
    this.sound.play();
    this.setState({ isPlaying: true });
    console.warn("Now playing");
  }
  
 let stopPlaying = () => {
    this.sound.pause();
    this.setState({ isPlaying: false })
    console.warn("Now paused");
  }
  
let  onPlay(item) {
    const { isPlaying } = this.state;
    if(!isPlaying) {
      this.sound = new Sound(`${item.sound}`, null, this.startPlaying);
    } else {
      this.stopPlaying();
    }
  }

  return (
    <View style={{width: '100%'}}>
      <TouchableOpacity
        onPress={() => {
          if (playStop) {
            whoosh.pause();
            console.log('pause');
            setPlayStop(false);
          } else if (!playStop) {
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
