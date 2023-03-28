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

export function OpenChat(props) {
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity>
          <Image />
        </TouchableOpacity>
        <Image />
        <View>
          <Text>John Walton</Text>
          <View>
            <Text>Active Now</Text>
            <Image source={online}/>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
