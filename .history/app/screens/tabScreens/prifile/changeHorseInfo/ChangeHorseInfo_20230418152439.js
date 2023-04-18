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
  HeaderNavi,
  InputHorseReg,
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

export function ChangeHorseInfo({navigation, route}) {
  let userInfo = useSelector(
    state => state.userInfo.horses[route.params.index],
  );
  console.log(userInfo, 'fgsnv');
  const [genImg, setGenImg] = useState(userInfo.medias[0].url);
  const [modalVisible, setModalVisible] = useState(false);
  const [changePicModal, setChangePicModal] = useState(false);
  let doc = [...userInfo.medias.filter((item,index)=>item.type==="documents")];
  const [name,setName]=useState(userInfo.date_of_birth ? userInfo.date_of_birth :'')
  const [breeds, setBreeds] = useState('');
  const [sexH, setSexH] = useState('');
  const [heightH, setHeightH] = useState('');
  const [weightH, setWeightH] = useState('');
  const [colorH, setColorH] = useState('');
  const [trainingH, setTrianingH] = useState('');
  const [priceH, setPriceH] = useState('');
  const [conditionH, setConditionH] = useState('');
  const [proEarnings, setProEarnings] = useState('');
  const [sir, setSir] = useState('');
  const [dam, setDam] = useState('');
 
  return (
    <View style={styles.content}>
      <View>
        <SafeAreaView />
        <HeaderNavi
          leftBtn={route.params.item.name}
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
          {userInfo.medias.map((item, index) => {
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
            return  (   <ImageBackground source={{uri: item.url}} style={styles.horseIc}>
                <TouchableOpacity>
                  <Image source={rbin} style={styles.rbin} />
                </TouchableOpacity>
                {item.type === 'videos' && (
                  <Image source={playV} style={styles.vidType} />
                )}
              </ImageBackground>)
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
            if (item.type === 'documents'){  return (
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
            );}
          })}
          <View style={styles.uploadView}>
            <TouchableOpacity>
              <Text style={styles.uploadText}>Upload new document</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.titleText}>Information</Text>
        <InputHorseReg title="Name"  colorT={{color: '#190C04'}} />
        <InputHorseReg
          title="Registration number"
          value={` `}
          colorT={{color: '#190C04'}}
        />
        <InputHorseReg title="Enter Price" colorT={{color: '#190C04'}} />
        <DropDownItem
          colorT={{color: '#190C04'}}
          title="Date of birth"
          date={true}
        />
        <DropDownItem
          colorT={{color: '#190C04'}}
          title="Breed"
          info={breed}
          saveInfo={d => {
            setBreeds(d);
          }}
        />
        <DropDownItem
          colorT={{color: '#190C04'}}
          title="Sex"
          info={sex}
          saveInfo={d => {
            setSexH(d);
          }}
        />
        <View style={styles.gView}>
          <Text style={styles.titleText}>Sir</Text>
          <TouchableOpacity style={styles.container} onPress={() => {}}>
            <TextInput
              onChangeText={t => setSir(t)}
              numberOfLines={1}
              style={styles.input}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.gView}>
          <Text style={styles.titleText}>Dam</Text>
          <TouchableOpacity style={styles.container} onPress={() => {}}>
            <TextInput
              onChangeText={t => setDam(t)}
              numberOfLines={1}
              style={styles.input}
            />
          </TouchableOpacity>
        </View>
        <DropDownItem
          colorT={{color: '#190C04'}}
          title="Height"
          info={height}
          saveInfo={d => {
            setHeightH(d);
          }}
        />
        <DropDownItem
          colorT={{color: '#190C04'}}
          title="Weight"
          info={weight}
          saveInfo={d => {
            setWeightH(d);
          }}
        />
        <DropDownItem
          colorT={{color: '#190C04'}}
          title="Color"
          info={color}
          saveInfo={d => {
            setColorH(d);
          }}
        />
        <DropDownItem
          colorT={{color: '#190C04'}}
          title="Discipline"
          info={discipline}
          saveInfo={d => {
            setWeightH(d);
          }}
        />
        <DropDownItem
          colorT={{color: '#190C04'}}
          title="Training"
          info={training}
          saveInfo={d => {
            setTrianingH(d);
          }}
        />
        <DropDownItem
          colorT={{color: '#190C04'}}
          title="Earnings"
          info={price}
          saveInfo={d => {
            setPriceH(d);
          }}
        />
        <DropDownItem
          title="Produced Earnings"
          info={price}
          saveInfo={d => {
            setProEarnings(d);
          }}
        />
        <DropDownItem
          title="Condition"
          info={condition}
          saveInfo={d => {
            setConditionH(d);
          }}
        />
        <View style={styles.deleteView}>
          <TouchableOpacity style={styles.delView}>
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
          onPress={() => setModalVisible(!modalVisible)}>
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
      <ChangePhotoModal
        isVisible={changePicModal}
        onClose={() => setChangePicModal(!changePicModal)}
        img={userInfo.medias}
        genImg={genImg}
      />
    </View>
  );
}
