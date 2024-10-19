// import { Formik } from 'formik';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
// import * as Yup from 'yup'
// import React, { useState } from 'react'

// const signup = () => {
   

//     const validationSchema = Yup.object().shape({
//         email: Yup.string().required('Email tera baap daalyega').email().label('email'),
//         password: Yup.string().required('password tera baap daalyega').min(5).label('password'),
//         confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'password must match').required('Required')
//     });

//     return (
//         <View style={styles.container}>
//             <Formik
//                 initialValues={{ email: '', password: '', confirmPassword: '' }}
//                 validationSchema={validationSchema}
//                 onSubmit={(values) => console.log(values)}
//             >
//                 {({
//                     values,
//                     errors,
//                     touched,
//                     handleChange,
//                     handleBlur,
//                     handleSubmit,
//                     isSubmitting,
//                     /* and other goodies */
//                 }) => (
//                     <View style={styles.container}>
//                         <View style={styles.header}>
//                             <Text style={styles.title}>REGISTER</Text>
//                             <Text style={styles.subtitle}>TO YOUR ACCOUNT</Text>
//                         </View>

//                         <View style={styles.form}>
//                             <TextInput
//                                 style={styles.input}
//                                 placeholder="E-Mail"
//                                 onChangeText={handleChange('email')}
//                                 onBlur={handleBlur('email')}
//                                 value={values.email}
//                                 // key={values.email}
//                                 keyboardType='email-address'
//                             />
//                             {errors.email && touched.email && (
//                                 <Text style={styles.errortext}>{errors.email} </Text>
//                             )}
//                             <TextInput
//                                 style={styles.input}
//                                 placeholder="Password"
//                                 secureTextEntry={true}
//                                 value={values.password}
//                                 onChangeText={handleChange('password')}
//                                 onBlur={handleBlur('password')}

//                             />
//                             {errors.password && touched.password && (
//                                 <Text style={styles.errortext}>{errors.password} </Text>
//                             )}
//                             <TextInput
//                                 style={styles.input}
//                                 placeholder="confirmPassword"
//                                 secureTextEntry={true}
//                                 value={values.confirmPassword}
//                                 onChangeText={handleChange('confirmPassword')}
//                                 onBlur={handleBlur('confirmPassword')}

//                             />
//                             {errors.confirmPassword && touched.confirmPassword && (
//                                 <Text style={styles.errortext}>{errors.confirmPassword} </Text>
//                             )}
//                             <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//                                 <Text style={styles.buttonText}>Signup</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                 )}

//             </Formik>
//         </View>
//     )
// }

// export default signup



// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#f5f5f5',
//         // alignItems: 'center',
//         justifyContent: 'center',
//     },
//     header: {
//         alignItems: 'center',
//         marginBottom: 30,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//     },
//     subtitle: {
//         fontSize: 16,
//         color: '#888',
//     },
//     form: {
//         width: '80%',
//         marginHorizontal: 40
//     },
//     input: {
//         height: 40,
//         borderWidth: 1,
//         borderColor: '#ccc',
//         borderRadius: 5,
//         paddingHorizontal: 10,
//         marginBottom: 10,
//     },
//     eyeIcon: {
//         fontSize: 16,
//         color: '#666',
//         // marginRight: 10,
//       },
//     button: {
//         backgroundColor: '#673ab7',
//         paddingVertical: 15,
//         borderRadius: 5,
//         width: '60%',
//         marginHorizontal: 70,
//         alignItems: 'center',
//     },
//     buttonText: {
//         color: '#fff',
//         fontSize: 18,
//     },
//     errortext: {
//         color: 'red',
//     }
// });
// import Fontisto from '@expo/vector-icons/Fontisto';
// import { Link, router } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import { Formik } from 'formik';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
// import * as Yup from 'yup'



// export default function signup() {
//  const validationSchema = Yup.object().shape({
//   email:Yup.string().required('Email tera baap daalyega').email().label('email'),
//   password:Yup.string().required('password tera baap daalyega').min(5).label('password')
//  }) 

//   return (

//     <View style={styles.container}>
      
//     {/* <StatusBar backgroundColor='' /> */}
//     <Formik
//        initialValues={{ email: 'devil@gmail.com', password: '123456' }}
//       validationSchema={validationSchema}
//       onSubmit={(values)=>{console.log(values)
//         router.push('/(tabs)')
//       }}
    
//      >
//     {({
//          values,
//          errors,
//          touched,
//          handleChange,
//          handleBlur,
//          handleSubmit,
//          isSubmitting,
//          /* and other goodies */
//        }) => (
//         <View style={styles.container2}>
//         <View style={styles.header}>
//         <Image  style={styles.topimg} source={require('../../try.png')} />
//           <Text style={styles.title}>signup</Text>
//           <Text style={styles.subtitle}>Please Sign in to continue</Text>
//         </View>

          
//         <View style={styles.inputcontainer}>
//         <Fontisto style={styles.icon} name="email" size={14} />
//         <TextInput
          
