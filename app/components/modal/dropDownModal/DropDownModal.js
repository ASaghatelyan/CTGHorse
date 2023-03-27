import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View} from 'react-native';
import {styles} from './style';
import * as Animatable from 'react-native-animatable';
import {Picker} from '@react-native-picker/picker';
import {BottomBtn} from 'app/components';

export function DropDownModal(props) {
  const [pos, setPos] = useState(props.info && props?.info[0].title);
  return (
    <Modal
      animationOut={'rotate'}
      animationOutTiming={200}
      onBackdropPress={props.onClose}
      style={{
        margin: 0,
        justifyContent: 'flex-end',
      }}
      visible={props.isVisible}>
      <View style={styles.linearGradient}>
        <View style={styles.scroll_view}>
          <Animatable.View
            useNativeDriver
            animation="fadeIn"
            style={styles.container}>
            <View
              style={[
                {
                  flexDirection: 'row',
                  width: '100%',
                  borderRadius: 15,
                  alignItems: 'center',
                },
              ]}>
              <Picker
                numberOfLines={2}
                style={{flex: 1}}
                selectedValue={pos}
                itemStyle={{fontSize: 18, fontFamily: 'SFProText-Regular'}}
                onValueChange={v => {
                  setPos(v);
                }}>
                {props.info &&
                  props?.info.map((v, k) => (
                    <Picker.Item
                      color={pos == v.title ? '#E9A13A' : 'rgba(25, 12, 4, 0.64)'}
                      key={k}
                      value={v.title}
                      label={`${v.title}`}
                    />
                  ))}
              </Picker>
            </View>
          </Animatable.View>
        </View>
        <View style={styles.btn_view}>
          <BottomBtn
            styles={{paddingBottom: 25}}
            nameL="Cancel"
            nameR="Accept"
            onChangeL={props.onClose}
            onChangeR={() => props.onAccept(pos)}
          />
        </View>
      </View>
    </Modal>
  );
}
