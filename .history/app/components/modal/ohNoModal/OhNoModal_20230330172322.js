import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import close from 'app/assets/img/close.png';
import {styles} from './style';

export function OhNoModal({isVisible, title, infoText, btnText}) {
  return (
    <Modal isVisible={true}>
      <View style={styles.container}>
        <View style={styles.contView}>
          <Text style={styles.onNoText}>Oh no!</Text>
          <Text style={styles.titleTetx}> You can add only 3 photos.</Text>
          <Text style={styles.infoText}>
            If you want to add new photo please delete the one from your gallery
          </Text>
          <TouchableOpacity style={styles.btnView}>
            <Text style={styles.btnText}>OK</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.closeView}>
            <Image style={styles.closeIc} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
