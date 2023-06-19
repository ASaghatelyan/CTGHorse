import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Sound from 'react-native-sound';
Sound.setCategory('Playback', true);
import play from 'app/assets/img/pl.png';
import s from 'app/assets/img/thumb.png';
import pause from 'app/assets/img/pause.png';
import {styles} from './style';
import Slider from '@react-native-community/slider';
let whoosh = new Sound();
import TrackPlayer from 'react-native-track-player';

export function AudioPlayer({url, id, stopMusic}) {
  const [playStop, setPlayStop] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playSeconds, setPlaySeconds] = useState(0);
  const [timers, setTimers] = useState(null);

  //   let whoosh = new Sound(url, null);
//   let startPlaying = () => {
//     whoosh.play();
//     setIsPlaying(true);
//     console.warn('Now playing');
//     whoosh._duration === playSeconds && setPlaySeconds(0);
//     setIsPlaying(!isPlaying);
//     // const info = await SoundPlayer.getInfo();
//     let timer = setInterval(() => {
//       whoosh.getCurrentTime(seconds => {
//         setPlaySeconds(seconds);
//         if (whoosh._duration === seconds) {
//           clearInterval(timer);
//           whoosh.stop(() => {
//             setPlaySeconds(0);
//           });
//           setPlay(true);
//         }
//       });
//     }, 1000);
//     setTimers(timer);
//   };

//   let stopPlaying = () => {
//     whoosh.pause();
//     setIsPlaying(false);
//     console.warn('Now paused');
//   };
 
//   let onPlay = () => {
//     // whoosh._duration === playSeconds && setPlaySeconds(0);
//     // setIsPlaying(!isPlaying);
//     // // const info = await SoundPlayer.getInfo();
//     // let timer = setInterval(() => {
//     //   whoosh.getCurrentTime(seconds => {
//     //     setPlaySeconds(seconds);
//     //     if (whoosh._duration === seconds) {
//     //       clearInterval(timer);
//     //       whoosh.stop(() => {
//     //         setPlaySeconds(0);
//     //       });
//     //       setPlay(true);
//     //     }
//     //   });
//     // }, 1000);
//     // if (!whoosh._playing) {
//     //   whoosh = new Sound(`${url}`, null, startPlaying);
//     //   setIsPlaying(true);
//     // } else if (whoosh._playing) {
//     //   whoosh.pause();
//     // }
//     // else if(global?.whoosh._duration===playSeconds){
//     //   setPlaySeconds(0);
//     // }
//     // setTimers(timer);

//     if (!whoosh._playing) {
//       whoosh = new Sound(`${url}`, null, startPlaying);
//     } else {
//       return stopPlaying();
//     }
//   };
TrackPlayer.setupPlayer().then(() => {
    console.log('Player set')
});
TrackPlayer.add([{
    id: 'trackId1',
    url: 'https://r2---sn-gwpa-w5py.googlevideo.com/videoplayback?expire=1612552132&ei=ZEMdYNnJDumPz7sPyrSLmAw&ip=49.36.246.217&id=o-AFQLS1cSUJ6_bXBjMOIiWk1NuIYTMUTVu4rmliPZmJCS&itag=251&source=youtube&requiressl=yes&mh=VD&mm=31%2C29&mn=sn-gwpa-w5py%2Csn-gwpa-qxaz&ms=au%2Crdu&mv=m&mvi=2&pl=21&initcwndbps=225000&vprv=1&mime=audio%2Fwebm&ns=nxhNYqBZK92ToigY08JRZjEF&gir=yes&clen=230633&dur=18.961&lmt=1524503096692151&mt=1612530050&fvip=2&keepalive=yes&c=WEB&n=UIc0qqVvrMQOjPVkP&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAObqQA5vFYy6rJ3O3J4zswofNj2NFZOrwMF05p_PgWg9AiAmnde3njBRfvPmW_2VVA0YO1aLWQl0V3STGayuqgBRKA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgFTqy7Ng9zxhQY4GM4vP1BooPeHOf50PTikb59C67voACIGDybTTJBdLkp9lUx_-ZLdCulG_y3TH6iMhBbAn1AZR_&ratebypass=yes',
    title: 'Title',
    artist: 'Artist',
    artwork: 'https://lh3.googleusercontent.com/jpatCs-PW2LbLWMITjnM9wh5W49QL1c5dhMD3_v6LDZ1okUGgJZIyqp5z4F_Pred10sZlFYjB3Vk6pRE=w1920-h1080-l90-rj'
  }]);
TrackPlayer.play();
  let onSliderEditing = value => {
    if (whoosh) {
      whoosh.setCurrentTime(value);
      setPlaySeconds(Math.trunc(value));
    }
  };
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Slider
        style={{width: '75%'}}
        minimumValue={0}
        value={playSeconds}
        thumbTintColor={'#E9A13A'}
        maximumValue={whoosh?._duration}
        minimumTrackTintColor={'#E9A13A'}
        maximumTrackTintColor="#190C04"
        onValueChange={values => onSliderEditing(values)}
      />
      <TouchableOpacity style={{width: '20%'}} >
        <Image source={whoosh._playing ? pause : play} style={styles.play} />
      </TouchableOpacity>
    </View>
  );
}
