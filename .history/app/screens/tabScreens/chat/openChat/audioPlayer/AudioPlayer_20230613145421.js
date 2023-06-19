import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Sound from 'react-native-sound';
Sound.setCategory('Playback', true);

export function AudioPlayer({url, id}) {
  const [playStop, setPlayStop] = useState(false);
  const [play, setPlay] = useState(true);
  const [speed, setSpeed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [mainLang, setMainLang] = useState('');
  const [showHide, setShowHide] = useState(true);
  const [chooseSpeed, setChooseSpeed] = useState(1);
  const [playSeconds, setPlaySeconds] = useState(0);
  const [timers, setTimers] = useState(null);
  let whoosh = new Sound(url, null);

  let playBtn = async () => {
    whoosh._duration === playSeconds && setPlaySeconds(0);
    setPlay(!play);
    // const info = await SoundPlayer.getInfo();
    let timer = setInterval(() => {
      whoosh.getCurrentTime(seconds => {
        setPlaySeconds(seconds);
        if (whoosh._duration === seconds) {
          clearInterval(timer);
          global.whoosh.stop(() => {});
          setPlay(true);
        }
      });
    }, 1000);
    if (play) {
      whoosh.play();
    } else if (!play) {
      whoosh.pause();
    } else if (whoosh._duration === playSeconds) {
      setPlaySeconds(0);
    }
    setTimers(timer);
    return;
  };

  let onSliderEditing = value => {
    if (whoosh) {
      whoosh.setCurrentTime(value);
      setPlaySeconds(Math.trunc(value));
    }
  };

  return (
    <View style={{width: '100%'}}>
      <TouchableOpacity
        onPress={playBtn}>
        <Text>{!play ? 'Play' : 'Pause'}</Text>
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
