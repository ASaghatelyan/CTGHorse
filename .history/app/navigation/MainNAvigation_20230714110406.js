import   React ,{useRef}from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StackNavigation from './StackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import DeliveryTabNavigation from './DeliveryTabNavigation';
import ForegroundHandler from 'app/helper/ForegroundHandler';
const Stack = createStackNavigator();
 
export default function MainNAvigation(props) {
  const rrr=useRef()
  console.log(rrr,'rrr');
  return (
    <NavigationContainer ref={rrr} >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="StackNavigation" component={StackNavigation} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="DeliveryTabNavigation" component={DeliveryTabNavigation} />
      </Stack.Navigator>
      <ForegroundHandler  navigation={rrr.current}/>
    </NavigationContainer>

  );
}
