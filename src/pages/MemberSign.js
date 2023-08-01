import React, { useState } from "react";
import { SafeAreaView,Alert } from "react-native";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

const MemberSign=({navigation})=>{

    const [userName,setUserName]=useState(null);
    const [userSurname,setUserSurname]=useState(null);
    const [userAge,setUserAge]=useState(null);
    const [userMail,setUserMail]=useState(null);
    const [userHometown,setUserHometown]=useState(null);

    const handleSubmit=()=>{
        
        if(!userName || !userSurname || !userAge || !userMail || !userHometown){
            Alert.alert("Fit Body GYM", "Bilgiler Boş Bırakılamaz!!!");
            return;
        }
        const user={
            userName,
            userSurname,
            userAge,
            userMail,userHometown
        };
        navigation.navigate('MemberResultScreen', {user});
    };

    return(
        <SafeAreaView>
            <Input value="Ad" placeholder="Üye adını giriniz." onChangeText={setUserName}/>
            <Input value="Soyad" placeholder="Soyadını giriniz." onChangeText={setUserSurname} />
            <Input value="Email" placeholder="Mail adresini giriniz." onChangeText={setUserMail} />
            <Input value="Yaş" placeholder="Yaşı giriniz." onChangeText={setUserAge} />
            <Input value="Memleket" placeholder="Memleketinizi giriniz." onChangeText={setUserHometown} />
            <Button text="Kaydı Tamamla" onPress={handleSubmit} />
        </SafeAreaView>
    )
}

export default MemberSign;