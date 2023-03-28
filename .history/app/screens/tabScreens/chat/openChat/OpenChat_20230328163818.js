import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React,{useRef} from 'react';
import {styles} from './style';
import online from 'app/assets/img/active.png';
import user1 from 'app/assets/img/user1.png';
import back from 'app/assets/img/back.png';
import send from 'app/assets/img/send.png';

export function OpenChat(props) {
    const scrollViewRef = useRef(null);

  let data = [1, 2, 3, 4, 5, 6];
  return (
    <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
      <SafeAreaView />
      <View style={{flex: 1}}>
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
        ef={scrollViewRef}
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 120,
            paddingHorizontal: 15,
          }}>
          {data.map((item, index) => {
            return (
              <View key={index}>
                <Text style={styles.dateText}>Thursday 24, 2022</Text>
                <View style={styles.leftChatView}>
                  <View style={styles.leftImgView}>
                    <Image source={user1} style={styles.userAva} />
                    {true && (
                      <Image source={online} style={styles.activeIcNow} />
                    )}
                  </View>
                  <View>
                    <View
                      style={[styles.leftTextView, !true && {marginTop: 8}]}>
                      <Text style={styles.leftText}>
                        Are you still travelling?
                      </Text>
                    </View>
                    <View style={[styles.leftTextView, true && {marginTop: 8}]}>
                      <Text style={styles.leftText}>Yes?</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.rightChatView}>
                  <View style={styles.rightTextView}>
                    <Text style={styles.rightText}>Yes, i’m at Istanbul..</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>

        <View style={styles.sendView}>
          <View style={styles.msgView}>
            <TextInput
              multiline={true}
              style={styles.sendInput}
              placeholder="Send Message"
            />
            <View>
              <TouchableOpacity style={styles.sendIcView}>
                <Image source={send} style={styles.sendIc} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
