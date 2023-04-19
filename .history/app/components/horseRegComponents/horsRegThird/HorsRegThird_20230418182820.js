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
import {InputHorseReg} from 'app/components/inputHorseReg';
import {BottomBtn} from 'app/components/bottomBtn';

export function HorsRegThird({onNextPrev, percentage, navigation}) {
  let dispatch = useDispatch();
  let store = useSelector(state => state.horseRegister);
  const [date, setDate] = useState('');
  const [description,setText]=useState('')
  const [regNum, setRegNum] = useState(
    store.regNum ? store.regNum : new Date().getTime(),
  );
  const [breedH, setBreedH] = useState(store.breed ? store.breed : '');
  const [sexH, setSexH] = useState(store.sex ? store.sex : '');
  const [heightH, setHeightH] = useState(store.height ? store.height : '');
  const [weightH, setWeightH] = useState(store.weight ? store.weight : '');
  const [colorH, setColorH] = useState(store.color ? store.color : '');
  const [trainingH, setTrianingH] = useState(
    store.training ? store.training : '',
  );
  const [priceH, setPriceH] = useState(store.earnings ? store.earnings : '');
  const [conditionH, setConditionH] = useState(
    store.condition ? store.condition : '',
  );
  const [proEarnings, setProEarnings] = useState(
    store.producedEarnings ? store.producedEarnings : '',
  );
  const [disciplineH, setDisciplineH] = useState(
    store.discipline ? store.discipline : '',
  );
  const [sire, setSire] = useState(store.sire ? store.sire : '');
  const [dam, setDam] = useState(store.dam ? store.dam : '');
  const [err, setErr] = useState('');

  let goBack = () => {
    onNextPrev(50);
    !store.regNum
      ? dispatch({
          type: 'SET_HORSEINFO',
          payload: {regNum: new Date().getTime()},
        })
      : null;
    sire
      ? dispatch({
          type: 'SET_HORSEINFO',
          payload: {sire},
        })
      : null;
    dam
      ? dispatch({
          type: 'SET_HORSEINFO',
          payload: {dam},
        })
      : null;
    text
      ? dispatch({
          type: 'SET_HORSEINFO',
          payload: {description },
        })
      : null;
  };

  let next = () => {
    if (breedH) {
      onNextPrev(100);
      !store.regNum
        ? dispatch({
            type: 'SET_HORSEINFO',
            payload: {regNum: new Date().getTime()},
          })
        : null;
      sire
        ? dispatch({
            type: 'SET_HORSEINFO',
            payload: {sire},
          })
        : null;
      dam
        ? dispatch({
            type: 'SET_HORSEINFO',
            payload: {dam},
          })
        : null;
    } else setErr('Please fill in all required fields');
  };

  return (
    <View contentContainerStyle={styles.container}>
      <View style={styles.avaView}>
        <Image source={ava} style={styles.ava} />
        <Text style={styles.avaText}>{store.name}</Text>
        <Text style={styles.avaText}>{regNum}</Text>
      </View>
      <DropDownItem
        setDate={setDate}
        title="Date of birth"
        date={true}
        error={err}
      />
      <DropDownItem
        error={err}
        title="Breed"
        item={breedH}
        info={breed}
        saveInfo={d => {
          setBreedH(d);
          dispatch({
            type: 'SET_HORSEINFO',
            payload: {breed: d},
          });
        }}
      />
      <DropDownItem
        error={err}
        title="Sex"
        item={sexH}
        info={sex}
        saveInfo={d => {
          setSexH(d);
          dispatch({
            type: 'SET_HORSEINFO',
            payload: {sex: d},
          });
        }}
      />
      <View style={styles.gView}>
        <Text style={styles.titleText}>Sire</Text>
        <TouchableOpacity onPress={() => {}}>
          <TextInput
            onChangeText={t => setSire(t)}
            value={sire} 
            numberOfLines={1}
            style={styles.input}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.gView}>
        <Text style={styles.titleText}>Dam</Text>
        <View onPress={() => {}}>
          <TextInput
            onChangeText={t => setDam(t)}
            value={dam} 
            numberOfLines={1}
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.gView}>
        <Text style={styles.titleText}>Optional</Text>
        <View onPress={() => {}}>
          <TextInput
            onChangeText={t => setText(t)}
            value={text} 
            multiline={true}
            style={styles.inputOptional}
            maxLength={250}
          />
          <Text style={styles.numText}>{text.length}/250</Text>
        </View>
      </View>
      <InputHorseReg
        title="Registration number"
        value={`${regNum}`}
        editable={false}
      />
      <DropDownItem
        error={err}
        title="Height"
        item={heightH}
        info={height}
        saveInfo={d => {
          setHeightH(d);
          dispatch({
            type: 'SET_HORSEINFO',
            payload: {height: d},
          });
        }}
      />
      <DropDownItem
        error={err}
        title="Weight"
        item={weightH}
        info={weight}
        saveInfo={d => {
          setWeightH(d);
          dispatch({
            type: 'SET_HORSEINFO',
            payload: {weight: d},
          });
        }}
      />
      <DropDownItem
        error={err}
        title="Color"
        item={colorH}
        info={color}
        saveInfo={d => {
          setColorH(d);
          dispatch({
            type: 'SET_HORSEINFO',
            payload: {color: d},
          });
        }}
      />
      <DropDownItem
        error={err}
        title="Discipline"
        info={discipline}
        item={disciplineH}
        saveInfo={d => {
          setDisciplineH(d);
          dispatch({
            type: 'SET_HORSEINFO',
            payload: {discipline: d},
          });
        }}
      />
      <DropDownItem
        error={err}
        title="Training"
        item={trainingH}
        info={training}
        saveInfo={d => {
          setTrianingH(d);
          dispatch({
            type: 'SET_HORSEINFO',
            payload: {training: d},
          });
        }}
      />
      <DropDownItem
        error={err}
        title="Earnings"
        item={priceH}
        info={price}
        saveInfo={d => {
          setPriceH(d);
          dispatch({
            type: 'SET_HORSEINFO',
            payload: {earnings: d},
          });
        }}
      />
      <DropDownItem
        error={err}
        title="Produced Earnings"
        item={proEarnings}
        info={price}
        saveInfo={d => {
          setProEarnings(d);
          dispatch({
            type: 'SET_HORSEINFO',
            payload: {producedEarnings: d},
          });
        }}
      />
      <DropDownItem
        error={err}
        title="Condition"
        item={conditionH}
        info={condition}
        saveInfo={d => {
          setConditionH(d);
          dispatch({
            type: 'SET_HORSEINFO',
            payload: {condition: d},
          });
        }}
      />
      <Text style={styles.err}>{err}</Text>
      <BottomBtn
        nameL="Back"
        nameR="Next"
        onChangeL={goBack}
        onChangeR={next}
        styles={styles.bottomBtn}
      />
    </View>
  );
}
