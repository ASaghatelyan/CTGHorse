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

  return (
    <View style={{width: '100%'}}>
 
        <TouchableOpacity
          onPress={() => {
           if(playStop){
            whoosh.play();
            setPlayStop(false)
           }else 
          }}>
          <Image source={playStop ? pause:play} style={styles.play} />
        </TouchableOpacity>
   
    
    </View>
  );
}
