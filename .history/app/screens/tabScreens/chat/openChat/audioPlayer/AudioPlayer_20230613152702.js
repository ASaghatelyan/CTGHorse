import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Sound from 'react-native-sound';
Sound.setCategory('Playback');

export function AudioPlayer({url, id}) {
  const [playStop, setPlayStop] = useState(false);
  console.log(url, 'url');
  const sound = new Sound(
    'https://s3.amazonaws.com/hanselminutes/hanselminutes_0001.mp3',
    undefined,
    error => {
      if (error) {
        console.log(error);
      } else {
        console.log('Playing sound');
        sound.play(() => {
          // Release when it's done so we're not using up resources
          sound.release();
        });
      }
    },
  );

  //   const [urls, setUrls] = useState(url);
  //   let whoosh = new Sound(url, null,);

  return (
    <View style={{width: '100%'}}>
      {/* <TouchableOpacity
        onPress={() => {
          whoosh.play();
          console.log(url);
        }}>
        <Text>{!playStop ? 'Play' : 'Pause'}</Text>
      </TouchableOpacity>
      <Button
        title="Stop"
        onPress={() => {
          whoosh.pause();
        }}
      /> */}
    </View>
  );
}
