import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Animated,
  FlatList,
  Button,
  Dimensions,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import {RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
const screenHeight = Dimensions.get('window').height;
import { useSelector } from 'react-redux';
import deleteChat from 'app/assets/img/deletChat.png';
import search from 'app/assets/img/search.png';
import avatar from 'app/assets/img/user.png';
import {TabNaviTitle} from 'app/components';
const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export function ChatScreen({navigation}) {
  let userInfo = useSelector(st)
  let data = [1, 2, 3, 4, 5, 6];
  const ss = [
    {
      id: 1,
      title: 'First Item',
    },
    {
      id: 2,
      title: 'First Item',
    },
    {
      id: 3,
      title: 'First Item',
    },
    {
      id: 4,
      title: 'First Item',
    },
    {
      id: 5,
      title: 'First Item',
    },
    {
      id: 6,
      title: 'First Item',
    },
    {
      id: 7,
      title: 'First Item',
    },
    {
      id: 8,
      title: 'First Item',
    },
    {
      id: 9,
      title: 'First Item',
    },
    {
      id: 10,
      title: 'First Item',
    },
    {
      id: 11,
      title: 'First Item',
    },
    {
      id: 12,
      title: 'First Item',
    },
    {
      id: 13,
      title: 'First Item',
    },
    {
      id: 14,
      title: 'First Item',
    },
  ];

  const loadChats = async () => {
    setVisible(true);
    try {
      const response = await axiosInstance.post('/fetchMessages/' + YOUR_ID);
      setChat([...response.data.data]);
      setVisible(false);
      await subscribeToPusher();
    } catch (e) {
      console.log(error.response, YOUR_ID);
      setVisible(false);
    }
  };
  useEffect(() => {
    return () => {};
  }, []);

  const [listData, setListData] = useState(ss);
  let row = [];
  let prevOpenedRow;
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false);
    });
  }, []);
  const renderItem = ({item, index}, onClick) => {
    //
    const closeRow = index => {
      console.log('closerow');
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close();
      }
      prevOpenedRow = row[index];
    };

    const renderRightActions = (progress, dragX, onClick) => {
      return (
        <TouchableOpacity style={styles.deleteChatView} onPress={onClick}>
          <Image source={deleteChat} style={styles.deleteChat} />
        </TouchableOpacity>
      );
    };

    return (
      <Swipeable
        renderRightActions={(progress, dragX) =>
          renderRightActions(progress, dragX, onClick)
        }
        onSwipeableOpen={() => {
          closeRow(index);
        }}
        ref={ref => (row[index] = ref)}
        rightOpenValue={-100}>
        <TouchableOpacity
          style={styles.chatItem}
          onPress={() => navigation.navigate('OpenChat', item)}>
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
        </TouchableOpacity>
      </Swipeable>
    );
  };

  const deleteItem = ({item, index}) => {
    let a = listData;
    a.splice(index, 1);
    console.log(a);
    setListData([...a]);
  };

  return (
    <SafeAreaView style={styles.content}>
      <TabNaviTitle naviName="Chat" />
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
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={'#E9A13A'}
          />
        }
        style={{height: '63%'}}
        contentContainerStyle={{}}
        showsVerticalScrollIndicator={false}
        data={listData}
        renderItem={v =>
          renderItem(v, () => {
            deleteItem(v);
          })
        }
        keyExtractor={item => item.id}
        ListFooterComponent={<View style={{height: 40}} />}
      />
    </SafeAreaView>
  );
}
