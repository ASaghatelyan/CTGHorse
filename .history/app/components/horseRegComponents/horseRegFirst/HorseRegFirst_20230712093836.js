import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {PhotoItem} from 'app/components/photoItem';
import camera from 'app/assets/img/camera.png';
import vid from 'app/assets/img/vid.png';
import {styles} from './style';
import {ChooseImage, ChooseLibrary} from 'app/components/imagePicker';
import Video from 'react-native-video';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {useDispatch, useSelector} from 'react-redux';
import {BottomBtn} from 'app/components/bottomBtn';
import ImageColors from 'react-native-image-colors';
import {GlobalWidth} from 'app/constant/styleConstants';

export function HorseRegFirst({onNextPrev, percentage, navigation, setIndex}) {
  let dispatch = useDispatch();
  let store = useSelector(state => state.horseRegister);
  const [active, setActive] = useState(false);
  const [isReady, setIsReady] = useState(true);
  const [generalImg, setGeneralImg] = useState(
    store?.genImg ? store?.genImg : '',
  );
  const [image, setImage] = useState(
    store?.pictures ? store.pictures : ['', '', ''],
  );
  const [videoData, setVideoData] = useState(
    store?.videoData ? store.videoData : ['', ''],
  );
  const [allImg, setAllImg] = useState([]);

  let goBack = () => {
    percentage !== 25
      ? onNextPrev(25)
      : (dispatch({
          type: 'RESET_HORSEINFO',
          payload: {},
        }),
        navigation.goBack());
  };

  let next = () => {
    dispatch({
      type: 'SET_HORSEINFO',
      payload: {allImg: [...[generalImg, ...image].filter(n => n)]},
    });
    generalImg && onNextPrev(50);
    generalImg && setIndex(1);
  };
  console.log(active);
  return (
    <View style={styles.gView}>
      <View style={styles.gContainer}>
        <Grid>
          <Col style={{marginRight: GlobalWidth(16), flex: 0.77}}>
            <Row style={{flex: 0.5}}>
              <TouchableOpacity
                style={[
                  generalImg.length == 0 ? styles.gPhoto : styles.loadPhoto,
                ]}
                onPress={() => {
                  ChooseImage(async imageRes => {
                    if (imageRes.assets) {
                      setGeneralImg(imageRes.assets[0]);
                      dispatch({
                        type: 'SET_HORSEINFO',
                        payload: {genImg: imageRes.assets[0]},
                      });
                    }
                  }, 'photo');
                }}>
                {generalImg.length == 0 ? (
                  <View style={{alignItems: 'center'}}>
                    <Image
                      source={generalImg.uri ? {uri: generalImg.uri} : camera}
                      style={styles.gImg}
                    />
                    <Text style={styles.gText}>Add general photo</Text>
                  </View>
                ) : (
                  <Image
                    source={{uri: generalImg.uri}}
                    style={styles.generalImg}
                  />
                )}
              </TouchableOpacity>
            </Row>
            <Row
              style={{
                justifyContent: 'space-between',
                flex: 0.5,
              }}>
              {videoData.map((item, index) => {
                return item ? (
                  <TouchableOpacity
                    key={index}
                    style={styles.gVideo}
                    onPress={() => {
                      setActive(true);
                      ChooseLibrary(async imageRes => {
                        if (imageRes.didCancel) {
                          console.log('didCancel', imageRes);
                        } else if (imageRes.assets) {
                          console.log('wwwww');
                          let arr = videoData;
                          arr[index] = imageRes.assets[0];
                          setVideoData([...arr]);
                          dispatch({
                            type: 'SET_HORSEINFO',
                            payload: {videoData: [...arr]},
                          });
                        }
                      }, 'video');
                    }}>
                    <Video
                      style={styles.video}
                      source={{uri: videoData[index].uri}}
                      // controls={true}
                      resizeMode="contain"
                      paused
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    key={index}
                    style={styles.gVideo}
                    onPress={() => {
                      ChooseLibrary(async imageRes => {
                        if (imageRes.didCancel) {
                          setActive(!imageRes.didCancel);
                        } else if (imageRes.assets) {
                          console.log('ewrwerweqwre');
                          let arr = videoData;
                          arr[index] = imageRes.assets[0];
                          setVideoData([...arr]);
                          dispatch({
                            type: 'SET_HORSEINFO',
                            payload: {videoData: [...arr]},
                          });
                        }
                      }, 'video');
                    }}>
                    <Image source={vid} style={styles.gVidImg} />
                  </TouchableOpacity>
                );
              })}
            </Row>
          </Col>
          <Col
            style={{
              flex: 0.2,
              justifyContent: 'space-between',
            }}>
            {image.map((item, index) => {
              return (
                <PhotoItem
                  chooseIm={path => {
                    let arr = image;
                    arr[index] = path;
                    setImage([...arr]);
                    dispatch({
                      type: 'SET_HORSEINFO',
                      payload: {pictures: arr},
                    });
                  }}
                  path={item.uri}
                />
              );
            })}
          </Col>
        </Grid>
      </View>
      <BottomBtn
        nameL="Back"
        nameR="Next"
        onChangeL={goBack}
        onChangeR={next}
        customStyles={styles.bottomBtn}
        activePassive={active}
      />
    </View>
  );
}
