import React from 'react';
import { View, Text, FlatList,Image} from 'react-native';
import { Divider } from 'react-native-elements';


export default function Transactions() {

    var sum=0;

    const data = [
        {   id:1,
            logo:require("../../assets/images/disco.png"),
            name:"DJ Party",
            bank:"12 Down Under",
            amount:-123,
        },
        {   id:2,
            logo:require("../../assets/images/cheese.png"),
            name:"MICKEY MOUSE",
            bank:"Cheese Bank",
            amount:1250,
        },
        {   id:3,
            logo:require("../../assets/images/duck.png"),
            name:"Donald Duck",
            bank:"Duck Bank",
            amount:2300,
        },
        {   id:4,
            logo:require("../../assets/images/quin.png"),
            name:"Aravind",
            bank:"Quindecim",
            amount:3500,
        },
        {   id:5,
            logo:require("../../assets/images/discord.png"),
            name:"Too much of a noob",
            bank:"Discord",
            amount:-150,
        },
        {   id:6,
            logo:require("../../assets/images/reddit.png"),
            name:"Mememan",
            bank:"Reddit",
            amount:-500,
        },
        {   id:7,
            logo:require("../../assets/images/space.png"),
            name:"Han Solo",
            bank:"Space Corps",
            amount:2500,
        },
        {   id:8,
            logo:require("../../assets/images/russia.png"),
            name:"Boris",
            bank:"Mother Russia",
            amount:-4200,
        },

        {   id:9,
            logo:require("../../assets/images/discord.png"),
            name:"Too much of a noob",
            bank:"Discord",
            amount:-150,
        },
        {   id:10,
            logo:require("../../assets/images/reddit.png"),
            name:"Mememan",
            bank:"Reddit",
            amount:-500,
        },
        {   id:11,
            logo:require("../../assets/images/space.png"),
            name:"Han Solo",
            bank:"Space Corps",
            amount:2500,
        },
        {   id:12,
            logo:require("../../assets/images/russia.png"),
            name:"Boris",
            bank:"Mother Russia",
            amount:-4200,
        },
    ]

    data.forEach((d)=>{
        sum += d.amount;
    })

    return (
        <View
            style={{
                marginVertical:10,
                flex:1,
            }}
        >
            <Header total={sum}/>
            <Divider width={2} color='black' style={{marginHorizontal:10}}/>
            <TransactionsData data={data}/>
        </View>
    );
}

function Header(props){
    return(
        <View
            style={{
                flexDirection:'row',
                justifyContent:'space-between',
                paddingHorizontal:20,
                marginVertical:5,

            }}
        >
            <Text style={{color:"black",}}>Transactions</Text>
            <Text 
                styles={{fontSize:22}}
                weight="bold"
            >
            {props.total>0?"+":"-"} ₹ {props.total>0?props.total:props.total*-1}</Text>
        </View>
    )
}


function Item(props){

    return(
        <View>
        
            <View
                style={{
                    flexDirection:'row',
                    alignItems:'center',
                    width:"100%",
                    paddingHorizontal:20                
                }}
            >
                <View
                    style={{
                        flexDirection:'row',
                        alignItems:'center',
                        width:"75%"
                    }}
                >
                
                    <Image 
                        source={props.data.logo}
                        style={{
                            width:50,
                            height:50,
                            marginRight:10,
                        }}
                    />

                    <View>
                        <Text
                            style={{
                                fontWeight:'bold',
                                fontSize:17,
                                paddingVertical:2,
                            }}
                        >{props.data.name}</Text>
                        <Text
                            style={{
                                color:'grey',
                                fontSize:12
                            }}
                        >{props.data.bank}</Text>
                    </View>
                </View>

                <Text
                    styles={{
                        fontSize:17,
                        color:props.data.amount>0?"#A1AC6D":"black",
                    }}
                    weight='bold'
                >{props.data.amount>0?"+":"-"} ₹ {props.data.amount>0?props.data.amount:props.data.amount*-1}</Text>
            </View>
        </View>
    )
}

function TransactionsData(props){
    return(
        <View> 
            <FlatList
                data={props.data}
                renderItem={({item})=>(<Item data={item}/>)}
                keyExtractor={(item)=>item.id}
            />
        </View>
    )
}
