import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import online from 'app/assets/img/active.png'
import user1 from 'app/assets/img/user1.png'
import back from 'app/assets/img/back.png'

export function OpenChat(props) {
  return (
    <SafeAreaView>
      <View style={styles.topView}>
        <TouchableOpacity style={styles.backBtnView}>
          <Image source={back}  style={styles.backBtn}/>
        </TouchableOpacity>
        <Image  source={user1} style={styles.userAva}/>
        <View>
          <Text style={styles.name}>John Walton</Text>
          <View>
            <Text>Active Now</Text>
            <Image source={online}/>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
