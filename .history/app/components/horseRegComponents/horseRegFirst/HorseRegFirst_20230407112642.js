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

export function HorseRegFirst({navigation, percentage, setPercentage}) {
  let dispatch = useDispatch();
  let store = useSelector(state => state.horseRegister);
  console.log(store);
  const [generalImg, setGeneralImg] = useState(
    store[0]?.generalImg ? store[0]?.generalImg : '',
  );
  const [image, setImage] = useState(store[0]?.image ? store[0].image : ['', '', '']);
  const [videoData, setVideoData] = useState(
    store[0]?.videoData ? store[0].videoData : ['', ''],
  );

  // useEffect(() => {
  //   let data = [generalImg, image, videoData];
  //   dispatch({
  //     type: 'SET_HORSEINFO',
  //     payload: data,
  //   });
  // }, [generalImg, image, videoData]);

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
               
                    dispatch({
                      type: 'SET_HORSEINFO',
                      payload:{genImg: imageRes.assets[0].uri },
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
                    style={styles.gVideo}
                    onPress={() => {
                      ChooseLibrary(async imageRes => {
                        let arr = videoData;
                        arr[index] = imageRes.assets[0];
                        setVideoData([...arr]);
                        dispatch({
                          type: 'SET_HORSEINFO',
                          payload:{genImg: imageRes.assets[0].uri },
                        });
                      }, 'video');
                    }}>
                    <Video
                      style={styles.video}
                      source={{uri: videoData[index].uri}}
                      // controls={true}
                      resizeMode="cover"
                      paused
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.gVideo}
                    onPress={() => {
                      ChooseLibrary(async imageRes => {
                        let arr = videoData;
                        arr[index] = imageRes.assets[0];
                        setVideoData([...arr]);
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
                  }}
                  path={item}
                />
              );
            })}
          </Col>
        </Grid>
      </View>
    </View>
  );
}
