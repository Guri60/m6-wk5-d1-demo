const mongoose = require('mongoose')

//Database connection
mongoose.connect('mongodb://localhost:2707/event_db')
//OR mongoose.connect('mongodb://127.0.0.1:27017/event_db')
.then(res => {
    console.log('connected to database');
})
.catch(error => {
    console.log(error);
});

//Mongoose Schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: [18, 'Age must be 18 or above']
    }
});

// Create model
const Person = mongoose.model('Person', personSchema);

// Create objects
const person = new Person({name: 'Jack',age: 16});
(async () => {
    try {
        await person.save();
    } catch (err) {
        console.log(err)
    }
}) ();