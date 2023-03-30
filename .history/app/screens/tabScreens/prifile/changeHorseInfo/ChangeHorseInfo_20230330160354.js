import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {HeaderNavi, HorseItemComponent} from 'app/components';
import {styles} from './style';
import topimg from 'app/assets/img/topimg.png';
import playV from 'app/assets/img/vidp.png';
import rbin from 'app/assets/img/rbin.png';
import camera from 'app/assets/img/camera.png';
import video from 'app/assets/img/vid.png';
import data from '../../home/src/data';
import uplFileIc from 'app/assets/img/uplfileIc.png';

export function ChangeHorseInfo({navigation, route}) {
 let doc = [1,2]
  return (
    <View style={styles.content}>
      <View>
        <SafeAreaView />
        <HeaderNavi
          leftBtn={route.params.item.name}
          leftOnPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView contentContainerStyle={styles.generalView}>
        <Text style={styles.titleText}>Gallery</Text>
        <View>
          <ImageBackground
            source={topimg}
            style={styles.topimg}
            borderTopLeftRadius={22}
            borderTopRightRadius={22}>
            <TouchableOpacity style={styles.chooseBtn}>
              <Text style={styles.chooseBtnText}>
                Choose new profile picture
              </Text>
            </TouchableOpacity>
          </ImageBackground>
          <ScrollView
            bounces={false}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.topImgView}>
            {data.map((item, index) => {
              return (
                <ImageBackground source={item.image} style={styles.horseIc}>
                  <TouchableOpacity>
                    <Image source={rbin} style={styles.rbin} />
                  </TouchableOpacity>
                  {item.type === 'vid' && (
                    <Image source={playV} style={styles.vidType} />
                  )}
                </ImageBackground>
              );
            })}
          </ScrollView>
          <View style={styles.addPicVid}>
            <TouchableOpacity style={styles.addView}>
              <Image source={camera} style={styles.camera} />
              <Text style={styles.addText}>+ add photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addView}>
              <Image source={video} style={styles.camera} />
              <Text style={styles.addText}>+ add video</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.titleText}>Documents</Text>
          <View>
            {doc.map((item, index) => {
              return (
                <View style={styles.uplFileView} key={index}>
                  <Image source={uplFileIc} style={styles.uplFileIc} />
                  <View>
                    <Text numberOfLines={1} style={styles.itemTitle}>
                      {item.name}
                    </Text>
                    <Text numberOfLines={1} style={styles.itemInfo}>
                      Size: {item.size}, Format: {item.format}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.deleteItemView}
                    //   onPress={() => deletItem(index)}
                  >
                    <Image source={rbin} style={styles.deleteItem} />
                  </TouchableOpacity>
                </View>
              );
            })}
            <Text >Upload new document</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
