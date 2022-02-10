import React,{useState} from 'react';
import { View, Text, Image,TouchableOpacity } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function BottomTabs() {
    const [activeTab,setActiveTab] = useState("wallet");

    const tabs = [
        {
            name:"all",
            icon:<FontAwesome name="home" size={25} color="grey"/>,
            selectedIcon:<FontAwesome name="home" size={25} color="black"/>  
        },
        {
            name:"favourites",
            icon:<FontAwesome name="question" size={25} color="grey"/>,
            selectedIcon:<FontAwesome name="question" size={25} color="black"/>,
        },
        {
            name:"wallet",
            icon:<AntDesign name='profile' size={25} color="grey"/>,
            selectedIcon:<AntDesign name='profile' size={25} color="black"/>,
        }
    ]

    return (
       <View
            style={{
                backgroundColor:"white"
            }}
       >
       
            <View
                style={{
                    flexDirection:'row',
                    justifyContent:'space-around',
                    borderTopLeftRadius:15,
                    borderTopRightRadius:15,
                    backgroundColor:'white',
                }}
            >
                {tabs.map((tab,index)=>(
                    <TouchableOpacity
                        key={index}
                        onPress={()=>{setActiveTab(tab.name)}}
                        style={{
                            margin:10
                        }}
                    >
                        {tab.name==activeTab?tab.selectedIcon:tab.icon}
                    </TouchableOpacity>
                ))}
            </View>
       </View>
    );
}


