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

  //   useLayoutEffect(() => {
  //     animate();
  //   }, [props.visible]);

  let animate = () => {
    let progress = 0;
    setProgres(progress);
    setTimeout(() => {
      setAnime(false);
      setInterval(() => {
        progress += Math.random() / 5;
        if (progress > 1) {
          progress = 1;
        }
        setProgres(progress);
      }, 500);
    }, 1500);
  };

  useEffect(() => {
    Animated.timing(progres, {
      toValue: 3ß5,
      duration: 1000,
      useNativeDriver: false,
    }).start(animate);
  }, []);

  return (
    <Modal style={styles.container} visible={true} transparent={true}>
      <Text style={styles.text}>Loading...</Text>
      <Progress.Bar
        progress={progres}
        width={200}
        indeterminate={anime}
        color="#E9A13A"
        animationConfig={{bounciness: 1}}
        animationType={'timing'}
        borderWidth={0}
        height={3}
      />
    </Modal>
  );
}
