import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCXpHTT1JdJs_scQlPJ6Jqe3RK2gaArbq8",
  authDomain: "my-lil-app.firebaseapp.com",
  databaseURL: "https://my-lil-app.firebaseio.com",
  projectId: "my-lil-app",
  storageBucket: "my-lil-app.appspot.com",
  messagingSenderId: "698790465836"
};
// Initialize Firebase
firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };



  // database.ref('expenses').on('child_removed',(snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // database.ref('expenses').on('child_changed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val())
  // })

  // database.ref('expenses').on('child_added', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val())
  // })
  // // database.ref('expenses')
  // .once('value')
  // .then((snapshot) => {
  //   const expenses = [];

  //   snapshot.forEach((childSnaphsot) => {
  //     expenses.push({
  //       id: childSnaphsot.key,
  //       ...childSnaphsot.val()
  //     });
  //   });
  //   console.log(expenses);
  // });

  // database.ref('expenses').on('value', (snapshot) => {
  //   const expenses = [];
  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     })
  //   })
  //   console.log(expenses)
  // })
  // database.ref('expenses').push({
  //   description: 'Coffe',
  //   note: '',
  //   amount: 25,
  //   createdAt: 1000
  // })















  // database.ref('notes/-MI5sXHf0joYHRnmaE88').remove();
  // database.ref('notes').push({
  //   title: 'Course Topics',
  //   body: 'React Native, Angular'
  // });

  // const FirebaseNotes = {
  //   notes: {
  //     apjojasida: {
  //       title: 'First note!',
  //       body: 'This is my note'
  //     },
  //     aspdpapdas:{
  //       title: 'Another note',
  //       body: 'This is my note'
  //     }
  //   }
  // };


  // const notes = [{
  //   id: '12',
  //   title: 'First note!',
  //   body: 'This is my note'
  // }, {
  //   id: '761ase',
  //   title: 'Another note',
  //   body: 'This is my note'

  // }];

  // database.ref('notes').set(notes);

  // database.ref().on('value',(snapshot) => {
  //   let  refObject = snapshot.val();
  //   console.log(`${refObject.name} is a ${refObject.job.title} at ${refObject.job.company}`)
  // });

  // const onValueChange = database.ref().on('value', (snapshot) => {
  //   console.log(snapshot.val());
  // }, (e) => {
  //   console.log('Error with data fetching', e)
  // });



  // database.ref('location/city')
  // .once('value')
  // .then((snapshot) =>  {
  //  const val =  snapshot.val();
  //  console.log(val);
  // })
  // .catch((e) => {
  //   console.log('Error fetching data',e)
  // })
  // ;

  // database.ref().set({
//     name: 'Marko Krajina',
//     age: 26,
//     stressLevel: 6,
//     job: {
//       title: 'Software developer',
//       company: 'Google'
//     },
//     location: {
//         city: 'Philadelphia',
//         country: 'United States'
//     }
//   }).then(() => {
//     console.log('Data is saved!');
//   }).catch((e)=>{
//     console.log('This failed',e);
//   })

//  database.ref().update({
//   stressLevel : 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
//  });

// database.ref()
// .remove()
// .then(() => {
//   console.log('Data was removed')
// }).catch((e) => {
//   console.log('Data was not  removed',e)
// })
// ;