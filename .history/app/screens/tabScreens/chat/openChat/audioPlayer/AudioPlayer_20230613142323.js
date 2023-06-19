import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Sound from 'react-native-sound';
Sound.setCategory('Playback', true);

export function AudioPlayer({url, id}) {
  const [playStop, setPlayStop] = useState(false);
  const [urls, setUrls] = useState(url);

  let whoosh = new Sound(url, null);

  return (
    <View style={{width: '100%'}}>
      <TouchableOpacity
        onPress={() => {
          // global.whoosh = new Sound(url, null, error => {
          //     if (error) {
          //       // console.log('failed to load the sound', audio.uri);
          //       if (isMounted) {
          //         setCanPlaySound(false);
          //       }
          //       return;
          //     }
          //   });
          console.log(playStop);
          !playStop && (setPlayStop(!playStop), whoosh.play());

          playStop &&
            (whoosh.stop(() => {
              whoosh.play();
            }),
            setPlayStop(!playStop));
        }}>
        <Text>{!playStop ? 'Play' : 'Pause'}</Text>
      </TouchableOpacity>
    </View>
  );
}
