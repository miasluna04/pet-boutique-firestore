// Connect to Firestore 
const admin = require("firebase-admin")
const creds = require("./credentials.json")

admin.initializeApp({
    credential: admin.credential.cert(creds)
})

// now here we are connected to ALL of the services in pur firebase project
const db = admin.firestore()

// Create a customer 
const newCustomer = {
    firstName: 'Noah',
    lastName: 'Albert',
    tel:'561-413-7707',
    email:'no.albert113@gmail.com',
    dob:'2003-11-03',
    pets: [{
        name: 'Ryder',
        type: 'dog',
        size: 'Medium',
        age: 5,
    
        name: 'Dragon',
        type: 'salamander',
        size: 'small',
        age: 5
    }]
}
db.collection('customrers').add(newCustomer)
.then(doc => console.log('Created customer', doc.id))
.catch(err => console.log('Error Getting Customers',err))

// Get all customers
db.collection('customers').get()
.then(collection => {
// console.log results 
const allCustomers = collection.docs.map(doc => doc.data())
console.log(allCustomers)
})
.catch(err => console.log('Error Getting Customers',err))
