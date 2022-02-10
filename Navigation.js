import { NavigationContainer,DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Home from './screens/Home';
import New from "./screens/New";

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#FFF',
    },
  };

const Stack = createNativeStackNavigator()

export default function Navigation(){
    return(
        <NavigationContainer
            theme={MyTheme}
        >
            <Stack.Navigator 
                initialRouteName="Home"  
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="New" component={New}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}