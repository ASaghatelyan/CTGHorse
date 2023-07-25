import { View, Text } from 'react-native'
import React from 'react'

export   function UserInfoItem({}) {
  return (
    <DropShadow
    key={index}
    style={{
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      shadowOffset: {
        width: 1,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 2,
    }}>
    <TouchableOpacity onPress={getAllIfo} style={styles.listContainer}>
      <View>
        <View style={styles.imageContainer}>
          <Image
            source={img.length > 0 ? {uri: img?.[0]?.url} : white}
            style={styles.image}
          />
          {owner ? null : likeDisLike ? (
            <TouchableOpacity
              style={styles.likeView}
              onPress={() => onLikeDisLike(0)}>
              <Image source={like} style={styles.like} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.likeView}
              onPress={() => onLikeDisLike(1)}>
              <Image source={dislike} style={styles.like} />
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.nameText} numberOfLines={1}>
          {item?.name}
        </Text>
        <Text style={styles.regN} numberOfLines={1}>
        CTG No: {item?.registration_number}
        </Text>
        <Text style={styles.priceText} numberOfLines={1}>
          ${item?.price}
        </Text>
      </View>
    </TouchableOpacity>
  </DropShadow>
  )
}