import Datastore from 'nedb'

import jsonData from "../data/data.json" assert { type: "json" };
console.log(jsonData)

const db = new Datastore({
    filename: 'database.db',
    autoload: true
})

db.loadDatabase();
console.log('server is running')



db.insert(jsonData, function(err, newData){

})
