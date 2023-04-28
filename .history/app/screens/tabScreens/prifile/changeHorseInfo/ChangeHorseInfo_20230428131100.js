import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
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
import {styles} from './style';
import topimg from 'app/assets/img/topimg.png';
import playV from 'app/assets/img/vidp.png';
import rbin from 'app/assets/img/rbin.png';
import camera from 'app/assets/img/camera.png';
import video from 'app/assets/img/vid.png';
import data from '../../home/src/data';
import uplFileIc from 'app/assets/img/uplfileIc.png';
import {GeneralModal} from 'app/components/modal/generalModal/GeneralModal';
import {useSelector} from 'react-redux';
import axiosInstance from 'app/networking/api';

export function ChangeHorseInfo({navigation, route}) {
  let userHorseInfo = useSelector(
    state => state.userInfo?.horses[route.params.index],
  );

  const [load, setLoad] = useState(false);
  const [err, setErr] = useState('');
  const [errModal, setErrModal] = useState(false);
  const [genImg, setGenImg] = useState(userHorseInfo?.medias?.[0]?.url);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleDelete, setModalVisibleDelete] = useState(false);
  const [location, setLocation] = useState(
    userHorseInfo?.location ? userHorseInfo.location : '',
  );
  const [changePicModal, setChangePicModal] = useState(false);
  let doc = [
    ...userHorseInfo?.medias.filter((item, index) => item.type === 'documents'),
  ];
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
    userHorseInfo.produced_earnings ? userHorseInfo.produced_earnings : '',
  );
  const [earnings, setEarnings] = useState(
    userHorseInfo.earnings ? userHorseInfo.earnings : '',
  );
  const [sir, setSir] = useState(userHorseInfo.sire ? userHorseInfo.sire : '');
  const [dam, setDam] = useState(userHorseInfo.dam ? userHorseInfo.dam : '');
  const [description, setdDescription] = useState(
    userHorseInfo.description ? userHorseInfo.description : '',
  );

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
      description && formData.append('description', description);
      sir && formData.append('sire', sir);
      dam && formData.append('dam', dam);
      // userHorseInfo?.videoData?.map((item, index) => {
      //   if (item) {
      //     formData.append(`videos[]`, {
      //       name: `video${index + 1}${item.fileName.substr(
      //         item.fileName.lastIndexOf('.'),
      //       )}`,
      //       uri: item.uri,
      //       type: item.type,
      //     });
      //   }
      // });
      // userHorseInfo?.doc?.map((item, index) => {
      //   if (item) {
      //     formData.append('documents[]', {
      //       name: item.name,
      //       uri: item.uri,
      //       type: item.type,
      //     });
      //   }
      // });
      // userHorseInfo?.allImg?.map((item, index) => {
      //   formData.append(`photos[]`, {
      //     name: item.fileName,
      //     uri: item.uri,
      //     type: item.type,
      //   });
      // });
      let res = await axiosInstance.post(`/edit-horse`, formData);
      route.params.getinfo();
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
      let res = await axiosInstance.delete(
        `/delete-horse/${userHorseInfo.id}`,
   
      );
      route.params.getinfo();
      setModalVisibleDelete(!modalVisibleDelete)
      navigation.goBack()
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.content}>
      <View>
        <SafeAreaView />
        <HeaderNavi
          leftBtn={userHorseInfo.name}
          leftOnPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView
        contentContainerStyle={styles.generalView}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.titleText}>Gallery</Text>
        <ImageBackground
          source={{uri: genImg}}
          style={styles.topimg}
          resizeMode="contain"
          borderTopLeftRadius={22}
          borderTopRightRadius={22}>
          <TouchableOpacity
            style={styles.chooseBtn}
            onPress={() => setChangePicModal(!changePicModal)}>
            <Text style={styles.chooseBtnText}>Choose new profile picture</Text>
          </TouchableOpacity>
        </ImageBackground>
        <ScrollView
          bounces={false}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.topImgView}>
          {userHorseInfo.medias.map((item, index) => {
            if (item.type === 'photos') {
              return (
                <ImageBackground
                  source={{uri: item.url}}
                  style={styles.horseIc}>
                  <TouchableOpacity>
                    <Image source={rbin} style={styles.rbin} />
                  </TouchableOpacity>
                  {item.type === 'videos' && (
                    <Image source={playV} style={styles.vidType} />
                  )}
                </ImageBackground>
              );
            } else if (item.type === 'videos') {
              return (
                <ImageBackground
                  source={{uri: item.url}}
                  style={styles.horseIc}>
                  <TouchableOpacity>
                    <Image source={rbin} style={styles.rbin} />
                  </TouchableOpacity>
                  {item.type === 'videos' && (
                    <Image source={playV} style={styles.vidType} />
                  )}
                </ImageBackground>
              );
            }
          })}
        </ScrollView>
        <View style={styles.addPicVid}>
          <TouchableOpacity
            style={styles.addView}
            onPress={() => setModalVisible(!modalVisible)}>
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
            if (item.type === 'documents') {
              return (
                <View style={styles.uplFileView} key={index}>
                  <Image source={uplFileIc} style={styles.uplFileIc} />
                  <View>
                    <Text numberOfLines={1} style={styles.itemTitle}>
                      {item.type}
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
            }
          })}
          <View style={styles.uploadView}>
            <TouchableOpacity>
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
          <Text style={styles.titleText}>Sir</Text>
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
          value={userHorseInfo.registration_number}
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
        subTitle="You can add only 3 photos."
        infoText="If you want to add new photo please delete the one from your gallery"
        btnText="Ok"
        btns={true}
        onClose={() => setModalVisible(!modalVisible)}
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
        img={userHorseInfo.medias}
        genImg={genImg}
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
