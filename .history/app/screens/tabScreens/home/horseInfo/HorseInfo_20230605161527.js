import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Linking,
  Platform,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import FileViewer from 'react-native-file-viewer';
import RNFS from 'react-native-fs';
import {styles} from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  BottomBtn,
  GButton,
  HorseItemHorizontal,
  LoadingModal,
} from 'app/components';
import StarRating from 'react-native-star-rating';
import owner from 'app/assets/img/noimg.png';
import chat from 'app/assets/img/chat.png';
import doc from 'app/assets/img/doc.png';
import like from 'app/assets/img/like.png';
import dislike from 'app/assets/img/dislike.png';
import back from 'app/assets/img/back.png';
import call from 'app/assets/img/call.png';
import axiosInstance from 'app/networking/api';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player';

export function HorseInfo({navigation, route}) {
  const [data, setData] = useState([]);
  const [likeDisLike, setLikeDisLike] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [more, setMore] = useState([]);
  const [starCount, setStarCount] = useState('');
  const [choosed, setChoosed] = useState('');
  const [load, setLoad] = useState(false);
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  let phoneNumber = 8777111223;
  let player = useRef();
  let openMap = () => {
    Platform.OS === 'ios'
      ? Linking.openURL(`http://maps.apple.com/maps?daddr=${data[0]?.location}`)
      : Linking.openURL(
          `http://maps.google.com/maps?daddr=${data[0]?.location}`,
        );
  };

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    try {
      setLoad(true);
      let res = await axiosInstance.get(`/get-horse/${route.params.id}`);
      setData(res.data[0]);
      setLikeDisLike(res.data[0][0].favorite);
      setMore(res.data[1]);
      setStarCount(res.data[0][0].user.rate);
      setChoosed(res.data[0][0].medias[0]);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      console.log(error.response);
    }
  };

  let getOwnerData = async () => {
    try {
      let res = await axiosInstance.get(`/get-owner/${data?.[0]?.user.id}`);
      navigation.navigate('OwnerProfile', {owner: res.data[0], getData});
    } catch (error) {
      console.log(error.response);
    }
  };

  let onLikeDisLike = async num => {
    try {
      setLikeDisLike(!likeDisLike);
      let res = await axiosInstance.post(`/favorite/${route.params.id}/${num}`);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  function getUrlExtension(url) {
    return url.split(/[#?]/)[0].split('.').pop().trim();
  }

  let getDate = async (id, ind) => {
    try {
      let res = await axiosInstance.get(`/get-cards`);
      navigation.navigate('PaymentMethod', {horse: data[0], data: res.data});
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <View style={[styles.container, {height: '100%'}]}>
      <View>
        <View style={styles.imageContainer}>
          {choosed.types === 'documents' ? (
            <Image
              source={{uri: choosed.url}}
              style={styles.topImg}
              resizeMode="contain"
            />
          ) : choosed.types === 'photos' ? (
            <Image
              source={{uri: choosed.url}}
              style={styles.topImg}
              resizeMode="contain"
            />
          ) : (
            <VideoPlayer
              video={{uri: choosed.url}}
              style={styles.topImg}
              disableFullscreen
              customStyles={{}}
            />
          )}
          <TouchableOpacity
            style={[styles.backView, {top: statusBarHeight}]}
            onPress={() => navigation.goBack()}>
            <Image source={back} style={styles.backIc} />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          {route.params.boughten ? null : likeDisLike ? (
            <TouchableOpacity
              style={styles.likeView}
              onPress={() => onLikeDisLike(0)}>
              <Image source={like} style={styles.like} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.likeView}
              onPress={() => onLikeDisLike(1)}>
              <Image source={dislike} style={styles.like} />
            </TouchableOpacity>
          )}
        </View>
        <ScrollView
          bounces={false}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.topImgView}>
          {data?.[0]?.medias &&
            data[0].medias.map((item, index) => {
              if (item.types === 'photos') {
                return (
                  <TouchableOpacity
                    style={styles.horseImgView}
                    onPress={() => setChoosed(item)}>
                    <Image source={{uri: item.url}} style={styles.horseIc} />
                  </TouchableOpacity>
                );
              }
            })}
          {data?.[0]?.medias &&
            data[0].medias.map((item, index) => {
              if (item.types === 'videos') {
                return (
                  <TouchableOpacity
                    style={styles.horseImgView}
                    onPress={() => setChoosed({...item})}>
                    <Video
                      style={styles.video}
                      source={{uri: item.url}}
                      // controls={true}
                      paused
                    />
                  </TouchableOpacity>
                );
              }
            })}
        </ScrollView>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 16}}>
        <View style={styles.infoView}>
          <Text style={styles.titleInfo}>About</Text>
          <Text style={styles.titleName}>{data[0]?.name}</Text>
          <View style={styles.infoItem}>
            <Text style={styles.infoItemName}>Reg N:</Text>
            <Text style={styles.infoText}> {data[0]?.registration_number}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoItemName}>Date of Birth:</Text>
            <Text style={styles.infoText}> {data[0]?.date_of_birth}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoItemName}>Color:</Text>
            <Text style={styles.infoText}> {data[0]?.color}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoItemName}>Breed:</Text>
            <Text style={styles.infoText}> {data[0]?.breed}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoItemName}>Sex:</Text>
            <Text style={styles.infoText}> {data[0]?.sex}</Text>
          </View>
          {data[0]?.dam && (
            <View style={styles.infoItem}>
              <Text style={styles.infoItemName}>Dam:</Text>
              <Text style={styles.infoText}> {data[0]?.dam}</Text>
            </View>
          )}
          {data[0]?.sire && (
            <View style={styles.infoItem}>
              <Text style={styles.infoItemName}>Sire:</Text>
              <Text style={styles.infoText}> {data[0]?.sire}</Text>
            </View>
          )}
          <View style={styles.infoItem}>
            <Text style={styles.infoItemName}>Description:</Text>
            <Text style={styles.infoTextDesc}> {data[0]?.description}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoItemName}>Discipline:</Text>
            <Text style={styles.infoText}> {data[0]?.discipline}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoItemName}>Condition :</Text>
            <Text style={styles.infoText}> {data[0]?.condition}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoItemName}>Earnings:</Text>
            <Text style={styles.infoText}> {data[0]?.earnings}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoItemName}>Height:</Text>
            <Text style={styles.infoText}> {data[0]?.height}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoItemName}>Location:</Text>
            <TouchableOpacity onPress={openMap}>
              <Text style={styles.infoTextLoc}> {data[0]?.location} </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoItemName}>Produced Earnings:</Text>
            <Text style={styles.infoTextProd}>
              {' '}
              {data[0]?.produced_earnings}
            </Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoItemName}>Training:</Text>
            <Text style={styles.infoText}> {data[0]?.training}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoItemName}>Weight:</Text>
            <Text style={styles.infoText}> {data[0]?.weight}</Text>
          </View>
          <Text style={styles.titlePrice}>${data[0]?.price}</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {data?.[0]?.medias &&
              data[0].medias.map((item, Index) => {
                if (item.types === 'documents') {
                  return (
                    <TouchableOpacity
                      style={styles.horseDocView}
                      onPress={() => {
                        const extension = getUrlExtension(item.url);
                        const localFile = `${RNFS.DocumentDirectoryPath}/temporaryfile.${extension}`;
                        const options = {
                          fromUrl: item.url,
                          toFile: localFile,
                        };
                        RNFS.downloadFile(options)
                          .promise.then(() => FileViewer.open(localFile))
                          .then(() => {
                            // success
                          })
                          .catch(error => {
                            // error
                          });
                      }}>
                      <Image source={doc} style={styles.docIc} />
                    </TouchableOpacity>
                  );
                }
              })}
          </ScrollView>
        </View>
        {!route.params.boughten && (
          <View style={styles.ownerTop}>
            <TouchableOpacity style={styles.ownerView} onPress={getOwnerData}>
              <Text style={styles.ownerText}>Owner</Text>
              <View style={styles.gFlex}>
                <View style={styles.picView}>
                  <Image
                    source={
                      data?.[0]?.user?.avatar
                        ? {uri: data?.[0]?.user.avatar}
                        : owner
                    }
                    style={styles.ownerImg}
                  />
                  <View>
                    <Text style={styles.nameText}>{data?.[0]?.user.name}</Text>
                    <Text style={styles.contactType}>
                      Contact: Phone Number
                    </Text>
                    <Text style={styles.nameText}>
                      {data?.[0]?.user.phone !== 'null' &&
                        data?.[0]?.user.phone}
                    </Text>
                    <StarRating
                      halfStarEnabled={true}
                      disabled={true}
                      maxStars={5}
                      rating={starCount}
                      selectedStar={rating => setStarCount(rating)}
                      emptyStar={require('app/assets/img/starE.png')}
                      fullStar={require('app/assets/img/starF.png')}
                      halfStar={require('app/assets/img/starH.png')}
                      starSize={20}
                      starStyle={styles.stars}
                    />
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => Linking.openURL(`tel:${phoneNumber}`)}>
                    <Image source={call} style={styles.callIc} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={chat} style={styles.chatIc} />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <GButton
              btnName="Buy now"
              customStyle={styles.custom}
              handelMove={() =>
                navigation.navigate('PaymentMethod', {horse: data[0]})
              }
            />
          </View>
        )}
        {route.params.boughten && (
          <BottomBtn
            nameL={route.params.item.can_cancel ? "Cancel":'Refund'}
            nameR="Accept"
            onChangeL={async() => console.log(route.params.item.id)}
            //  onChangeR={ }
            styles={styles.bottomBtn}
          />
        )}
        {!route.params.boughten && more.length > 0 && (
          <Text style={styles.title}>More from {data[0].user.name}</Text>
        )}
        {!route.params.boughten && more.length > 0 && (
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.moreView}>
            {more.map((item, index) => {
              return (
                <HorseItemHorizontal
                  item={item}
                  index={index}
                  navigation={navigation}
                />
              );
            })}
          </ScrollView>
        )}
      </ScrollView>
      <LoadingModal visible={load} />
    </View>
  );
}
