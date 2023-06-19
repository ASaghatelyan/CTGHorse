import {View, Text, Button} from 'react-native';
import React ,{useEffect,useState} from 'react';
import Sound from 'react-native-sound';
Sound.setCategory('Playback', true);


export function AudioPlayer({url}) {
    useEffect(() => {
        let isMounted = true
        let whoosh = new Sound(url, null, (error) => {
            if (error) {
                // console.log('failed to load the sound', audio.uri);
                if(isMounted){
                    setCanPlaySound(false)
                }
                return;
            }
            
            
        })
       

        return () => {
            // console.log('release sound')
          
            whoosh.release()
        }
    }, [])
  return (
    <View style={{width: '100%'}}>
      <Button
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
