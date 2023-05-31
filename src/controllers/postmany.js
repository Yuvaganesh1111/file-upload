const express = require('express');
const router=express.Router();
const  upload=require('../middleware/multer')
const File=require('../config/mongoose')

router.post('/uploadmany',upload.array('files'),async(req,res)=>{
    const files=req.files;
     for(let i=0;i<files.length;i++){
 
       const{originalname,path}=files[i];
        const existingfile=await File.findOne({name:originalname})
      console.log(existingfile)
      if(existingfile){
       await File.deleteOne(existingfile)
      }
     // Create a new file document
     const file = new File({
       name: originalname,
       path: path,
     });
   
     try {
       // Save the file document to MongoDB
       const savedFile = await file.save();
       
     } catch (err) {
       res.status(500).json({ error: 'Error saving file to database.' });
     }
     }
 
     res.send('success inserted all the files')
 
    /* const filedata=files.map((file)=>({
       name:file.originalname,
       path:file.path
     }));
 
     File.insertMany(filedata).then((val)=>{
       res.send(val)
     }).catch((err)=>{res.send(err)})*/
 
   })

   module.exports=router;