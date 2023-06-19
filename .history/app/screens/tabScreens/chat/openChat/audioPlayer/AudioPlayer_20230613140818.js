import {View, Text, Button, TouchableOpacity} from 'react-native';
import React ,{useEffect,useState} from 'react';
import Sound from 'react-native-sound';
Sound.setCategory('Playback', true);


export function AudioPlayer({url}) {

  const [playStop, setPlayStop] = useState(false);
    useEffect(() => {
        let isMounted = true
        global.whoosh = new Sound(url, null, (error) => {
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
        <TouchableOpacity >
            <Text>{!playStop ? 'Play' : 'Pause'}</Text>
        </TouchableOpacity>
      
    </View>
  );
}
