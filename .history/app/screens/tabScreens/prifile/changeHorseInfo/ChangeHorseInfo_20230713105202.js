import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  TextInput,
  Platform,
} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import {
  breed,
  sex,
  height,
  weight,
  color,
  price,
  training,
  discipline,
  condition,
} from 'app/constant/filterData';
import {
  ChangePhotoModal,
  DropDownItem,
  ErrorModal,
  HeaderNavi,
  InputHorseReg,
  LoadingModal,
} from 'app/components';
import FileViewer from 'react-native-file-viewer';
import RNFS from 'react-native-fs';
import {styles} from './style';
import playV from 'app/assets/img/vidp.png';
import rbin from 'app/assets/img/rbin.png';
import white from 'app/assets/img/bgw.png';
import camera from 'app/assets/img/camera.png';
import video from 'app/assets/img/vid.png';
import uplFileIc from 'app/assets/img/uplfileIc.png';
import {GeneralModal} from 'app/components/modal/generalModal/GeneralModal';
import {useSelector} from 'react-redux';
import axiosInstance from 'app/networking/api';
import {ChooseImage} from 'app/components/imagePicker';
import DocumentPicker from 'react-native-document-picker';
import Video from 'react-native-video';
import {Modal} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import ReactNativeModal from 'react-native-modal';

