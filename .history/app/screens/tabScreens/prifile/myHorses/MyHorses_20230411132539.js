import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {HeaderNavi, HorseItemComponent} from 'app/components';
import {styles} from './style';
import NoHorse from 'app/assets/img/nohorse.png';
import user from 'app/assets/img/userImg.jpeg';
import email from 'app/assets/img/email.png';
import phone from 'app/assets/img/phone.png';
import data from '../../home/src/data';
import { useSelector } from 'react-redux';

export function MyHorses({navigation}) {
  let userInfo = useSelector(state => state.userInfo); 
  let [noHorse, setNoHorse] = useState(true);
  return (
    <View style={styles.content}>
      <View>
        <SafeAreaView />
        <HeaderNavi
          leftBtn={'My Horses'}
          leftOnPress={() => navigation.goBack()}
        />
      </View>
      {userInfo.horsees.length===0 ? (
        <View>
          <View>
            <View style={styles.userView}>
              <View style={styles.infoView}>
                <Image source={user} style={styles.userImg} />
                <View style={styles.nameView}>
                  <Text style={styles.nameText}>{userInfo.name}</Text>
                  <View style={styles.userPersView}>
                    <Image source={email} style={styles.ic} />
                    <Text style={styles.infoText} numberOfLines={1}>
                      {userInfo.email}
                    </Text>
                  </View>
                  <View style={styles.userPersView}>
                    <Image source={phone} style={styles.ic} />
                    <Text style={styles.infoText} numberOfLines={1}>
                     {userInfo.phone}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <ScrollView contentContainerStyle={styles.generalView}>
            {data.map((item, index) => {
              return (
                <HorseItemComponent
                  item={item}
                  index={index}
                  owner={true}
                  navigation={navigation}
                />
              );
            })}
          </ScrollView>
        </View>
      ) : (
        <View style={styles.noHorseView}>
          <Image source={NoHorse} style={styles.noHorse} />
          <Text style={styles.listText}>Your Horse list is empty.</Text>
          <Text style={styles.detileText}>Please add your Horse details.</Text>
          <TouchableOpacity
            style={styles.addViewEmpty}
            onPress={() => navigation.navigate('HorseRegister')}>
            <Text style={styles.addText}>+ Add horse</Text>
          </TouchableOpacity>
        </View>
      )}
      {userInfo.horsees.length===0 && (
        <View style={styles.addBtn}>
          <TouchableOpacity
            style={[styles.addView, {alignItems: 'center'}]}
            onPress={() =>  navigation.navigate('HorseRegister')}>
            <Text style={styles.addText}>+ Add horse</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
