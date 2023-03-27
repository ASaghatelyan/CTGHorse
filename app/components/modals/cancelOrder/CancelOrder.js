import {View, Text} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {BorderBtn} from 'app/components/borderBtn';
import {BgBtn} from 'app/components/bottomBtn';
import {styles} from './style';

export function CancelOrder(props) {
  return (
    <Modal isVisible={props.isVisible}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.sureText}>{props.subTitle}</Text>
        <View style={styles.btnView}>
          <BorderBtn name={props.bordBtn} onNaviToReview={props.onDiscard} />
          <BgBtn name={props.bgBtn} onChange={props.onCancel} />
        </View>
      </View>
    </Modal>
  );
}
