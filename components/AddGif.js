import React from "react";
import {Text ,View , Image , StyleSheet} from 'react-native' ;

const AddGifImage = () => {
	return (
		<View style={Styles.container}>
		<Image
			style ={{width: "100%", height:"80%"}}
			source={{ uri : "https://images.unsplash.com/photo-1569096651661-820d0de8b4ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}}
		/>
		</View>
	);
}

const Styles = StyleSheet.create({
	container :{
		alignContent:'center',
		margin:25
	}
})

export default AddGifImage;
