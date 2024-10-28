import { Link, router } from "expo-router";
import { useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { FIREBASE_AUTH } from "@/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useNavigation } from "expo-router";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden'
        // justifyContent: 'center',
    },
    input: {
        height: 40,
        borderColor: '#C253EEFF',
        borderWidth: 1,
        paddingHorizontal: 8,
        borderRadius: 30,
    },

    header: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    nuvenzinha: {
        width: '110%',
        height: '50%',
        position: 'absolute',
        top: 0,
        zIndex: 1
    },

    gradient: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    box: {
        zIndex: 2,
        backgroundColor: '#ffffff',
        position: 'absolute',
        bottom: 0,
        height: '72%',
        width: '100%',
        alignItems: 'center',
        paddingVertical: 30,
        justifyContent: 'space-around'
    },

    formBox: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E4C9FAFF',
        padding: 10,
        borderRadius: 10,
        height: '80%',
        shadowColor: "#7607C0FF",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        gap: 30
        
    },

    boxzinho: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E4C9FAFF',
        padding: 10,
        borderRadius: 10,
        height: '10%',
        shadowColor: "#7607C0FF",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 4.65,
        elevation: 7,
        flexDirection: 'row',
        gap: 6
    },

    button: {
        borderRadius: 20,
        height: 35,
        width: 230,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#6C008DC5",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        backgroundColor: '#A349ECFF',
    },
    inputBox: {
        width: '95%',
        gap: 20
    },
    
    pedro: {
        width: '50%',
        height: undefined,
        aspectRatio: 1,
        top: -300,
        zIndex: 5,
        maxHeight: 350
    }
});


export default function Login() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [repeatPass, setRepeatPass] = useState('');

    const auth = FIREBASE_AUTH;

    useEffect(() => {
        console.log(auth.currentUser);
    }, [auth.currentUser]);

    useEffect(() => {
        console.log(email, pass);
    }, [email, pass]);

    const onPress = () => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then((dadosUsuario) => {
                console.log(dadosUsuario);
                router.push("/(tabs)");
            })
            .catch((err) => {
                alert('Ta errado man');
                console.error(err);
            });
    };

    console.log(email, pass);
    console.log(typeof email, typeof pass);

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={['#BD52E7FF', '#E2AAFAFF']} start={{x: 0, y: 0}} end={{x: 0, y: 0}} style={styles.gradient}>
                <Image style={styles.nuvenzinha} source={require('@/assets/images/nuvemFofa.png')} resizeMode="contain"></Image>
                <Image style={styles.pedro} source={require('@/assets/images/PedroRoxo.png')} resizeMode="contain"></Image>
                

                <View style={styles.box}>
                    <View style={styles.formBox}>
                        <View style={styles.inputBox}>
                            <View>
                                <Text style={{color: '#C343FFFF', fontWeight: 'bold'}}>Nome</Text>
                                <TextInput style={styles.input}  value={name} onChangeText={setName} />
                            </View>
                            <View>
                                <Text style={{color: '#C343FFFF', fontWeight: 'bold'}}>Email</Text>
                                <TextInput style={styles.input} value={email} onChangeText={setEmail} />
                            </View>
                            <View>
                                <Text style={{color: '#C343FFFF', fontWeight: 'bold'}}>Senha</Text>
                                <TextInput style={styles.input}  value={pass} onChangeText={setPass} secureTextEntry />
                            </View>
                            <View>
                                <Text style={{color: '#C343FFFF', fontWeight: 'bold'}}>Repetir senha</Text>
                                <TextInput style={styles.input}  value={repeatPass} onChangeText={setRepeatPass} secureTextEntry />
                            </View>
                        </View>
                        
                        <TouchableOpacity onPress={onPress} style={styles.button}>
                            <Text style={{color: '#ffffff', fontWeight: 'bold'}}>Cadastrar</Text>
                        </TouchableOpacity> 

                    </View>

                    <View style={styles.boxzinho}>
                       <Text style={{color: '#C343FFFF', fontWeight: 'bold'}}>Já tem uma conta?</Text>
                       <Link href={'/'} style={{color: '#8B09C7FF', fontWeight: 'bold'}}>Entrar</Link>
                    </View>
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
}