//           style={styles.input}
//           placeholder="E-Mail"
//           onChangeText={handleChange('email')}
//           onBlur={handleBlur('email')}
//           value={values.email}
//           // key={values.email}
//           keyboardType='email-address'
//         />
//         {errors.email && touched.email && (
//           <Text style={styles.errortext}>{errors.email} </Text>
//         ) }
//         </View>
//         <View style={styles.inputcontainer}>
//         <Fontisto style={styles.icon} name='eye' size={14}/>
//         <TextInput
        
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry={true}
//           value={values.password}
//           onChangeText={handleChange('password')}
//           onBlur={handleBlur('password')}
       
//         />
//         {errors.password && touched.password && (
//           <Text style={styles.errortext}>{errors.password} </Text>
//         ) }
//         </View>
        



//           <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//             <Text style={styles.buttonText}>signup</Text>
//           </TouchableOpacity>
//           <Text style={styles.forgot}>Forgot Password ?</Text>
//         </View>
      
//        )}

//      </Formik>
//      <Text style={{ color: '#888'}} >Don't Have An Account 
//       <Link style={styles.link} href={'./signup'} >Sign Up</Link>
//      </Text>
//      </View>




   
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1A2344',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   container2: {
//     backgroundColor:'#1A2368',
//     elevation:1,
//     borderRadius:10,
//     height:500,
//     margin:20,
//     padding:20,
//     justifyContent:'center',
    
//   },
//   topimg:{
//     height:200,
//     width:200,
//     borderRadius:50,
//     marginHorizontal:'20%'
//   },
//   header: {
//     alignItems: 'flex-start',
//     marginBottom: 30,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color:'#ffffff'

//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#888',
//   },
//   inputcontainer:{
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#1A2344',
//     padding:10,
//     borderWidth:1,
//     margin:3,
//     borderColor:'red',
//     borderRadius:5,
//   },
//   icon:{
//     marginRight:10,
//     color:'white'
//   },
//   input: {
//     flex: 1,
//     height:20,
//     backgroundColor: '#1A2344',
//     color: '#fff',
    
//   },
//   button: {
//     margin:5,
//     backgroundColor: '#7CD7E1',
//     paddingVertical: 15,
//     borderRadius: 30,
//     marginHorizontal:70,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#000',
//     fontWeight:'bold',
//     fontSize: 18,
//   },
//   errortext:{
//     color:'red',
//   },
//   forgot:{
//     color:'#7CD7E1',
//     textAlign:"center",
//     marginTop:10
//   },
//   link:{
//     fontSize:20,
//     color:'#7CD7E1',
//   },
// });


import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Entypo } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import * as Yup from 'yup'
// import  'yup-phone';
import { useState } from 'react';



