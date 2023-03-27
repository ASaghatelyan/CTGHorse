import { View, Text, ScrollView ,Image} from 'react-native'
import React from 'react'
import { styles } from './style'
import done from 'app/assets/img/done.png'
import { GButton } from 'app/components'

export   function PassUpdated({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.updViwe}>
      <Text style={styles.updText}>Password updated</Text>
      <Image source={done} style={styles.done}/>
      <Text style={styles.doneText}>Your password has been updated!</Text>
      <GButton btnName="Log in" handelMove={()=>navigation.replace('SignIn')}/>
    </ScrollView>
  )
}