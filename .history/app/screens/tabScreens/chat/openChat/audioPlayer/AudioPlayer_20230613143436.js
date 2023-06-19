import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Sound from 'react-native-sound';
Sound.setCategory('Playback', true);

export function AudioPlayer({url, id}) {
  const [playStop, setPlayStop] = useState(false);
  const [urls, setUrls] = useState(url);
  global.whoosh = new Sound(url, null);
let a =(ss)=>{
    
}
  return (
    <View style={{width: '100%'}}>
      <TouchableOpacity
        onPress={() => {
          global?.whoosh.play();
          console.log(url);
        }}>
        <Text>{!playStop ? 'Play' : 'Pause'}</Text>
      </TouchableOpacity>
      <Button
        title="Stop"
        onPress={() => {
          global?.whoosh.pause();
          console.log(url);
        }}
      />
    </View>
  );
}
