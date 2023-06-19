import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Sound from 'react-native-sound';
Sound.setCategory('Playback', true);

export function AudioPlayer({url, id}) {
  const [playStop, setPlayStop] = useState(false);
  const [urls,setUrls]=useState(url)
  useEffect(() => {
    let isMounted = true;
    global.whoosh = new Sound(urls, null, error => {
      if (error) {
        // console.log('failed to load the sound', audio.uri);
        if (isMounted) {
          setCanPlaySound(false);
        }
        return;
      }
    });

    return () => {
      // console.log('release sound')

      whoosh.release();
    };
  }, [url]);
  return (
    <View style={{width: '100%'}}>
      <TouchableOpacity
        onPress={() => { 
            console.log(url);
            setUrls(url)
        //   !playStop
        //     ? (global.whoosh.play(), setPlayStop(!playStop))
        //     : (global.whoosh.stop(),setPlayStop(!playStop));
        console.log( global.whoosh,' global.whoosh');
        }}>
        <Text>{!playStop ? 'Play' : 'Pause'}</Text>
      </TouchableOpacity>
    </View>
  );
}
