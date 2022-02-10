import React,{useState} from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Transactions from './Transactions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';
export default function Info() {
  return (
    <View
        style={{
            backgroundColor:'white',
            borderTopLeftRadius:20,
            borderTopRightRadius:20,
            flex:1,
            flexDirection:'column',
            justifyContent:'space-between',
        }}
    >
        <Options/>
        <Transactions/>
    </View>
  );
}

function Options(){
    const navigation = useNavigation();

    const [loading,setLoading]  =useState(false);


    const navigate = (page)=>{
        setTimeout(()=>{
            setLoading(false);
            navigation.navigate(page);
        },2000)
    }

    const options = [
        {
            name:"New",
            icon:<Ionicons name="add" size={30} />,
        }
    ]

    if(loading) return <Loading/>

    return(
        <View
            style={{
                flexDirection:'row',
                justifyContent:'space-around',
                alignItems:'center',
                width:"20%",
                alignSelf:'center',
                borderWidth:1,
                borderRadius:10,
                marginVertical:1,
                flex:0.15           
            }}
        >

            {options.map((option,index)=>(
                <TouchableOpacity
                    key={index}
                    style={{
                        margin:5, 
                        justifyContent:'center',
                        alignItems:'center',
                    }}
                    onPress={()=>{
                        setLoading(true);
                        navigate(option.name);
                        
                    }}
                >
                    {option.icon}
                    <Text style={{color:'black'}}>{option.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

function Loading(){
    return(
        <View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={true}
            >
               <LottieView source={require("../../assets/animation/loading.json")} autoPlay loop/> 
            </Modal>
        </View>
    )
}
