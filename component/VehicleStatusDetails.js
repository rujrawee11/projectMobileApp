import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, SafeAreaView, Image, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const VehicleStatusDetails = (probs) => {
    const [vehicleBrand, setVehicleBrand] = React.useState(probs.brand)
    const [vehicleSeats, setVehicleSeat] = React.useState("4 Seats")
    const [vehicleOS, setVehicleOS] = React.useState("Manual")
    const [vehicleStatus, setVehicleStatus] = React.useState(probs.status)
    const [vehiclePaid, setVehiclePaid] = React.useState("Paid")
    const [vehiclePerrental, setVehiclePerrental] = React.useState("750 Km Perrntal")
    const [vImage, setVImage] = React.useState("")

    {/**ถ้าโดนจองแล้ว => else ยังไม่โดนจอง */}
    if (vehicleStatus == "Unavailiable") return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#FF7272', width: '100%', borderRadius: 15, flexWrap: 'wrap', marginTop: '2%'}}>
                     
            <SafeAreaView style={[styles.boxLayout]}>
                <SafeAreaView style={styles.viewVehicleImage}>
                    <Image source={{uri : "https://www.engdict.com/data/dict/media/images_public/car-00084470637418118683737545_normal.png"}} style={[styles.vehicleImage, {}]} />
                </SafeAreaView>
                <SafeAreaView style={{flex:1, justifyContent: 'space-around', alignItems: 'center'}}>
                        <Text style={styles.headText}>{vehicleBrand}</Text>
                        <Text style={styles.text}><AntDesign name="caretright" size={16} color="black"/> {vehicleSeats}</Text>
                        <Text style={styles.text}><AntDesign name="caretright" size={16} color="black"/> {vehicleOS}</Text>
                        <Text style={styles.text}><AntDesign name="caretright" size={16} color="black"/> {vehiclePerrental}</Text>
                </SafeAreaView>
            </SafeAreaView>

            <SafeAreaView style={[styles.boxLayout, { marginTop: '-2%',}]}>
                <SafeAreaView style={[styles.Layout, {alignItems: 'center'}]}>
                    <View style={styles.viewBoxUn}>
                        <Text style={styles.text}>{vehicleStatus}</Text>
                    </View>
                </SafeAreaView>
                <SafeAreaView style={[styles.Layout, {alignItems: 'flex-end', marginRight: '5%'}]}>
                    <View style={[styles.viewBoxUn]}>
                        <Text style={styles.text}>{vehiclePaid}</Text>
                    </View>
                </SafeAreaView>
            </SafeAreaView>

            <SafeAreaView style={[styles.boxLayout, {padding: 10}]}>
                <SafeAreaView style={[styles.Layout, {alignItems: 'center'}]}>
                    <TouchableOpacity style={[styles.touchableOpacity]}>
                        <Text style={styles.text}>View Renter</Text>
                        <AntDesign name="user" size={20} color="black" style={styles.miniLogo}/>
                    </TouchableOpacity>
                </SafeAreaView>
                <SafeAreaView style={[styles.Layout, {alignItems: 'center'}]}>
                    <TouchableOpacity style={[styles.touchableOpacity]}>
                        <Text style={styles.text}>View Contract</Text>
                        <FontAwesome5 name="file-contract" size={20} color="black" style={styles.miniLogo}/>
                    </TouchableOpacity>
                </SafeAreaView>
            </SafeAreaView>
        </SafeAreaView>
    )
    
    else if (vehicleStatus == "Availiable"){
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#98EE42', width: '100%', borderRadius: 15, flexWrap: 'wrap', marginTop: '2%'}}>
                     
            <SafeAreaView style={[styles.boxLayout]}>
                <SafeAreaView style={styles.viewVehicleImage}>
                        <Image source={{uri: 'https://www.engdict.com/data/dict/media/images_public/car-00084470637418118683737545_normal.png'}} style={[styles.vehicleImage, {}]} />
                </SafeAreaView>
                <SafeAreaView style={{flex:1, justifyContent: 'space-around', alignItems: 'center'}}>
                        <Text style={styles.headText}>{vehicleBrand}</Text>
                        <Text style={styles.text}><AntDesign name="caretright" size={16} color="black"/> {vehicleSeats}</Text>
                        <Text style={styles.text}><AntDesign name="caretright" size={16} color="black"/> {vehicleOS}</Text>
                        <Text style={styles.text}><AntDesign name="caretright" size={16} color="black"/> {vehiclePerrental}</Text>
                </SafeAreaView>
            </SafeAreaView>

            <SafeAreaView style={[styles.boxLayout, { marginTop: '-2%',}]}>
                <SafeAreaView style={[styles.Layout, {alignItems: 'center'}]}>
                    <View style={styles.viewBoxAva}>
                        <Text style={styles.text}>{vehicleStatus}</Text>
                    </View>
                </SafeAreaView>
                <SafeAreaView style={[styles.Layout]}></SafeAreaView>
            </SafeAreaView>

            <SafeAreaView style={[styles.boxLayout, {padding: 10}]}>
                <SafeAreaView style={[styles.Layout, {alignItems: 'center'}]}>
                    <TouchableOpacity style={[styles.touchableOpacity]}>
                        <Text style={styles.text}>View Renter</Text>
                        <AntDesign name="user" size={20} color="black" style={styles.miniLogo}/>
                    </TouchableOpacity>
                </SafeAreaView>
                <SafeAreaView style={[styles.Layout, {alignItems: 'center'}]}>
                    <TouchableOpacity style={[styles.touchableOpacity]}>
                        <Text style={styles.text}>View Contract</Text>
                        <FontAwesome5 name="file-contract" size={20} color="black" style={styles.miniLogo}/>
                    </TouchableOpacity>
                </SafeAreaView>
            </SafeAreaView>
        </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    vehicleImage: {
        width: 180,
        height: 120,
        borderRadius: 15,
    },
    boxLayout: {
        flex: 1,
        flexDirection: 'row',
        margin: '3%'
    },
    text: {
        fontSize: 18,
        fontWeight: '600'
    },
    headText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    Layout: {
        flex: 1,
        width: '100%'
    },
    touchableOpacity: {
        padding: 10,
        backgroundColor: '#FFD051',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    miniLogo: {
        marginLeft: '3%'
    },
    viewBoxUn : {
        padding: 5, 
        backgroundColor: '#FFD8D8', 
        borderRadius: 10,
    },
    viewBoxAva: {
        padding: 5, 
        backgroundColor: '#ADFFBA', 
        borderRadius: 10,
    },
    viewVehicleImage: {
        flex: 1,
        width: '100%',
        backgroundColor:'#D5FAF4',
        alignItems: 'center',
        borderRadius: 10
    }
})

export default VehicleStatusDetails