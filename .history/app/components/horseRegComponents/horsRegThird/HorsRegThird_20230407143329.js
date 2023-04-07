import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
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
  condition,
} from 'app/constant/filterData';
import {useDispatch, useSelector} from 'react-redux';
import { InputHorseReg } from 'app/components/inputHorseReg';

export function HorsRegThird(props) {
  let dispatch = useDispatch();
  let store = useSelector(state => state.horseRegister);
  const [regNum, setRegNum] = useState(new Date().getTime());
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
    <ScrollView contentContainerStyle={styles.container}>
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
          dispatch({
            type: 'SET_HORSEINFO',
            payload: {breed:d},
          })
        }}
      />
      <DropDownItem
        title="Sex"
        info={sex}
        saveInfo={d => {
          setSexH(d);
          dispatch({
            type: 'SET_HORSEINFO',
            payload: {s},
          })
        }}
      />
      <View style={styles.gView}>
        <Text style={styles.titleText}>Sir</Text>
        <TouchableOpacity  onPress={() => {}}>
          <TextInput
            onChangeText={t => setSir(t)}
            numberOfLines={1}
            style={styles.input}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.gView}>
        <Text style={styles.titleText}>Dam</Text>
        <TouchableOpacity  onPress={() => {}}>
          <TextInput
            onChangeText={t => setDam(t)}
            numberOfLines={1}
            style={styles.input}
          />
        </TouchableOpacity>
      </View>
      <InputHorseReg title="Registration number" value={`${regNum}`} editable={false} />
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
    </ScrollView>
  );
}
