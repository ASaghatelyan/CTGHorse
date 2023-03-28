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

export function OpenChat(props) {
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity>
          <Image />
        </TouchableOpacity>
        <Image/>
        <View>
            <Text></Text>
            <View>
                <Text></Text>
            </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
