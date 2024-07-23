import { Formik } from 'formik';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import * as Yup from 'yup'
import React, { useState } from 'react'

const signup = () => {
   

    const validationSchema = Yup.object().shape({
        email: Yup.string().required('Email tera baap daalyega').email().label('email'),
        password: Yup.string().required('password tera baap daalyega').min(5).label('password'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'password must match').required('Required')
    });

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ email: '', password: '', confirmPassword: '' }}
                validationSchema={validationSchema}
                onSubmit={(values) => console.log(values)}
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
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Text style={styles.title}>REGISTER</Text>
                            <Text style={styles.subtitle}>TO YOUR ACCOUNT</Text>
                        </View>

                        <View style={styles.form}>
                            <TextInput
                                style={styles.input}
                                placeholder="E-Mail"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                // key={values.email}
                                keyboardType='email-address'
                            />
                            {errors.email && touched.email && (
                                <Text style={styles.errortext}>{errors.email} </Text>
                            )}
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                secureTextEntry={true}
                                value={values.password}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}

                            />
                            {errors.password && touched.password && (
                                <Text style={styles.errortext}>{errors.password} </Text>
                            )}
                            <TextInput
                                style={styles.input}
                                placeholder="confirmPassword"
                                secureTextEntry={true}
                                value={values.confirmPassword}
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={handleBlur('confirmPassword')}

                            />
                            {errors.confirmPassword && touched.confirmPassword && (
                                <Text style={styles.errortext}>{errors.confirmPassword} </Text>
                            )}
                            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                <Text style={styles.buttonText}>Signup</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}

            </Formik>
        </View>
    )
}

export default signup



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: '#888',
    },
    form: {
        width: '80%',
        marginHorizontal: 40
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    eyeIcon: {
        fontSize: 16,
        color: '#666',
        // marginRight: 10,
      },
    button: {
        backgroundColor: '#673ab7',
        paddingVertical: 15,
        borderRadius: 5,
        width: '60%',
        marginHorizontal: 70,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    errortext: {
        color: 'red',
    }
});
