# Mobile Apps Week 7 Lab
This lab gets students to connect a React Native App to a Firebase Firestore database. The goals of the App are as follows.
- To set up a Firebase account - to create a project, app and firestore database within Firebase
- To modify an existing React Native App so that it saves some data to Firebase.
- To retreive data from Firebase and display it in a Flatlist
- To add a ScrollView so that the Screen is scrollable

# Part 1
Follow the Step-by-Step Powerpoint guide to create 
- a new Firebase Account
- a Firebase Project
- a Firebase App
- firebaseConfig settings
- a Firestore Database

# Part 2
Modify the code in firebaseConfig.js so that it uses the Firebase Config app settings that are supplied to you 
during the steps of setting up Firebase. Replace the code inside the ```const firebaseConfig = {}``` block with the code given to you containing the firebase settings and modified to include the database setting.
Make sure your package.json file is up to date. Click on the Save Data button in your app, if it works you should get a "Data Saved Successfully" message. Now if you go back to the firebase console you should find the Joe Bloggs name and email data saved in your firestore.

# Part 3
Add two new useState hooks for name and email (add them where the comment indicates to add them in App.js). Next add two new TextInput components. Remember to import the TextInput component. Modify the example code so that, instead of the users document with hard-coded values for name and email, the document takes values from exisiting TextInput components and saves them to the Firestore database. Uncomment the lines from the saveData function which set the name and email to blank after they have been saved.

# Part 4
Modify your Flatlist so that rather than printing data from the list of users hardcoded into the application the Flatlist will pull 
data from the list of users in the firestore database. Replace the useState() hook which sets up the users with the following code

```
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
```

Wrap the ```<View></View>``` component in the App with a ```<ScrollView></ScrollView>``` tag so that as the list gets longer the app will Scroll. Remember, you will have to add ScrollView to the list of components being imported.

