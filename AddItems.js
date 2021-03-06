import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const AddItems =({title, addItem})=>{
    const [text, setText] = useState('');

    const onChange =(textValue)=> setText(textValue)
    return(
        <View style={styles.header}>
            <TextInput placeholder="Add Item..." style={styles.input} onChangeText={onChange}>{title}</TextInput>

            <TouchableOpacity style={styles.btn} onPress={()=>addItem(text)}>
                <Text style={styles.btnText}><AntDesign name="plus" size={24} color="white" />Add Item</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({ 
    input: {
        height: 60,
        padding:8,
        fontSize: 16,
    },

    btn: {
        backgroundColor: '#c2bad8',
        padding:9,
        margin: 5,
    },

    btnText: {
        color: 'black',
        fontSize:20,
        textAlign: "center",
    },
});

export default AddItems;