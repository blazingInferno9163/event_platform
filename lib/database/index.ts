import mongoose from 'mongoose'

const MONGODB_URI=process.env.MONGODB_URI


//attempt to retrieve a mongoose property from global obj
//holds cached connection to db
let cached=(global as any).mongoose || {conn:null , promise:null}

export const connectToDatabase=async()=>{
    if(cached.conn)return cached.conn;

    if(!MONGODB_URI)throw new Error('MONGOBD_URI is missing')

    //either connect to already eshablished cached connection or create a new connection
    cached.promise=cached.promise|| mongoose.connect(MONGODB_URI,{
        dbName:'evently',
        bufferCommands:false
    })

    cached.conn=await cached.promise;

    return cached.conn
}