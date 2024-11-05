import { Button, View, Text, StyleSheet,FlatList,TextInput,ScrollView} from 'react-native';
import React, { useState,useEffect } from 'react';
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
  
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState("");

    async function saveData() {
      if (db){
        try {
            await db.collection('users').add({
                //change the following two lines so that
                //instead of using hard-coded values they
                //take the values from the useState hooks you have setup
                name: name,
                email: email,
                
            });
            alert('Data saved successfully!');

            setName("");
            setEmail("");

        } catch (err) {
            alert(`Error adding document: ${err.message}`);
            console.error('Error adding document:', err);
        }
      }
      else {
        alert("nodb");
      }
    }

    useEffect(() => {
    // Fetching data from the 'users' collection
    db.collection('users')
      .get()
      .then(querySnapshot => {
        setUsers(
          querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, [db, name, email]); //the array at the end will set this useEffect to call when any one of these things changes

    
    //add two textInputs inside the following View - above the Button
    //the TextInputs should use onChangetext to set the value for name and email
    //stored in the useState hooks that you have set up 
    //the TextInputs should have style={styles.textbox}
    return (
      <ScrollView>
      <View style={{ padding: 20 }}>
      <TextInput  placeholder="Enter Name" style={styles.textbox} value={name} onChangeText={setName} />
      <TextInput placeholder="Enter Email" style={styles.textbox} value={email} onChangeText={setEmail}/>

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
      </ScrollView>
    );
  }

