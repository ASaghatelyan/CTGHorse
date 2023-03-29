 
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
 

 

export const ChatHeader = ({ username, bio, picture, onlineStatus, onPress }) => {
	const navigation = useNavigation();
	return (
		 {/* <View style={styles.topView}>
          <TouchableOpacity
            style={styles.backBtnView}
            onPress={() => navigation.goBack()}>
            <Image source={back} style={styles.backBtn} />
          </TouchableOpacity>
          <Image source={user1} style={styles.userAva} />
          <View>
            <Text style={styles.nameText}>John Walton</Text>
            <View style={styles.activeView}>
              <Text style={styles.activeNow}>Active Now</Text>
              <Image source={online} style={styles.activIc} />
            </View>
          </View>
        </View> */}
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row", 
		paddingTop: 40,
		paddingBottom: 10,
	},
	backButton: {
		alignSelf: "center",
		paddingHorizontal: 10,
	},
	profileOptions: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10,
	},
	profile: {
		flexDirection: "row",
		alignItems: "center",
		borderColor: "#fff",
		flex: 4,
	},
	image: {
		height: 65,
		width: 65,
		borderRadius: 32.5,
	},
	usernameAndOnlineStatus: {
		flexDirection: "column",
		justifyContent: "center",
		paddingHorizontal: 10,
	},
	username: {
		color: '#000',
		fontSize: 18,
		fontWeight: "bold",
	},
	onlineStatus: {
		color: 'green',
		fontSize: 16,
	},
	options: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
	},
});

export default ChatHeader;