export default function signup() {

  const [selectedInput, setSelectedInput] = useState(null);

  const handleFocus = (inputName) => {
    setSelectedInput(inputName);
  };

  const handleBlur = () => {
    setSelectedInput(null);
  };
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

//   phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
  


 const validationSchema = Yup.object().shape({
    fullName:Yup.string().required('fullname is required').label('Full Name'),
    mobile:Yup.string().matches(phoneRegExp, 'Phone number is not valid').required(),
  email:Yup.string().required('Email tera baap daalyega').email().label('email'),
  password:Yup.string().required('password tera baap daalyega').min(5).label('password'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'password must match').required('Required')
 }) 

  return (

    <View style={styles.container}>
      
    <StatusBar backgroundColor='white' />
    <Image  style={styles.topimg} source={require('../../fun.png')} />
    <Formik
       initialValues={{ email: '', password: '',fullName:'',confirmPassword:'',mobile:'' }}
      validationSchema={validationSchema}
      onSubmit={(values)=>{console.log(values)
        router.navigate('/auth/login')
      }}
    
     >
    {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
        
        <View style={styles.container2}>
        <View style={styles.header}>
        
          <Text style={styles.title}>signup</Text>
          <Text style={styles.subtitle}>Please Sign in to continue</Text>
        </View>

        <View style={[styles.inputcontainer,selectedInput === 'input1' && styles.selected, touched.fullName && errors.fullName && styles.errorInput]}>
        <Fontisto style={styles.icon} name='person' size={14} />
        <TextInput
          
          style={styles.input}
          placeholder="FullName"
          onChangeText={handleChange('fullName')}
          onBlur={handleBlur('fullName')}
          value={values.fullName}
          onFocus={() => handleFocus('input1')}
          placeholderTextColor={'white'}
          // key={values.email}
          keyboardType='default'
        />
        {errors.fullName && touched.fullName && (
                
                <AntDesign name="exclamation" size={24} color="orange" />
              )}
        </View>
        <View style={[styles.inputcontainer,selectedInput === 'input5' && styles.selected, touched.mobile && errors.mobile && styles.errorInput]}>
        <Fontisto style={styles.icon} name='mobile' size={14} />
        <TextInput
          
          style={styles.input}
          placeholder="Phone No."
          onChangeText={handleChange('mobile')}
          onBlur={handleBlur('mobile')}
          value={values.mobile}
          onFocus={() => handleFocus('input5')}
          placeholderTextColor={'white'}
          // key={values.email}
          keyboardType='number-pad'
        />
        {errors.fullName && touched.fullName ? (
                <Entypo name="emoji-sad" size={20} color="red" />
              ) : (
                <Entypo name="emoji-happy" size={20} color="green" />
              )}
        </View>
          
        <View style={[styles.inputcontainer,selectedInput === 'input2' && styles.selected, touched.email && errors.email && styles.errorInput]}>
        <Fontisto style={styles.icon} name="email" size={14} />
        <TextInput
          
          style={styles.input}
          placeholder="E-Mail"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          onFocus={() => handleFocus('input2')}
          placeholderTextColor={'white'}
          // key={values.email}
          keyboardType='email-address'
        />
        {errors.email && touched.email ? (
                <Entypo name="emoji-sad" size={20} color="red" />
              ) : (
                <Entypo name="emoji-happy" size={20} color="green" />
              )}
        </View>
        <View style={[styles.inputcontainer,selectedInput === 'input3' && styles.selected, touched.password && errors.password && styles.errorInput]}>
        <Fontisto style={styles.icon} name='eye' size={14}/>
        <TextInput
        
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={values.password}
          onFocus={()=>handleFocus('input3')}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          placeholderTextColor={'white'}
       
        />
        {errors.password && touched.password ? (
                <Entypo name="emoji-sad" size={20} color="red" />
              ) : (
                <Entypo name="emoji-happy" size={20} color="#3E8D42" />
              )}
        </View>
        <View View style={[styles.inputcontainer,selectedInput === 'input4' && styles.selected, touched.confirmPassword && errors.confirmPassword && styles.errorInput]}>
        <Fontisto style={styles.icon} name='eye' size={14}/>
        <TextInput   
        style={styles.input}
        placeholder="confirmPassword"
        secureTextEntry={true}
        onFocus={()=>handleFocus('input4')}
        value={values.confirmPassword}
        onChangeText={handleChange('confirmPassword')}
        onBlur={handleBlur('confirmPassword')}
        placeholderTextColor={'white'}
        />
        {errors.confirmPassword && touched.confirmPassword ?(
                <Entypo name="emoji-sad" size={20} color="red" />
              ) : (
                <Entypo name="emoji-happy" size={20} color="green" />
              )    
    }
        </View>
        



          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>signup</Text>
          </TouchableOpacity>
          {/* <Text style={styles.forgot}>Forgot Password ?</Text> */}
        </View>
      
       )}

     </Formik>
     <Text style={styles.actext} >Don't Have An Account 
      <Link style={styles.link} href={'./login'} >Login</Link>
     </Text>
     </View>




   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A2344',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    backgroundColor:'#1A2344',
    // backgroundColor:'red',
    elevation:1,
    borderRadius:10,
    height:400,
    width:400,
    // margin:20,
    marginVertical:20,
    padding:20,
    justifyContent:'center',
    
  },
  topimg:{
    height:200,
    width:200,
    borderRadius:50,
    marginHorizontal:'20%'
  },
  header: {
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#ffffff'

  },
  subtitle: {
    fontSize: 16,
    color: '#888',
  },
  inputcontainer:{
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A2344',
    padding:10,
    // borderWidth:2,
    margin:3,
    borderRadius:10,
    // borderColor:'#6A71A8'
  },
  icon:{
    marginRight:10,
    color:'white'
  },
  input: {
    flex: 1,
    color: '#fff',
    
    
  },
  button: {
    margin:5,
    backgroundColor: '#7CD7E1',
    paddingVertical: 15,
    borderRadius: 30,
    marginHorizontal:70,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight:'bold',
    fontSize: 18,
  },
  errortext:{
    color:'red',
  },
  forgot:{
    color:'#7CD7E1',
    textAlign:"center",
    marginTop:10
  },
  actext:{
    color: '#888',
    marginTop:50,
  },
  link:{
    fontSize:20,
    color:'#7CD7E1',
  },
  errorInput:{
    // backgroundColor:'white',
    borderColor:'red'
  },
  selected: {
    // borderColor: 'aqua', 
    elevation:1,
    backgroundColor:'#1C236A',
    borderWidth: 2,
    transform:[{scale:1.05}],
    fontSize: 20, // Increase font size when selected
  },  
});