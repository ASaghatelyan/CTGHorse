import {View, Text, TouchableOpacity, Image} from 'react-native';
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

export function HorseRegFirst({onNextPrev, percentage, navigation}) {
  let dispatch = useDispatch();
  let store = useSelector(state => state.horseRegister);

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
    console.log([generalImg,...image].filter(n => n));
    // dispatch({
    //   type: 'SET_HORSEINFO',
    //   payload: {allImg:[[generalImg,...image].filter(n => n)]},
    // });
    // onNextPrev(50);
  };

  return (
    <View style={styles.gView}>
      <View style={styles.gContainer}>
        <Grid>
          <Col style={{marginRight: 16}}>
            <Row style={{}}>
              <TouchableOpacity
                style={[
                  generalImg.length == 0 ? styles.gPhoto : styles.loadPhoto,
                ]}
                onPress={() => {
                  ChooseImage(async imageRes => {
                    setGeneralImg(imageRes.assets[0].uri);
                    setAllImg([...allImg, imageRes.assets[0].uri]);
                    dispatch({
                      type: 'SET_HORSEINFO',
                      payload: {genImg: imageRes.assets[0].uri},
                    });
                  }, 'photo');
                }}>
                {generalImg.length == 0 ? (
                  <View style={{alignItems: 'center'}}>
                    <Image
                      source={generalImg ? {uri: generalImg} : camera}
                      style={styles.gImg}
                    />
                    <Text style={styles.gText}>Add general photo</Text>
                  </View>
                ) : (
                  <Image source={{uri: generalImg}} style={styles.generalImg} />
                )}
              </TouchableOpacity>
            </Row>
            <Row
              style={{
                justifyContent: 'space-between',
              }}>
              {videoData.map((item, index) => {
                return item ? (
                  <TouchableOpacity
                    key={index}
                    style={styles.gVideo}
                    onPress={() => {
                      ChooseLibrary(async imageRes => {
                        let arr = videoData;
                        arr[index] = imageRes.assets[0];
                        setVideoData([...arr]);
                        dispatch({
                          type: 'SET_HORSEINFO',
                          payload: {videoData: [...arr]},
                        });
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
                        let arr = videoData;
                        arr[index] = imageRes.assets[0];
                        setVideoData([...arr]);

                        dispatch({
                          type: 'SET_HORSEINFO',
                          payload: {videoData: [...arr]},
                        });
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
              width: 84,
              justifyContent: 'space-between',
            }}>
            {image.map((item, index) => {
              return (
                <PhotoItem
                  chooseIm={path => {
                    let arr = image;
                    
                    arr[index] = path;
                    // da.push(path);
                    setImage([...arr]); 
                    dispatch({
                      type: 'SET_HORSEINFO',
                      payload: {pictures: arr},
                    });
                  }}
                  path={item}
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
        styles={styles.bottomBtn}
      />
    </View>
  );
}
