import React from "react";
import { SafeAreaView,View,Text, StyleSheet } from "react-native";

const MemberResult=({route})=>{
    const {user}=route.params;
    return(
        <SafeAreaView>
            <Text style={styles.message}> Kayıt Tamamlandı!</Text>
            <Text style={styles.label}> Adı: {user.userName} </Text>
            <Text style={styles.label}> Soyadı: {user.userSurname} </Text>
            <Text style={styles.label}> Yaşı: {user.userAge} </Text>
            <Text style={styles.label}> Mail Adresi: {user.userMail} </Text>
            <Text style={styles.label}> Memleketi: {user.userHometown} </Text>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    label: {
        margin: 5,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    message: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
export default MemberResult;