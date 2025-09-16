require('dotenv/config')
const {db} = require('./db')
const {userTable} =  require('./drizzle/schema');
async function getAllUsers()
{
 const users  = await db.select().from(userTable);
//  console.log(`users in db`, users)
 return users;
}
async function createUser({id , name, email}){
    await db.insert(userTable).values({
        id,
        name,
        email,
    })
}
// createUser({id:1 , name: 'ayush', email:'ayush@gmail.com'});
// createUser({id:2 , name: 'piyush', email:'piyush@gmail.com'});
getAllUsers();