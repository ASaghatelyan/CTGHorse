import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {PhotoItem} from 'app/components/photoItem';
import camera from 'app/assets/img/camera.png';
import vid from 'app/assets/img/vid.png';
import {styles} from './style';
import {ChooseImage, ChooseLibrary} from 'app/components/imagePicker';
import Video from 'react-native-video';

export function HorseRegFirst(props) {
  const [generalImg, setGeneralImg] = useState('');
  const [image, setImage] = useState(['', '', '']);
  const [videoData, setVideoData] = useState(['', '']);
  const [percentage, setPercentage] = useState(0);
  let [data, setData] = useState([]);
  let url = 'https://youtu.be/zWh3CShX_do';
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
            return (
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
      <View style={{width: '100%'}}>
        <Video
          style={{}}
          source={{uri: props.route.params.url}}
          controls={true}
          resizeMode="contain"
          paused
        />
      </View>
    </View>
    // <DocPiker/>
  );
}
