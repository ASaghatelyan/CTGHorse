import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {PhotoItem} from 'app/components/photoItem';
import camera from 'app/assets/img/camera.png';
import vid from 'app/assets/img/vid.png';
import {styles} from './style';
import {ChooseImage, ChooseLibrary} from 'app/components/imagePicker';
import Video from 'react-native-video';
import {Col, Row, Grid} from 'react-native-easy-grid';

export function HorseRegFirst(props) {
  const [generalImg, setGeneralImg] = useState('');
  const [image, setImage] = useState(['', '', '']);
  const [videoData, setVideoData] = useState(['', '']);
  const [percentage, setPercentage] = useState(0);
  let [data, setData] = useState([]);

  return (
    <View style={styles.gContainer}>
      {/* <View style={styles.container}>
        <TouchableOpacity
          style={[generalImg.length == 0 ? styles.gPhoto : styles.loadPhoto]}
          onPress={() => {
            ChooseImage(async imageRes => {
              setGeneralImg(imageRes.assets[0].uri);
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
        <View style={styles.gVideoCont}>
          {videoData.map((item, index) => {
            return item ? (
              <TouchableOpacity
                style={styles.gVideo}
                onPress={() => {
                  ChooseLibrary(async imageRes => {
                    let arr = videoData;
                    arr[index] = imageRes.assets[0];
                    setVideoData([...arr]);
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
        </View>
      </View>
      <View style={{justifyContent: 'space-between'}}>
        {image.map((item, index) => {
          return (
            <PhotoItem
              chooseIm={path => {
                let arr = image;
                let da = data;
                arr[index] = path;
                da.push(path);
                setData([...da]);
                //   let upload = setInterval(() => {
                //     setPercentage(prev => (prev <= 1 ? prev + 0.2 : 1));
                //   }, 4000);
              }}
              path={item}
            />
          );
        })}
      </View> */}
      <Grid style={{backgroundColor:'black'}}>
        <Col style={{ backgroundColor:'red',marginRight:16,marginBottom:16}}>
          <Row style={{backgroundColor:'#FFF'}}>
            <Text>dsfv</Text>
          </Row>
          <Row style={{justifyContent:'space-between',}}>
            <Text>d</Text>
            <Text>d</Text>
          </Row>
        </Col>
        <Col style={{width: 70,backgroundColor:'blue'}}>
          <Text>Fluid width</Text>
        </Col>
      </Grid>
    </View>
  );
}
