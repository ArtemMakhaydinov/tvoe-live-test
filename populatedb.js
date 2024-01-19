'use strict'

const mongoose = require('mongoose');
const ContentModel = require('./content/model');


const contentNames = [
    'Angels with Filthy Souls',
    'Good Will Hunting 2: Hunting Season, Bluntman and Chronic',
    'Angels with Even Filthier Souls'
];

const createRecords = async (names) => {
    const records = [];
    for await (const name of names) {
        const content = new ContentModel({ name });
        try{
            const record = await content.save();
            records.push(record);
        } catch (err) {
            throw err;
        }
    }
    
    return records;
}

const connectToDB = async () => {
    try {
        const args = process.argv.slice(2);
        const URI = args[0];
        await mongoose.connect(URI);
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));
        return db;
    } catch (err) {
        console.error(err);
    }
}

const init = async () => {
    try {
        const db = await connectToDB();
        const records = await createRecords(contentNames);
        console.log(records);
    } catch (err) {
        console.error(err);
    } finally {
        mongoose.connection.close();
    }
}

init();
