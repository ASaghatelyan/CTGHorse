import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import DropShadow from 'react-native-drop-shadow';
import {styles} from './style';

export function UserInfoItem({item}) {
    const [starCount, setStarCount] = useState(0);
 
  return (
    <DropShadow
      style={{
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {
          width: 1,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
      }}>
      <TouchableOpacity style={styles.listContainer}>
    
          <Image source={{uri: item.avatar}} style={styles.avatar} />
          <Text style={styles.nameText}>
            {item.name} {item.surname}
          </Text>
     
      </TouchableOpacity>
    </DropShadow>
  );
}
