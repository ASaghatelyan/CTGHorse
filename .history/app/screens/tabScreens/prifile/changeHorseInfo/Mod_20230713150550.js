import { View, Text } from 'react-native'
import React from 'react'
import ReactNativeModal from 'react-native-modal';
import ImageViewer from 'react-native-image-zoom-viewer';

export default function Mod({}) {
  return (
<ReactNativeModal
                      currentIndex={index}
                      style={styles.modal}
                      visible={fullScreenModal}
                      transparent={true}>
                      <ImageViewer
                        imageUrls={[...img]}
                        index={activeIndex}
                        onChange={i => {
                          setActiveIndex(i);
                          console.log(i);
                        }}
                      />
                      <View style={styles.bottomModal}>
                        <TouchableOpacity
                          onPress={() => {
                            setIds([...ids, img[activeIndex].id]);
                            deletImg(img[activeIndex].id, activeIndex);
                            console.log(img, 'immmm');
                            setActiveIndex(img.length - 1);
                          }}>
                          <Image source={rbin} style={styles.rbin} />
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.modalClose}
                          onPress={() => setFullScreenModal(!fullScreenModal)}>
                          <Image source={close} style={styles.close} />
                        </TouchableOpacity>
                      </View>
                    </ReactNativeModal>
  )
}