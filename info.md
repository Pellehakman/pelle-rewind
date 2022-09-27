npm install http-sever
docker build -t docker-pelle-rewind:0.1 .
docker run --name docker-pelle-container -d -p 8080:8080 docker-pelle-rewind:0.1



password db = Nn921CGDp1apng8A


// import Datastore from 'nedb'
// import jsonData from "./data/data.json" assert { type: "json" };

// console.log(jsonData)

// const db = new Datastore({
//     filename: 'database.db',
//     autoload: true
// })

// db.loadDatabase();
// console.log('server is running')


// db.insert(jsonData, function(err, newData){

// })
