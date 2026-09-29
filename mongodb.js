import express from 'express'
const app=express()
import { MongoClient } from 'mongodb'
const client=new MongoClient("mongodb://localhost:27017/ ")
await client.connect()
const dbName=client.db("class")
const collection=dbName.collection('Students')
const result= await collection.find().toArray()
console.log(result)


app.listen(4400)