import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Sound from 'react-native-sound';
Sound.setCategory('Playback', true);

export function AudioPlayer({url, id}) {
  const [playStop, setPlayStop] = useState(false);
  const [urls, setUrls] = useState(url);

  

  return (
    <View style={{width: '100%'}}>
      <TouchableOpacity
        onPress={() => { 
            global.whoosh = new Sound(url, null);
            global?.whoosh.play()
 
      
        }}>
        <Text>{!playStop ? 'Play' : 'Pause'}</Text>
      </TouchableOpacity>
      <Button
        title="Stop"
        onPress={() => {
          global?.whoosh.pause();
        }}
      />
    </View>
  );
}
