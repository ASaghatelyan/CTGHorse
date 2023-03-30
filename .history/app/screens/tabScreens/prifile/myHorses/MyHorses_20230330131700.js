import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import {HeaderNavi, HorseItemComponent} from 'app/components';
import {styles} from './style';
import noHorse from 'app/assets/img/nohorse.png';
import user from 'app/assets/img/userImg.jpeg';
import email from 'app/assets/img/email.png';
import phone from 'app/assets/img/phone.png';
import edit from 'app/assets/img/edit.png';
import right from 'app/assets/img/right.png';
import data from '../../home/src/data';

export function MyHorses(props) {
  return (
    <View style={{flex: 1}}>
      <View>
        <SafeAreaView />
        <HeaderNavi
          leftBtn={'My Horses'}
          leftOnPress={() => props.navigation.goBack()}
        />
      </View>
      <View
        style={styles.itemsView}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        {/* <View style={styles.noHorseView}>
        <Image source={noHorse} style={styles.noHorse}/>
        <Text style={styles.listText}>Your Horse list is empty.</Text>
        <Text style={styles.detileText}>Please add your Horse details.</Text>
        <TouchableOpacity style={styles.addView} onPress={()=>navigation.navigate('HorseRegister')}>
            <Text style={styles.addText}>+ Add horse</Text>
        </TouchableOpacity>
       </View> */}
        <View>
          <View style={styles.userView}>
            <View style={styles.infoView}>
              <Image source={user} style={styles.userImg} />
              <View style={styles.nameView}>
                <Text style={styles.nameText}>Jane Cooper</Text>
                <View style={styles.userPersView}>
                  <Image source={email} style={styles.ic} />
                  <Text style={styles.infoText} numberOfLines={1}>
                    example@gmail.com
                  </Text>
                </View>
                <View style={styles.userPersView}>
                  <Image source={phone} style={styles.ic} />
                  <Text style={styles.infoText} numberOfLines={1}>
                    +3756632332
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
                props={props}
                owner={true}
              />
            );
          })}
        </ScrollView>
      </View>
        <View style={{position: 'absolute',bottom:0}}>
          <TouchableOpacity
            style={styles.addView}
            onPress={() => navigation.navigate('HorseRegister')}>
            <Text style={styles.addText}>+ Add horse</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}
