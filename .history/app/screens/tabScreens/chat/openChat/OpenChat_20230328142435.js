import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import online from 'app/assets/img/active.png';
import user1 from 'app/assets/img/user1.png';
import back from 'app/assets/img/back.png';

export function OpenChat(props) {
  return (
    <SafeAreaView>
      <View style={styles.topView}>
        <TouchableOpacity style={styles.backBtnView}>
          <Image source={back} style={styles.backBtn} />
        </TouchableOpacity>
        <Image source={user1} style={styles.userAva} />
        <View>
          <Text style={styles.nameText}>John Walton</Text>
          <View style={styles.activeView}>
            <Text style={styles.activeNow}>Active Now</Text>
            <Image source={online} style={styles.activIc} />
          </View>
        </View>
      </View>
      <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: 40}}>
        <View style={styles.leftChatView}>
         <View>
         <Image source={user1} style={styles.userAva} />
         <Image source={online} style={styles.active}/>
         </View>
          <Text></Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
