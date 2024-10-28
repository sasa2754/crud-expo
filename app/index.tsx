import { Link, router } from "expo-router";
import { useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { FIREBASE_AUTH } from "@/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { useNavigation } from "expo-router";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
    },
    input: {
        height: 40,
        borderColor: '#F68AFAFF',
        borderWidth: 1,
        paddingHorizontal: 8,
        borderRadius: 30,
        zIndex: 10
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
        backgroundColor: '#FFDEFFFF',
        padding: 10,
        borderRadius: 10,
        height: '80%',
        shadowColor: "#C007B1FF",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        gap: 30,
        
    },

    boxzinho: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFDEFFFF',
        padding: 10,
        borderRadius: 10,
        height: '10%',
        shadowColor: "#C007B1FF",
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
        shadowColor: "#8D0081C5",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        backgroundColor: '#F877F2FF',
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
    const [pass, setPass] = useState('');

    const auth = FIREBASE_AUTH;

    useEffect(() => {
        console.log(auth.currentUser);
    }, [auth.currentUser]);

    useEffect(() => {
        console.log(email, pass);
    }, [email, pass]);

    const onPress = () => {
        signInWithEmailAndPassword(auth, email, pass)
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
            <LinearGradient colors={['#F2AFF8FF', '#FCE8FCFF']} start={{x: 0, y: 0}} end={{x: 0, y: 0}} style={styles.gradient}>
                <Image style={styles.nuvenzinha} source={require('@/assets/images/nuvemFofa.png')} resizeMode="contain"></Image>
                <Image style={styles.pedro} source={require('@/assets/images/Pedro.png')} resizeMode="contain"></Image>
                

                <View style={styles.box}>
                    <View style={styles.formBox}>
                        <View style={styles.inputBox}>
                            <View>
                                <Text style={{color: '#EF43FFFF', fontWeight: 'bold'}}>Email</Text>
                                <TextInput style={styles.input} value={email} onChangeText={setEmail} />
                            </View>
                            <View>
                                <Text style={{color: '#EF43FFFF', fontWeight: 'bold'}}>Senha</Text>
                                <TextInput style={styles.input}  value={pass} onChangeText={setPass} secureTextEntry />
                            </View>
                        </View>
                        
                        <TouchableOpacity onPress={onPress} style={styles.button}>
                            <Text style={{color: '#ffffff', fontWeight: 'bold'}}>Entrar</Text>
                        </TouchableOpacity> 

                    </View>

                    <View style={styles.boxzinho}>
                       <Text style={{color: '#EF43FFFF', fontWeight: 'bold'}}>Não tem uma conta?</Text>
                       <Link href={'/register'} style={{color: '#A439ADFF', fontWeight: 'bold'}}>Cadastrar</Link>
                    </View>
                </View>
            </LinearGradient>

        </SafeAreaView>
    );
}


