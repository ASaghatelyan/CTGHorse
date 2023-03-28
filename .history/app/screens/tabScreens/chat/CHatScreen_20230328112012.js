import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Animated
} from 'react-native';
import React, { useState } from 'react';
import {styles} from './style';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import search from 'app/assets/img/search.png';
import avatar from 'app/assets/img/user.png';

export function ChatScreen(props) {
  let data = [1, 2, 3, 4, 5, 6];
  const ss = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d71',
      title: 'Fourth Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d70',
      title: 'Fifth Item',
    },
  ];
  const [listData, setListData] = useState(ss);
  let row = [];
  let prevOpenedRow;
   
  const renderItem = ({ item, index }, onClick) => {
    //
    const closeRow = (index) => {
      console.log('closerow');
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close();
      }
      prevOpenedRow = row[index];
    };

    const renderRightActions = (progress, dragX, onClick) => {
      return (
        <View
          style={{
            margin: 0,
            alignContent: 'center',
            justifyContent: 'center',
            width: 70,
          }}>
          <Button color="red" onPress={onClick} title="DELETE"></Button>
        </View>
      );
    };

    return (
      <Swipeable
        renderRightActions={(progress, dragX) =>
          renderRightActions(progress, dragX, onClick)
        }
        onSwipeableOpen={() => closeRow(index)}
        ref={(ref) => (row[index] = ref)}
        rightOpenValue={-100}>
        <View
          style={{
            margin: 4,
            borderColor: 'grey',
            borderWidth: 1,
            padding: 9,
            backgroundColor: 'white',
          }}>
          <Text>{item.title}</Text>
        </View>
      </Swipeable>
    );
  };

  const deleteItem = ({ item, index }) => {
    console.log(item, index);
    let a = listData;
    a.splice(index, 1);
    console.log(a);
    setListData([...a]);
  };

  return (
    <View>
      <SafeAreaView />
      <View style={styles.avaView}>
        <Image source={avatar} style={styles.avatar} />
        <Text style={styles.avaText}>Name Surname</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={'rgba(25, 12, 4, 0.64)'}
        />
        <Image source={search} style={styles.searchIc} />
      </View>
      <View>
        <Text style={styles.recentText}>Recent Chats</Text>
        <ScrollView
          contentContainerStyle={styles.recentView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {data.map((item, index) => {
            return (
              <TouchableOpacity style={styles.recentItem}>
                <Image source={avatar} style={styles.avatar} />
                <Text style={styles.nameText} numberOfLines={1}>
                  Name
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View style={{marginTop: 16}}> 
        
        <View style={styles.chatItem}>
          <Image source={avatar} style={styles.avatar} />
          <View style={styles.messageView}>
            <View style={styles.nameView}>
              <Text style={styles.messName} numberOfLines={1}>
                Smith Mathew
              </Text>
              <Text style={styles.messDate}>08 Feb</Text>
            </View>
            <Text style={styles.messText} numberOfLines={1}>
              Hi, David. Hope you’re doing sdfdsf{' '}
            </Text>
          </View>
        </View> 
        <FlatList
        data={listData}
        renderItem={(v) =>
          renderItem(v, () => {
            console.log('Pressed', v);
            deleteItem(v);
          })
        }
        keyExtractor={(item) => item.id}></FlatList>
      </View>
    </View>
  );
}
