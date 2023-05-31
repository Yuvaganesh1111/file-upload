require('dotenv').config()
const mongoose = require('mongoose');
const FileSchema=require('../model/schema')
const url=process.env.DB_URL;
const collname=process.env.COLLECTION_NAME;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{console.log("db connected")})

const File = mongoose.model(collname, FileSchema);

module.exports=File;