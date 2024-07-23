import { Tabs } from "expo-router";
import {FontAwesome} from '@expo/vector-icons'
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function RootLayout(){
    return <Tabs>
        <Tabs.Screen name="index" options={{headerShown:false,title:'Home',tabBarIcon:({Color}) => (
            <FontAwesome name='home' Color={Color} size={30} />
        ) }}/>
        <Tabs.Screen name="profile" options={{headerShown:false,title:'Profile',tabBarIcon:({Color}) => (
            <FontAwesome name='user' Color={Color} size={30} />
        ) }}/>
         <Tabs.Screen name="setting" options={{headerShown:false,title:'Setting',tabBarIcon:({Color}) => (
            <FontAwesome name='cog' Color={Color} size={30} />
        ) }}/>
    </Tabs> ;
}