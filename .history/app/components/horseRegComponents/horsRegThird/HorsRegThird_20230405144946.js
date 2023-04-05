import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import ava from 'app/assets/img/ava.png';
import {styles} from './style';
import {DropDownItem} from 'app/components/dropDownItem';
import {
  breed,
  sex,
  height,
  weight,
  color,
  price,
  training,
  discipline,
} from 'app/constant/filterData';
import {useDispatch, useSelector} from 'react-redux';

export function HorsRegThird(props) {
  const [breeds, setBreeds] = useState('');
  const [sexH, setSexH] = useState('');
  const [heightH, setHeightH] = useState('');
  const [weightH, setWeightH] = useState('');
  const [colorH, setColorH] = useState('');
  const [trainingH, setTrianingH] = useState('');
  const [priceH, setPriceH] = useState('');
  const [proEarnings, setProEarnings] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.avaView}>
        <Image source={ava} style={styles.ava} />
        <Text style={styles.avaText}>Name</Text>
        <Text style={styles.avaText}>Registration number</Text>
      </View>
      <DropDownItem title="Date of birth" date={true} />
      <DropDownItem
        title="Breed"
        info={breed}
        saveInfo={d => {
          setBreeds(d);
        }}
      />
      <DropDownItem
        title="Sex"
        info={sex}
        saveInfo={d => {
          setSexH(d);
        }}
      />
      <DropDownItem
        title="Height"
        info={height}
        saveInfo={d => {
          setHeightH(d);
        }}
      />
      <DropDownItem
        title="Weight"
        info={weight}
        saveInfo={d => {
          setWeightH(d);
        }}
      />
      <DropDownItem
        title="Color"
        info={color}
        saveInfo={d => {
          setColorH(d);
        }}
      />
      <DropDownItem
        title="Discipline"
        info={discipline}
        saveInfo={d => {
          setWeightH(d);
        }}
      />
      <DropDownItem
        title="Training"
        info={training}
        saveInfo={d => {
          setTrianingH(d);
        }}
      />
      <DropDownItem
        title="Earnings"
        info={price}
        saveInfo={d => {
          setPriceH(d);
        }}
      />
      <DropDownItem
        title="Earnings"
        info={price}
        saveInfo={d => {
          setPriceH(d);
        }}
      />
    </View>
  );
}
