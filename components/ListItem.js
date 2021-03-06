import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
const ListItem =({item, deleteItem})=>{
    return(
        <TouchableOpacity style={styles.listitem}> 

            <View style={styles.listitemView}>
                <Text style={styles.listitemText}>{item.text}</Text>
                <AntDesign name="closecircle" size={24} color="firebrick" onPress={()=>deleteItem(item.id)}/>
            </View>

        </TouchableOpacity>
       
    );
};

const styles = StyleSheet.create({
    listitem:{
        padding: 15,
        backgroundColor: '#ede4e4',
        borderBottomWidth: 2,
        borderColor: '#eee'
    },

    listitemView:{
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
    },

    
    listitemText:{
       fontSize: 20, 
    },
});

export default ListItem;