import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Sound from 'react-native-sound';
Sound.setCategory('Playback', true);

export function AudioPlayer({url, id}) {
  const [playStop, setPlayStop] = useState(false);
  const [urls, setUrls] = useState(url);
  let whoosh = new Sound(url, null);
  console.log(url);
  var sound1 = new Sound(
    'http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a',
    '',
    (error, sound) => {
      if (error) {
        console.log('error' + error.message);
        return;
      }
    },
  );
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
