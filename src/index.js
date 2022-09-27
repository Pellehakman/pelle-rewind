// import Datastore from 'nedb'
import Datastore from 'nedb-promise'

const database = new Datastore("database.db")
database.loadDatabase();
console.log('server is running')

async function getMenu(){
  let result = await database.find({});
  if (result.length === 0) {
    result = database.insert((require('./data/data.json')))
    console.log(result)
  }
  return result;
  
};

export default getMenu