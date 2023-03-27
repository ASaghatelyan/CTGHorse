import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useRef} from 'react';
import filter from 'app/assets/img/filter.png';
import goToTop from 'app/assets/img/expand.png';
import {styles} from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HorseItemComponent, SearchComp} from 'app/components';
import data from '../home/src/data';

export function SearchScreen(props) {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  const scrollRef = useRef();

  const onFabPress = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  return (
    <View>
      <SafeAreaView />
      <View style={{paddingHorizontal: 16}}>
        <SearchComp />
        <View style={styles.titleView}>
          <Text style={styles.filterCount}>Applied Filters:0</Text>
          <TouchableOpacity style={styles.filterView} onPress={()=>props.navigation.navigate('Filter')}>
            <Text style={styles.filterText}>Filter</Text>
            <Image source={filter} style={styles.filterIc} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView ref={scrollRef} contentContainerStyle={styles.itemContainer}>
        {data.map((item, index) => {
          return <HorseItemComponent key={item.id} item={item} index={index}  props={props}/>;
        })}
      </ScrollView>
      <TouchableOpacity style={styles.bottomBtnView} onPress={onFabPress}>
        <Image source={goToTop} style={styles.expend} />
        <Text style={styles.goToTopText}>Go to top</Text>
      </TouchableOpacity>
    </View>
  );
}
