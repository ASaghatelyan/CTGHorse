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
import {useSelector} from 'react-redux';
import deleteChat from 'app/assets/img/deletChat.png';
import search from 'app/assets/img/search.png';
import avatar from 'app/assets/img/noimg.png';
import {TabNaviTitle} from 'app/components';
import axiosInstance from 'app/networking/api';
import Pusher from 'pusher-js/react-native';
const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export function ChatScreen({navigation}) {
  let userInfo = useSelector(store => store.userInfo);
  const [listData, setListData] = useState([]);

  let data = [1, 2, 3, 4, 5, 6];

  const loadChats = async () => {
    try {
      const response = await axiosInstance.get('/fetchUsers');
      setListData([...response.data.data]);
    } catch (error) {
      console.log(error, 'errr');
    }
  };

  const subscribeToPusher = async () => {
    let a_tok = await getToken();
    const user_id = MY_ID;
    Pusher.logToConsole = true;
    var pusher = new Pusher('821da38abbc9954afe90', {
      cluster: 'ap2',
      authEndpoint: 'https://app.grain-brain.ca/api/broadcasting/auth',
      encrypted: true,
      auth: {
        headers: {
          Authorization: 'Bearer ' + a_tok,
        },
      },
    });
    var channel = pusher.subscribe('private-chat-' + userInfo.id);
    channel.bind('messageSend', d => {
      setChatSecond(d);
    });
  };

  useEffect(() => {
    loadChats();
    return () => {};
  }, []);

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
    const closeRow = index => {
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
      key={index}
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
          <Image
            source={item?.avatar ? {uri: item?.avatar} : avatar}
            style={styles.avatar}
          />
          <View style={styles.messageView}>
            <View style={styles.nameView}>
              <Text style={styles.messName} numberOfLines={1}>
                {item?.name}
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
    setListData([...a]);
  };

  return (
    <SafeAreaView style={styles.content}>
      <TabNaviTitle naviName="Chat" />
      <View style={styles.avaView}>
        <Image
          source={userInfo?.avatar ? {uri: userInfo.avatar} : avatar}
          style={styles.avatar}
        />
        <Text style={styles.avaText}>{userInfo.name}</Text>
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
