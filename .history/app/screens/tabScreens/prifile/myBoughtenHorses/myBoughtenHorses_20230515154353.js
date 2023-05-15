import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Image,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import {HeaderNavi, HorseItemComponent} from 'app/components';
  import {styles} from './style';
  import NoHorse from 'app/assets/img/nohorse.png';
  import user from 'app/assets/img/noimg.png';
  import email from 'app/assets/img/email.png';
  import phone from 'app/assets/img/phone.png';
  import data from '../../home/src/data';
  import {useSelector, useDispatch} from 'react-redux';
  import axiosInstance from 'app/networking/api';


export   function MyBoughtenHorses({navigation}) {
    
  let userInfos = useSelector(state => state.userInfo);
  const [boughtenHorses,setBoughtenHorses]=useState([]) 
  const [userInfo, setUserInfo] = useState(userInfos);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getinfo();
  
    });
    return unsubscribe;
  }, []);

  
  let getinfo = async () => {
    try {
      let res = await axiosInstance.get(`/boughten-horses`);
      console.log(res.data ,'ddddd');
       setBoughtenHorses([...res.data])
   
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.content}>
    <View>
      <SafeAreaView />
      <HeaderNavi
        leftBtn={'My Boughten Horses'}
        leftOnPress={() => navigation.goBack()}
      />
    </View>
    {boughtenHorses.length > 0 ? (
      <View>
        <View>
          <View style={styles.userView}>
            <View style={styles.infoView}>
              <Image
                source={userInfo.avatar ? {uri: userInfo.avatar} : user}
                style={styles.userImg}
              />
              <View style={styles.nameView}>
                <Text style={styles.nameText}>{userInfo?.name}</Text>
                <View style={styles.userPersView}>
                  <Image source={email} style={styles.ic} />
                  <Text style={styles.infoText} numberOfLines={1}>
                    {userInfo?.email ==='null' ?'' : userInfo.email}
                  </Text>
                </View>
                <View style={styles.userPersView}>
                  <Image source={phone} style={styles.ic} />
                  <Text style={styles.infoText} numberOfLines={1}>
                    {userInfo?.phone==='null' ? '': userInfo.phone}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={styles.generalView}
          showsVerticalScrollIndicator={false}>
          {boughtenHorses.map((item, index) => {
            console.log(item);
            return (
              <HorseItemComponent
                item={item}
                index={index}
                owner={true}
                navigation={navigation}
                getinfo={getinfo}
              />
            );
          })}
        </ScrollView>
      </View>
    ) : (
      <View style={styles.noHorseView}>
        <Image source={NoHorse} style={styles.noHorse} />
        <Text style={styles.listText}>Your Boughten Horse list is empty.</Text> 
      </View>
    )} 
  </View>
  )
}