export function ChangeHorseInfo({navigation, route}) {
  let userHorseInfo = useSelector(
    state => state.userInfo?.horses[route.params.index],
  );
  const [fullImg, setFullImg] = useState([]);
  const [load, setLoad] = useState(false);
  const [uplImg, setUplImg] = useState(false);
  const [err, setErr] = useState('');
  const [errModal, setErrModal] = useState(false);
  const [genImg, setGenImg] = useState(userHorseInfo?.medias?.[0]?.url);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleDelete, setModalVisibleDelete] = useState(false);
  const [location, setLocation] = useState(
    userHorseInfo?.location ? userHorseInfo.location : '',
  );
  const [changePicModal, setChangePicModal] = useState(false);

  const [name, setName] = useState(
    userHorseInfo?.name ? userHorseInfo.name : '',
  );
  const [date, setDate] = useState(
    userHorseInfo?.date_of_birth ? userHorseInfo.date_of_birth : '',
  );
  const [disciplineH, setDisciplineH] = useState(
    userHorseInfo?.discipline ? userHorseInfo.discipline : '',
  );
  const [breedH, setBreedH] = useState(
    userHorseInfo?.breed ? userHorseInfo.breed : '',
  );
  const [sexH, setSexH] = useState(userHorseInfo?.sex ? userHorseInfo.sex : '');
  const [heightH, setHeightH] = useState(
    userHorseInfo?.height ? userHorseInfo.height : '',
  );
  const [weightH, setWeightH] = useState(
    userHorseInfo?.weight ? userHorseInfo.weight : '',
  );
  const [colorH, setColorH] = useState(
    userHorseInfo?.color ? userHorseInfo.color : '',
  );
  const [trainingH, setTrianingH] = useState(
    userHorseInfo?.training ? userHorseInfo.training : '',
  );
  const [priceH, setPriceH] = useState(
    userHorseInfo?.price ? userHorseInfo.price : '',
  );
  const [conditionH, setConditionH] = useState(
    userHorseInfo?.condition ? userHorseInfo.condition : '',
  );
  const [proEarnings, setProEarnings] = useState(
    userHorseInfo?.produced_earnings ? userHorseInfo.produced_earnings : '',
  );
  const [earnings, setEarnings] = useState(
    userHorseInfo?.earnings ? userHorseInfo.earnings : '',
  );
  const [sir, setSir] = useState(userHorseInfo?.sire ? userHorseInfo.sire : '');
  const [dam, setDam] = useState(userHorseInfo?.dam ? userHorseInfo.dam : '');
  const [description, setdDescription] = useState(
    userHorseInfo?.description ? userHorseInfo.description : '',
  );
  const [img, setImg] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [videos, setVideos] = useState([]);
  const [ids, setIds] = useState([]);

  let getMedia = () => {
    useMemo(() => {
      let images = [];
      let video = [];
      let doc = [];
      userHorseInfo?.medias.map((item, index) => {
        if (item.types === 'photos') {
          images.push(item);
        } else if (item.types === 'videos') {
          video.push(item);
        } else if (item.types === 'documents') {
          doc.push(item);
        }
      });
      setVideos([...video]);
      setDocuments([...doc]);
      setImg([...images]);
    }, []);
  };

  getMedia();

  let deletImg = async (id, ind) => {
    try {
      if (img.length > 1) {
        let res = await axiosInstance.delete(
          `/delete-media/${id}/${userHorseInfo.id}`,
        );
        route.params.getinfo();
        setImg([...res.data]);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  let deleteVideo = async (id, ind) => {
    try {
      id &&
        (await axiosInstance.delete(`/delete-media/${id}/${userHorseInfo.id}`));
      let arr = videos.filter((item, index) => {
        return ind !== index;
      });
      setVideos(arr);
      route.params.getinfo();
    } catch (error) {
      console.log(error.response);
    }
  };

  let deleteDoc = async (id, ind) => {
    try {
      id &&
        (await axiosInstance.delete(`/delete-media/${id}/${userHorseInfo.id}`));
      let arr = documents.filter((item, index) => {
        return ind !== index;
      });
      setDocuments(arr);
      route.params.getinfo();
    } catch (error) {
      console.log(error.response);
    }
  };

  let editInfo = async () => {
    try {
      setLoad(true);
      let formData = new FormData();
      formData.append('id', userHorseInfo.id);
      formData.append('name', name);
      formData.append('registration_number', userHorseInfo.registration_number);
      formData.append('date_of_birth', date);
      formData.append('breed', breedH);
      formData.append('price', priceH);
      formData.append('sex', sexH);
      formData.append('height', heightH);
      formData.append('weight', weightH);
      formData.append('color', colorH);
      formData.append('discipline', disciplineH);
      formData.append('training', trainingH);
      formData.append('earnings', earnings);
      formData.append('produced_earnings', proEarnings);
      formData.append('condition', conditionH);
      formData.append('location', location);
      ids.length > 0 && formData.append('deletedMedia', ids);
      description && formData.append('description', description);
      sir && formData.append('sire', sir);
      dam && formData.append('dam', dam);
      videos?.map((item, index) => {
        if (!item.id) {
          formData.append(`videos[]`, {
            name: `video${index + 1}${item.fileName.substr(
              item.fileName.lastIndexOf('.'),
            )}`,
            uri: item.url,
            type: item.type,
          });
        }
      });
      documents?.map((item, index) => {
        if (!item.id) {
          formData.append('documents[]', {
            name: item.name,
            uri: item.url,
            type: item.types,
          });
        }
      });
      img?.map((item, index) => {
        if (!item.id) {
          formData.append(`photos[]`, {
            name: item.fileName,
            uri: item.url,
            type: item.type,
          });
        }
      });
      let res = await axiosInstance.post(`/edit-horse`, formData);
      route.params.getinfo();
      let media = res.data.newHorse?.[0]?.medias;

      let filtered = media?.filter((item, index) => {
        if (item.types === 'photos') {
          return item;
        }
      });
      setImg([...filtered]);
      setLoad(false);
    } catch (err) {
      setLoad(false);
      console.log(err);
      console.log(err.response);
      setErrModal(!errModal);
    }
  };

  let onDelet = async () => {
    try {
      await axiosInstance.delete(`/delete-horse/${userHorseInfo.id}`);
      route.params.getinfo();
      setModalVisibleDelete(!modalVisibleDelete);
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  let changeMainPic = async (media_id, imgData) => {
    try {
      let filtered = imgData?.filter((item, index) => {
        if (item.types === 'photos') {
          return item;
        }
      });
      await axiosInstance.put(
        `/change-main-photo/${userHorseInfo.id}/${media_id}`,
      );
      setImg([...filtered]);
      route.params.getinfo();
      setChangePicModal(!changePicModal);
    } catch (error) {
      console.log(error);
    }
  };

  let addImg = () => {
    ChooseImage(async imageRes => {
      let newImg = {};
      newImg.types = 'photos';
      newImg.fileName = imageRes.assets[0].fileName;
      newImg.url = imageRes.assets[0].uri;
      newImg.type = imageRes.assets[0].type;
      setImg([...img, newImg]);
    }, 'photo');
  };

  let addVideo = () => {
    ChooseImage(async imageRes => {
      let newVideo = {};
      newVideo.types = 'videos';
      newVideo.fileName = imageRes.assets[0].fileName;
      newVideo.url = imageRes.assets[0].uri;
      newVideo.type = imageRes.assets[0].type;
      setVideos([...videos, newVideo]);
    }, 'video');
  };

  let addDoc = async () => {
    try {
      let files = await DocumentPicker.pickMultiple({
        type: [
          DocumentPicker.types.images,
          DocumentPicker.types.pdf,
          // DocumentPicker.types.plainText,
          // DocumentPicker.types.video,
          ...Platform.select({
            ios: [
              'com.microsoft.word.doc',
              'com.microsoft.excel.xls',
              'com.microsoft.powerpoint.​ppt',
              'org.openxmlformats.wordprocessingml.document',
              'org.openxmlformats.spreadsheetml.sheet',
              'org.openxmlformats.presentationml.presentation',
              'org.openxmlformats.presentationml.slideshow',
            ],
            android: ['application/*'],
          }),
        ],
      });
      let arr = [];
      files.map((item, index) => {
        let newDoc = {};
        newDoc.types = 'documents';
        newDoc.name = item.name;
        newDoc.size = item.size;
        newDoc.url = item.uri;
        newDoc.type = item.type;
        arr.push(newDoc);
      });
      setDocuments([...documents, ...arr]);
    } catch (e) {
      console.log(e);
    }
  };

  function getUrlExtension(url) {
    return url.split(/[#?]/)[0].split('.').pop().trim();
  }

  const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  function niceBytes(x) {
    let l = 0,
      n = parseInt(x, 10) || 0;
    while (n >= 1024 && ++l) {
      n = n / 1024;
    }
    return n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l];
  }
  const [fullScreenModal, setFullScreenModal] = useState(false);
  return (
    <View style={styles.content}>
      <View>
        <SafeAreaView />
        <HeaderNavi
          leftBtn={userHorseInfo?.name}
          leftOnPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView
        contentContainerStyle={styles.generalView}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.titleText}>Gallery</Text>
        <ImageBackground
          source={
            img.length > 0
              ? {
                  uri: img?.filter((item, index) => {
                    return item.main === 1;
                  })[0]?.url,
                }
              : white
          }
          style={styles.topimg}
          resizeMode="contain"
          borderTopLeftRadius={22}
          borderTopRightRadius={22}>
          <TouchableOpacity
            style={styles.chooseBtn}
            onPress={() => {
              const even = element => !element.id;
              img.some(even)
                ? setUplImg(!uplImg)
                : setChangePicModal(!changePicModal);
            }}>
            <Text style={styles.chooseBtnText}>Choose new profile picture</Text>
          </TouchableOpacity>
        </ImageBackground>
        <ScrollView
          bounces={false}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.topImgView}>
          {userHorseInfo?.medias &&
            img.map((item, index) => {
              if (item.types === 'photos') {
                return (
                  <>
                    <TouchableOpacity
                      onPress={() => setFullScreenModal(!fullScreenModal)}>
                      <ImageBackground
                        resizeMode="contain"
                        source={{uri: item.url}}
                        style={styles.horseIc}></ImageBackground>
                    </TouchableOpacity>
                    <ReactNativeModal
                      style={{
                        margin: 0,
                        backgroundColor: '#000',
                        paddingTop: 20,
                      }}
                      swipeDirection={'down'}
                      onSwipeComplete={()=>setFullScreenModal(false)}
                      visible={fullScreenModal}
                      transparent={true}>
                      <ImageViewer
                        imageUrls={img}
                        enablePreload={true}
                        index={index}
                        useNativeDriver={true}
                        enableSwipeDown={false}
                        saveToLocalByLongPress={false}
                      />

                      <TouchableOpacity
                        style={{position: 'absolute', bottom: 30, right: 150}}
                        onPress={() => {
                          setIds([...ids, item.id]);
                          deletImg(item.id, index);
                        }}>
                        <Image source={rbin} style={styles.rbin} />
                      </TouchableOpacity>
                    </ReactNativeModal>
                  </>
                );
              }
            })}
          {videos.map((item, index) => {
            return (
              <View
                style={styles.horseImgView}
                onPress={() => setChoosed({...item})}>
                <Video
                  style={styles.video}
                  source={{uri: item.url}}
                  // controls={true}
                  paused
                />
                <TouchableOpacity
                  style={styles.delIc}
                  onPress={() => {
                    setIds([...ids, item.id]);
                    deleteVideo(item.id, index);
                  }}>
                  <Image source={rbin} style={styles.rbin} />
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.addPicVid}>
          <TouchableOpacity
            style={styles.addView}
            onPress={() =>
              img.length < 4 ? addImg() : setModalVisible(!modalVisible)
            }>
            <Image source={camera} style={styles.camera} />
            <Text style={styles.addText}>+ add photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addView}
            onPress={() => videos.length < 2 && addVideo()}>
            <Image source={video} style={styles.camera} />
            <Text style={styles.addText}>+ add video</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.titleText}>Documents</Text>
        <View>
          {documents.length > 0 ? (
            documents.map((item, index) => {
              if (item.types === 'documents') {
                return (
                  <TouchableOpacity
                    style={styles.uplFileView}
                    key={index}
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
                    <Image source={uplFileIc} style={styles.uplFileIc} />
                    <View>
                      <Text numberOfLines={1} style={styles.itemTitle}>
                        {item.types}
                      </Text>
                      <Text numberOfLines={1} style={styles.itemInfo}>
                        Size: {niceBytes(item.size)}, Format: {item.format}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={styles.deleteItemView}
                      onPress={() => {
                        setIds([...ids, item.id]);
                        deleteDoc(item.id, index);
                      }}>
                      <Image source={rbin} style={styles.deleteItem} />
                    </TouchableOpacity>
                  </TouchableOpacity>
                );
              }
            })
          ) : (
            <View style={styles.noDataView}>
              <Text style={styles.noData}>No data</Text>
            </View>
          )}
          <View style={styles.uploadView}>
            <TouchableOpacity onPress={addDoc}>
              <Text style={styles.uploadText}>Upload new document</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.titleText}>Information</Text>
        <InputHorseReg
          title="Name"
          value={name}
          onChange={text => setName(text)}
          colorT={{color: '#190C04'}}
        />
        <InputHorseReg
          title="Enter Price"
          value={priceH}
          colorT={{color: '#190C04'}}
          onChange={t => setPriceH(t)}
        />
        <DropDownItem
          colorT={{color: '#190C04'}}
          title="Date of birth"
          date={true}
          dateInfo={date}
        />
        <DropDownItem
          colorT={{color: '#190C04'}}
          title="Breed"
          item={breedH}
          info={breed}
          saveInfo={d => {
            setBreedH(d);
          }}
        />
        <DropDownItem
          colorT={{color: '#190C04'}}
          title="Sex"
          item={sexH}
          info={sex}
          saveInfo={d => {
            setSexH(d);
          }}
        />
        <View style={styles.gView}>
          <Text style={styles.titleText}>Sire</Text>
          <View style={styles.container}>
            <TextInput
              onChangeText={t => setSir(t)}
              numberOfLines={1}
              style={styles.input}
              value={sir}
            />
          </View>
        </View>
        <View style={styles.gView}>
          <Text style={styles.titleText}>Dam</Text>
          <View style={styles.container}>
            <TextInput
              onChangeText={t => setDam(t)}
              numberOfLines={1}
              style={styles.input}
              value={dam}
            />
          </View>
        </View>
        <View style={styles.gView}>
          <Text style={styles.titleText}>Description</Text>
          <View onPress={() => {}}>
            <TextInput
              onChangeText={t => setdDescription(t)}
              value={description}
              multiline={true}
              style={styles.inputOptional}
              maxLength={250}
            />
            <Text style={styles.numText}>{description.length}/250</Text>
          </View>
        </View>
        <InputHorseReg
          title="Registration number"
          value={userHorseInfo?.registration_number}
          colorT={{color: '#190C04'}}
          editable={false}
        />
        <View style={styles.gView}>
          <Text style={styles.titleText}>Location</Text>
          <View style={styles.container}>
            <TextInput
              onChangeText={t => setLocation(t)}
              numberOfLines={1}
              style={styles.input}
              value={location}
            />
          </View>
        </View>
        <DropDownItem
          colorT={{color: '#190C04'}}
          title="Height"
          item={heightH}
          info={height}
          saveInfo={d => {
            setHeightH(d);
          }}
        />
        <DropDownItem
          colorT={{color: '#190C04'}}
          title="Weight"
          item={weightH}
          info={weight}
          saveInfo={d => {
            setWeightH(d);
          }}
        />
        <DropDownItem
          colorT={{color: '#190C04'}}
          title="Color"
          item={colorH}
          info={color}
          saveInfo={d => {
            setColorH(d);
          }}
        />
        <DropDownItem
          colorT={{color: '#190C04'}}
          title="Discipline"
          info={discipline}
          item={disciplineH}
          saveInfo={d => {
            setDisciplineH(d);
          }}
        />
        <DropDownItem
          colorT={{color: '#190C04'}}
          title="Training"
          item={trainingH}
          info={training}
          saveInfo={d => {
            setTrianingH(d);
          }}
        />
        <DropDownItem
          colorT={{color: '#190C04'}}
          title="Earnings"
          item={earnings}
          info={price}
          saveInfo={d => {
            setEarnings(d);
          }}
        />
        <DropDownItem
          colorT={{color: '#190C04'}}
          title="Produced Earnings"
          item={proEarnings}
          info={price}
          saveInfo={d => {
            setProEarnings(d);
          }}
        />
        <DropDownItem
          colorT={{color: '#190C04'}}
          title="Condition"
          item={conditionH}
          info={condition}
          saveInfo={d => {
            setConditionH(d);
          }}
        />
        <View style={styles.deleteView}>
          <TouchableOpacity
            style={styles.delView}
            onPress={() => setModalVisibleDelete(!modalVisibleDelete)}>
            <Text style={styles.deleteText}>Delete this horse account</Text>
          </TouchableOpacity>
          <Text style={styles.infoText}>
            If you delete this horse now, you lose all information about it
          </Text>
        </View>
      </ScrollView>
      <View style={styles.addBtn}>
        <TouchableOpacity
          style={[styles.updView, {alignItems: 'center'}]}
          onPress={editInfo}>
          <Text style={styles.updText}>Update information</Text>
        </TouchableOpacity>
      </View>
      <GeneralModal
        isVisible={modalVisible}
        title="Oh no!"
        subTitle="You can add only 4 photos."
        infoText="If you want to add new photo please delete the one from your gallery"
        btnText="Ok"
        btns={true}
        onClose={() => setModalVisible(!modalVisible)}
      />
      <GeneralModal
        isVisible={uplImg}
        title="Oh no!"
        infoText="Please before updating profile photo, upload all added photos"
        btnText="Ok"
        btns={true}
        onClose={() => setUplImg(!uplImg)}
      />
      <GeneralModal
        isVisible={modalVisibleDelete}
        title="Delete account"
        subTitle="Are you sure you want to delete your account?"
        infoText="All your data will be permanently deleted."
        btnText="Yes"
        borderBtnText="No"
        btns={false}
        onLeftFunc={() => setModalVisibleDelete(!modalVisibleDelete)}
        onRightFunc={onDelet}
        onClose={() => setModalVisibleDelete(!modalVisibleDelete)}
      />
      <ChangePhotoModal
        isVisible={changePicModal}
        onClose={() => setChangePicModal(!changePicModal)}
        img={img}
        changeMainPic={changeMainPic}
      />
      <LoadingModal visible={load} />
      <ErrorModal
        isVisible={errModal}
        err={err}
        onClose={() => setErrModal(!errModal)}
      />
    </View>
  );
}
