import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import online from 'app/assets/img/active.png';
import user1 from 'app/assets/img/user1.png';
import back from 'app/assets/img/back.png';
let height = Dimensions.get('window').height;

export function OpenChat(props) {
    let data = [1,2,3,4,5,6]
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
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        //   paddingBottom: 120,
          paddingHorizontal: 15,
          height:height
        }}>
            {data.map((item,index)=>{
                return()
            })}
        
      </ScrollView>
    </SafeAreaView>
  );
}
