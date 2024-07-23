import { Stack } from "expo-router";

export default function RootLayout(){
    return(
        <Stack>
            <Stack.Screen name='index' options={{headerShown:false,title:'devilhouse'}} />
            {/* <Stack.Screen name='login' options={{headerShown:true,title:'devilhouse'}} /> */}
        </Stack>
    )
}