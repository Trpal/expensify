import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// const onValueChange = database.ref('expenses').on('value', (snapshot) => {
// 	const expenses = [];
// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id:childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	})
// 	console.log(expenses);
// }, (e) => {
// 	console.log('error with data fetching', e);
// });

// database.ref('expenses')
// 	.once('value')
// 	.then((snapshot) => {
// 		const expenses = [];
// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			});
// 		});

// 		console.log(expenses);
// 	});

// const expenses = [{
// 	description: 'kamalata ruokea',
// 	note: 'Tosi paljon ruokafweea',
// 	amount: 230,
// 	createdAt: 124125
// }]
// setTimeout(() => {
// 	expenses.forEach((expense) => {
// 		database.ref('expenses').push(expense);
// 	});
// }, 3000);




// database.ref('notes/-LBWjtEC50rpEx9dZD71').remove();

// database.ref('notes').push({
// 	title: 'coures topics',
// 	body: 'react, angulra, byton'
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
// 	const snap = snapshot.val();
// 	console.log(`${snap.name} is a ${snap.job.title} at ${snap.job.company}`);
// }, (e) => {
// 	console.log('error with data fetching', e);
// });

// setTimeout(() => {
// 	database.ref('job/company').set('Koodiviidakko');
// }, 3000);

// const onValueChange = database.ref().on('value', (snapshot) => {
// 	console.log(snapshot.val());
// }, (e) => {
// 	console.log('error with data fetching', e);
// });

// setTimeout(() => {
// 	database.ref('age').set(29);
// }, 3000);

// setTimeout(() => {
// 	database.ref().off('value', onValueChange);
// }, 6000);

// setTimeout(() => {
// 	database.ref('age').set(30);
// }, 9000);

// database.ref().set({
// 	name: 'Joni Korpelin',
// 	age: '25',
// 	isSingle: false,
// 	stressLevel: 6,
// 	job: {
// 		title: 'software developer',
// 		company: 'google'
// 	},
// 	location: {
// 		city: 'Oulu',
// 		country: 'Finland',
// 	}
// }).then(() => {
// 	console.log('data is saved');
// }).catch((e) => {
// 	console.log('this failed.', e);
// });

// database.ref().update({
// 	stressLevel: 9,
// 	'job/company': 'amazon',
// 	'location/city': 'seattle'
// });

// database.ref('isSingle').remove()
// 	.then(() => {
// 		console.log('deleted');
// 	}).catch((e) => {
// 		console.log('fail');
// 	});
