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
  import React, {useRef} from 'react';
  import {styles} from './style';
  import online from 'app/assets/img/active.png';
  import user1 from 'app/assets/img/user1.png';
  import back from 'app/assets/img/back.png';
  import send from 'app/assets/img/send.png';
  import rec from 'app/assets/img/rec.png';
  import { ChatHeader } from 'app/components';

export   function MessagesList() {
  return (
   <ScrollView
         
          ref={scrollViewRef}
          onContentSizeChange={(width, height) => {
            scrollViewSizeChanged(height);
          }}
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
  )
}