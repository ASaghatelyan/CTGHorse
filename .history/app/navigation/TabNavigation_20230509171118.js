import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableNativeFeedback,
  ViewBase,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useIsFocused} from '@react-navigation/native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import home from 'app/assets/img/home.png';
import chat from 'app/assets/img/chatmenu.png';
import search from 'app/assets/img/search.png';
import profile from 'app/assets/img/profile.png';
import HomeNavigation from './HomeNavigation';
import SearchNavigation from './SearchNavigation';
import ProfileNavigation from './ProfileNavigation';
import {BlurView} from '@react-native-community/blur';
import ChatNavigation from './ChatNavigation';
import {useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

const Tab = createBottomTabNavigator();
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default function TabNavigation({navigation}) {
  let dispatch = useDispatch();
  const route = useRoute();
  const routeName = getFocusedRouteNameFromRoute(route);

  useEffect(() => {
    dispatch({
      type: 'RESET_FILTERDATA',
    });
    dispatch({
      type: 'RESET_FILTERITEM',
    });
  }, [routeName]);

  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: '#000',
          tabBarBackground: () => (
            <BlurView
              blurRadius={25}
              blurAmount={3}
              overlayColor=""
              blurType="dark"
              style={{
                ...StyleSheet.absoluteFillObject,
              }}
            />
          ),
          unmountOnBlur: true,
        })}
        sceneContainerStyle={{backgroundColor: 'red'}}>
        <Tab.Screen
          name="HomeNavigation"
          component={HomeNavigation}
          options={({route}) => ({
            title: '',
            tabBarIcon: ({focused, color, size}) => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    // backgroundColor: 'red',
                    // width: width / 3,
                    // height: height / (height / 50),
                  }}>
                  {focused ? (
                    <View style={{alignItems: 'center'}}>
                      <Image
                        style={{
                          height: 24,
                          width: 24,
                          resizeMode: 'contain',
                          tintColor: '#E9A13A',
                          marginBottom: 5,
                        }}
                        source={home}
                      />
                      <Text
                        style={{
                          color: '#E9A13A',
                          fontFamily: 'SFProText-SemiBold',
                          fontSize: 12,
                          lineHeight: 18,
                        }}>
                        Home
                      </Text>
                    </View>
                  ) : (
                    <View style={{alignItems: 'center'}}>
                      <Image
                        style={{
                          height: 24,
                          width: 24,
                          resizeMode: 'contain',
                          marginBottom: 5,
                        }}
                        source={home}
                      />
                      <Text
                        style={{
                          color: '#FFEBCF',
                          fontFamily: 'SFProText-SemiBold',
                          fontSize: 12,
                          lineHeight: 18,
                        }}>
                        Home
                      </Text>
                    </View>
                  )}
                </View>
              );
            },
            tabBarVisible: (route => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? '';
              if (routeName === 'HorseInfo') {
                return false;
              } else if (routeName === 'OwnerProfile') {
                return false;
              } else if (routeName === 'PaymentMethod') {
                return false;
              } 
              else if (routeName === 'Privacy') {
                return false;
              }
              else if (routeName === 'PayedComplite') {
                return false;
              }
              return true;
            })(route),
            tabBarButton: (route => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? '';
              if (routeName === 'HorseInfo') {
                () => null;
              } else if (routeName === 'OwnerProfile') {
                () => null;
              } else if (routeName === 'PaymentMethod') {
                () => null;
              } 
              else if (routeName === 'Privacy') {
                () => null;
              }
            })(route),

            tabBarStyle: (route => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? '';
              if (routeName === 'HorseInfo') {
                return {display: 'none'};
              } else if (routeName === 'OwnerProfile') {
                return {display: 'none'};
              } else if (routeName === 'PaymentMethod') {
                return {display: 'none'};
              } else if (routeName === 'Privacy') {
                return {display: 'none'};
              }
              return styles.generalStyle;
            })(route),
          })}
        />
        <Tab.Screen
          name="SearchNavigation"
          component={SearchNavigation}
          options={({route}) => ({
            title: '',
            tabBarIcon: ({focused, color, size}) => {
              return (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  {focused ? (
                    <View style={{alignItems: 'center'}}>
                      <Image
                        style={{
                          height: 24,
                          width: 24,
                          resizeMode: 'contain',
                          tintColor: '#E9A13A',
                          marginBottom: 5,
                        }}
                        source={search}
                      />
                      <Text
                        style={{
                          color: '#E9A13A',
                          fontFamily: 'SFProText-SemiBold',
                          fontSize: 12,
                          lineHeight: 18,
                        }}>
                        Search
                      </Text>
                    </View>
                  ) : (
                    <View style={{alignItems: 'center'}}>
                      <Image
                        style={{
                          height: 24,
                          width: 24,
                          resizeMode: 'contain',
                          marginBottom: 5,
                          tintColor: '#FFEBCF',
                        }}
                        source={search}
                      />
                      <Text
                        style={{
                          color: '#FFEBCF',
                          fontFamily: 'SFProText-SemiBold',
                          fontSize: 12,
                          lineHeight: 18,
                        }}>
                        Search
                      </Text>
                    </View>
                  )}
                </View>
              );
            },
            tabBarVisible: (route => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? '';
              if (routeName === 'Filter') {
                return false;
              } else if (routeName === 'HorseInfo') {
                return false;
              } else if (routeName === 'FilterDetiles') {
                return false;
              
              } else if (routeName === 'PaymentMethod') {
                return false;
              }
              return true;
            })(route),
            tabBarButton: (route => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? '';
              if (routeName === 'Filter') {
                () => null;
              } else if (routeName === 'HorseInfo') {
                () => null;
              } 
              else if (routeName === 'FilterDetiles') {
                () => null;
              }
              else if (routeName === 'PaymentMethod') {
                () => null;
              }
            })(route),
            tabBarStyle: (route => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? '';
              if (routeName === 'Filter') {
                return {display: 'none'};
              } else if (routeName === 'HorseInfo') {
                return {display: 'none'};
              } 
              else if (routeName === 'FilterDetiles') {
                return {display: 'none'};
              }
              else if (routeName === 'PaymentMethod') {
                return {display: 'none'};
              }
              return styles.generalStyle;
            })(route),
          })}
        />
        <Tab.Screen
          name="ChatNavigation"
          component={ChatNavigation}
          options={({route}) => ({
            title: '',
            tabBarIcon: ({focused, color, size}) => {
              return (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  {focused ? (
                    <View style={{alignItems: 'center'}}>
                      <Image
                        style={{
                          height: 24,
                          width: 24,
                          resizeMode: 'contain',
                          tintColor: '#E9A13A',
                          marginBottom: 5,
                        }}
                        source={chat}
                      />
                      <Text
                        style={{
                          color: '#E9A13A',
                          fontFamily: 'SFProText-SemiBold',
                          fontSize: 12,
                          lineHeight: 18,
                        }}>
                        Chat
                      </Text>
                    </View>
                  ) : (
                    <View style={{alignItems: 'center'}}>
                      <Image
                        style={{
                          height: 24,
                          width: 24,
                          resizeMode: 'contain',
                          marginBottom: 5,
                        }}
                        source={chat}
                      />
                      <Text
                        style={{
                          color: '#FFEBCF',
                          fontFamily: 'SFProText-SemiBold',
                          fontSize: 12,
                          lineHeight: 18,
                        }}>
                        Chat
                      </Text>
                    </View>
                  )}
                </View>
              );
            },
            tabBarVisible: (route => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? '';
              if (routeName === 'OpenChat') {
                return false;
              }
              return true;
            })(route),
            tabBarButton: (route => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? '';
              if (routeName === 'OpenChat') {
                () => null;
              }
            })(route),

            tabBarStyle: (route => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? '';
              if (routeName === 'OpenChat') {
                return {display: 'none'};
              }
              return styles.generalStyle;
            })(route),
          })}
        />
        <Tab.Screen
          name="ProfileNavigation"
          component={ProfileNavigation}
          options={({route}) => ({
            title: '',
            tabBarIcon: ({focused, color, size}) => {
              return (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  {focused ? (
                    <View style={{alignItems: 'center'}}>
                      <Image
                        style={{
                          height: 24,
                          width: 24,
                          resizeMode: 'contain',
                          tintColor: '#E9A13A',
                          marginBottom: 5,
                        }}
                        source={profile}
                      />
                      <Text
                        style={{
                          color: '#E9A13A',
                          fontFamily: 'SFProText-SemiBold',
                          fontSize: 12,
                          lineHeight: 18,
                        }}>
                        Profile
                      </Text>
                    </View>
                  ) : (
                    <View style={{alignItems: 'center'}}>
                      <Image
                        style={{
                          height: 24,
                          width: 24,
                          resizeMode: 'contain',
                          marginBottom: 5,
                        }}
                        source={profile}
                      />
                      <Text
                        style={{
                          color: '#FFEBCF',
                          fontFamily: 'SFProText-SemiBold',
                          fontSize: 12,
                          lineHeight: 18,
                        }}>
                        Profile
                      </Text>
                    </View>
                  )}
                </View>
              );
            },
            tabBarVisible: (route => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? '';
              if (routeName === 'SignIn') {
                return false;
              } else if (routeName === 'HorseRegister') {
                return false;
              } else if (routeName === 'MyHorses') {
                return false;
              } else if (routeName === 'ChangeHorseInfo') {
                return false;
              } else if (routeName === 'EditProfile') {
                return false;
              } else if (routeName === 'ChangePassword') {
                return false;
              } else if (routeName === 'AccountInfo') {
                return false;
              } else if (routeName === 'AddNewCard') {
                return false;
              } else if (routeName === 'ViewAllTransactions') {
                return false;
              } else if (routeName === 'TransactionFilter') {
                return false;
              } else if (routeName === 'MyFavorites') {
                return false;
              } else if (routeName === 'HorseInfo') {
                return false;
              } else if (routeName === 'OwnerProfile') {
                return false;
              } else if (routeName === 'PaymentMethod') {
                return false;
              } else if (routeName === 'HorseRegComplite') {
                return false;
              } else if (routeName === 'Privacy') {
                return false;
              }
              return true;
            })(route),
            tabBarButton: (route => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? '';
              if (routeName === 'SignIn') {
                () => null;
              } else if (routeName === 'HorseRegister') {
                () => null;
              } else if (routeName === 'MyHorses') {
                () => null;
              } else if (routeName === 'ChangeHorseInfo') {
                () => null;
              } else if (routeName === 'EditProfile') {
                () => null;
              } else if (routeName === 'ChangePassword') {
                () => null;
              } else if (routeName === 'AccountInfo') {
                () => null;
              } else if (routeName === 'AddNewCard') {
                () => null;
              } else if (routeName === 'ViewAllTransactions') {
                () => null;
              } else if (routeName === 'TransactionFilter') {
                () => null;
              } else if (routeName === 'MyFavorites') {
                () => null;
              } else if (routeName === 'HorseInfo') {
                () => null;
              } else if (routeName === 'OwnerProfile') {
                () => null;
              } else if (routeName === 'PaymentMethod') {
                () => null;
              } else if (routeName === 'HorseRegComplite') {
                () => null;
              } else if (routeName === 'Privacy') {
                () => null;
              }
            })(route),

            tabBarStyle: (route => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? '';
              if (routeName === 'SignIn') {
                return {display: 'none'};
              } else if (routeName === 'HorseRegister') {
                return {display: 'none'};
              } else if (routeName === 'MyHorses') {
                return {display: 'none'};
              } else if (routeName === 'ChangeHorseInfo') {
                return {display: 'none'};
              } else if (routeName === 'EditProfile') {
                return {display: 'none'};
              } else if (routeName === 'ChangePassword') {
                return {display: 'none'};
              } else if (routeName === 'AccountInfo') {
                return {display: 'none'};
              } else if (routeName === 'AddNewCard') {
                return {display: 'none'};
              } else if (routeName === 'ViewAllTransactions') {
                return {display: 'none'};
              } else if (routeName === 'TransactionFilter') {
                return {display: 'none'};
              } else if (routeName === 'MyFavorites') {
                return {display: 'none'};
              } else if (routeName === 'HorseInfo') {
                return {display: 'none'};
              } else if (routeName === 'OwnerProfile') {
                return {display: 'none'};
              } else if (routeName === 'PaymentMethod') {
                return {display: 'none'};
              } else if (routeName === 'HorseRegComplite') {
                return {display: 'none'};
              } else if (routeName === 'Privacy') {
                return {display: 'none'};
              }
              return styles.generalStyle;
            })(route),
          })}
        />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    width: width,
    marginTop: 22,
    paddingHorizontal: 24,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingBottom: 24,
  },
  title_view: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title_text: {
    fontWeight: '600',
    fontSize: 20,
    fontFamily: 'SFProText-Regular',
    color: '#fff',
  },
  close_img: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  item_btn: {
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255, 0.1)',
  },
  item_text: {
    fontWeight: '500',
    fontSize: 14,
    fontFamily: 'SFProText-Regular',
    color: '#fff',
  },
  right_img: {
    width: 13,
    height: 13,
    resizeMode: 'contain',
  },
  generalStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    // borderWidth: 1,
    borderTopEndRadius: 8,
    borderTopLeftRadius: 8,
    // borderColor: '#C4C0BF',
    marginTop: 5,
    paddingTop: 25,
    height: 80,
    position: 'absolute',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    borderRadius: 8,
    overflow: 'hidden',
  },
});
