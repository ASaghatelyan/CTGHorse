import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Sound from 'react-native-sound';
Sound.setCategory('Playback', true);
import play from 'app/assets/img/play.png'
import pause from 'app/assets/img/pause.png'
 
export function AudioPlayer({url, id, stopMusic}) {
  const [playStop, setPlayStop] = useState(false);
  const [urls, setUrls] = useState(url);
  let whoosh = new Sound(url, null);

 
  return (
    <View style={{width: '100%'}}>
      <TouchableOpacity
        onPress={() => {
          whoosh.play();
          console.log(url);
        }}>
        <Text>{!playStop ? 'Play' : 'Pause'}</Text>
        <Image source={play} style/>
      </TouchableOpacity>
      <Button
        title="Stop"
        onPress={() => {
          whoosh.pause();
        }}
      />
    </View>
  );
}
