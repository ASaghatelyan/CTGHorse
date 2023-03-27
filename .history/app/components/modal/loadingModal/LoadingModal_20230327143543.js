import {View, Text, Dimensions, Animated} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import Modal from 'react-native-modal';
import * as Progress from 'react-native-progress';
import {styles} from './style';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export function LoadingModal(props) {
  let [progres, setProgres] = useState(new Animated.Value(0));
  let [anime, setAnime] = useState(true);
  let [timerClear, setTimerClear] = useState();
  let [timeoutClear, setTomeOutClear] = useState();

    useLayoutEffect(() => {
      animate();
      return () => {
        clearInterval(timerClear);
        clearTimeout(timeoutClear);
      };
    }, [props.visible]);

  let animate = () => {
    let progress = 0;
    setProgres(progress);
    let timer;
    let timeOut = setTimeout(() => {
      setAnime(false);
      timer = setInterval(() => {
        progress += Math.random() / 5;
        if (progress > 1) {
          progress = 1;
        }
        setProgres(progress);
      }, 700);
    }, 1500);
    setTimerClear(timer);
    setTomeOutClear(timeOut);
  };

 

  return (
    <Modal style={styles.container} visible={props.visible} transparent={true}>
      <Text style={styles.text}>Loading...</Text>
      <Progress.Bar
        progress={progres}
        width={200}
        indeterminate={anime}
        color="#E9A13A"
        animationConfig={{bounciness: 1}}
   
        borderWidth={0}
        height={3}
      />
    </Modal>
  );
}
