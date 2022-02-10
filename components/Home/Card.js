import { View, Text, StyleSheet,ImageBackground } from 'react-native';
import React from 'react';
const image = { uri: "https://www.pinclipart.com/picdir/big/541-5414864_credit-card-in-black-and-white-color-png.png" };
export default function Card() {
  return (
    <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View>
        </View>
        <View
            style={{
                height:"85%",
            }}
        >
            <Text 
                styles={{
                    fontSize: 30,
                    textAlign:'center',
                    color:"white"
                }}
            >20BPS1053</Text>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent:'space-between',
                    paddingHorizontal:30,
                    alignItems:'center',
                    marginVertical:70,
                }}
            >
                <Text>Aravind P</Text>
            </View>
        </View>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        width:"90%",
        height:200,
        borderRadius:10,
        justifyContent:'center',
        alignSelf:'center',
        marginVertical:10,
        flexDirection:'column',
        justifyContent:'space-between',
    },
    image: {
        flex: 1,
        justifyContent: "center",
        width:"100%",
        height:"100%"
      },
})
