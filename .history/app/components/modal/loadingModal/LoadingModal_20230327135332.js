import {View, Text, Dimensions} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import Modal from 'react-native-modal';
import * as Progress from 'react-native-progress';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export function LoadingModal(props) {
  let [progres, setProgres] = useState(0);
  let [anime, setAnime] = useState(true);

  useLayoutEffect(() => {
    animate();
  }, [props.visible]);

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

  return (
    <Modal
      style={{
        backgroundColor: 'rgba(255,255,255,0.8)',
        margin: 0,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      visible={props.visible}
      transparent={true}>
      <Text onPress={props.close}>sdfsdfsfbsg</Text>
      <Progress.Bar
        progress={progres}
        width={200}
        indeterminate={anime}
        color="#E9A13A"
        animationConfig={{bounciness: 1}}
        animationType={'spring'}
        borderWidth={0}
        height={3}
      />
    </Modal>
  );
}
