import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Sound from 'react-native-sound';
Sound.setCategory('Playback', true);

export function AudioPlayer({url, id}) {
  const [playStop, setPlayStop] = useState(false);
  const [urls, setUrls] = useState(url);
  let whoosh = new Sound(url, null);
  var sound1 = new Sound('https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/pew2.aac', '',
  (error, sound) => {
    if (error) {
      alert('error' + error.message);
      return;
    }
     
  });
  return (
    <View style={{width: '100%'}}>
      <TouchableOpacity
        onPress={() => {
          sound1.play();
          console.log(url);
        }}>
        <Text>{!playStop ? 'Play' : 'Pause'}</Text>
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
