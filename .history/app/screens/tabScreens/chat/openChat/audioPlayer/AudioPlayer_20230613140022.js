import {View, Text} from 'react-native';
import React from 'react';

export function AudioPlayer({url}) {
  return (
    <View style={{width: '100%'}}>
      <Buttob
        title={!playStop ? 'Play' : 'Pause'}
        onPress={async () => {
          let sound1 = new Sound(
            props.currentMessage.audio,
            null,
            (error, sound) => {
              if (error) {
                alert('error' + error.message);
                return;
              }
              // !playStop
              //   ? sound1.play(() => setPlayStop(!playStop))
              //   : sound1.stop(() => setPlayStop(!playStop));
            },
          );
        }}
      />
    </View>
  );
}
