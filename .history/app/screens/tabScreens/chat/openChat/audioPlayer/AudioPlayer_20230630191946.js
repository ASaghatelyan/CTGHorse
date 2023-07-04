import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import play from 'app/assets/img/pl.png';
import pause from 'app/assets/img/pause.png';
import {styles} from './style';
import Slider from '@react-native-community/slider';
import {useAudioHelper} from 'app/components';

export function AudioPlayer({url, onStop}) {
  const player = useAudioHelper({
    listSounds: [
      {
        type: 'network',
        path: url,
        name: 'sdds sdsd s',
      },
    ],
    timeRate: 15,
    isLogStatus: true,
  });
  useEffect(() => {
    return () => {
      player.stop();
    };
  }, [onStop]);

  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Slider
        style={{width: '75%', transform: [{scaleX: 0.9}, {scaleY: 0.8}]}}
        minimumValue={0}
        maximumValue={player.duration}
        value={player.currentTime}
        thumbTintColor={'#E9A13A'}
        minimumTrackTintColor={'#E9A13A'}
        maximumTrackTintColor="#190C04"
        onValueChange={seconds => player.seekToTime(seconds)}
      />
      {player.status === 'play' ? (
        <TouchableOpacity style={{width: '20%'}} onPress={player.pause}>
          <Image source={pause} style={styles.play} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={{width: '20%'}} onPress={player.play}>
          <Image source={play} style={styles.play} />
        </TouchableOpacity>
      )}
    </View>
  );
}
