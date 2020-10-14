import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItems from './AddItems';
import { v4 as uuidv4 } from 'uuid';
const App = () =>{
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Code'},
    {id: uuidv4(), text: 'Exercise'},
    {id: uuidv4(), text: 'Cycling'},
    {id: uuidv4(), text: 'Meditation'},
  ]);

  const addItem = text =>{
    if(!text){
      Alert.alert('Error', 'Enter an item.');
    }else{
        setItems(prevItems=>{
        return [{id:uuidv4(), text}, ...prevItems]; 
      });
    }
  };

  const deleteItem = (id)=>{
    setItems( prevItems =>{
      return prevItems.filter(item => item.id != id);
    });
  };

  return (
    <View style={styles.container}>
    <Header title='Work List'/>
    <AddItems addItem={addItem}/>
    <FlatList 
      data={items} 
      renderItem = {({item}) => <ListItem item={item} deleteItem={deleteItem} />}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 34,
  },
  
});

export default App;