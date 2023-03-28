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
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 40,
          paddingHorizontal: 15,
        }}>
        <View style={styles.leftChatView}>
          <View style={{justifyContent: 'flex-end'}}>
            <Image source={user1} style={styles.userAva} />
            <Image source={online} style={styles.activeIcNow} />
          </View>
          <View>
            <View style={[styles.leftTextView,!true && {marginTop:8}]}>
              <Text style={styles.leftText}>Are you still travelling?</Text>
            </View> 
            <View style={[styles.leftTextView,true && {marginTop:8}]}>
              <Text style={styles.leftText}>Yes?</Text>
            </View> 
          </View>
        </View>
        <View style={styles.rightChatView}>
            <View style={styles.rightTextView}>
                <Text style={styles.rightText}>Yes, i’m at Istanbul.. sdsd ssd sd ssd </Text>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
