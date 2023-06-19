import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Sound from 'react-native-sound';
Sound.setCategory('Playback', true);

export function AudioPlayer({url, id}) {
  const [playStop, setPlayStop] = useState(false);
  const [urls, setUrls] = useState(url);
  let whoosh = new Sound(url, null);

  let playBtn = async () => {
    global?.whoosh._duration === playSeconds && setPlaySeconds(0);
    setPlay(!play);
    // const info = await SoundPlayer.getInfo();
    let timer = setInterval(() => {
      global?.whoosh.getCurrentTime(seconds => {
        setPlaySeconds(seconds);
        if (global?.whoosh._duration === seconds) {
          clearInterval(timer);
          global.whoosh.stop(() => {});
          setPlay(true);
        }
      });
    }, 1000);
    if (play) {
      // SoundPlayer.play();
      // _onFinishedPlayingSubscription = SoundPlayer.addEventListener(
      //   'FinishedPlaying',
      //   () => {
      //     setPlay(true);
      //   },
      // );
      global?.whoosh.play();
    } else if (!play) {
      // SoundPlayer.pause();
      global?.whoosh.pause();
    }
    // else if(global?.whoosh._duration===playSeconds){
    //   setPlaySeconds(0);
    // }
    setTimers(timer);
    return;
  };

  let onSliderEditing = value => {
    if (global?.whoosh) {
      global?.whoosh.setCurrentTime(value);
      setPlaySeconds(Math.trunc(value));
    }
  };

  return (
    <View style={{width: '100%'}}>
      <TouchableOpacity
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
      />
    </View>
  );
}
