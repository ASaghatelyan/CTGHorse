import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Sound from 'react-native-sound';
Sound.setCategory('Playback', true);

export function AudioPlayer({url, id}) {
  const [playStop, setPlayStop] = useState(false);
  const [urls, setUrls] = useState(url);
  let a = ss => {
    return (global.whoosh = new Sound(ss, null));
  };
  return (
    <View style={{width: '100%'}}>
      <TouchableOpacity
        onPress={() => {
            a(url)
         aw global?.whoosh.play();
          console.log(global?.whoosh);
          
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
