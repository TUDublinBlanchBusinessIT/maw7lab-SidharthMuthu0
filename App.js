import { Button, View, Text, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import { db } from './firebaseConfig';

export default function App() {
  
    const styles = StyleSheet.create({
      textbox: {
        borderWidth: 1,
        marginBottom: 10, 
        padding: 8 
      },
      listItem: {
        padding: 16,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
      },
      listItemText: {
        fontSize: 16,
      },
    })

    const [users, setUsers] = useState([
        { id: '1', name: 'John Doe', email: 'john.doe@example.com' },
        { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com' },
        { id: '3', name: 'Alice Johnson', email: 'alice.johnson@example.com' },
      ]);
  
    //Add two useState() hooks for name and email here

    async function saveData() {
      if (db){
        try {
            await db.collection('users').add({
                //change the following two lines so that
                //instead of using hard-coded values they
                //take the values from the useState hooks you have setup
                name: "Joe Bloggs",
                email: "joeb@joeb.com",
                //setEmail(""); //unComment this line when you have added the setEmail hook
                //setName(""); //unComment this line when you have added the setName hook
            });
            alert('Data saved successfully!');
        } catch (err) {
            alert(`Error adding document: ${err.message}`);
            console.error('Error adding document:', err);
        }
      }
      else {
        alert("nodb");
      }
    };
    
    //add two textInputs inside the following View - above the Button
    //the TextInputs should use onChangetext to set the value for name and email
    //stored in the useState hooks that you have set up 
    //the TextInputs should have style={styles.textbox}
    return (
      <View style={{ padding: 20 }}>

        <Button title="Save User" onPress={saveData} />
        <FlatList
            data={users}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <View style={styles.listItem}>
                <Text style={styles.listItemText}>Name: {item.name}</Text>
                <Text style={styles.listItemText}>Email: {item.email}</Text>
            </View>
            )}
        />
      </View>
    );
  }