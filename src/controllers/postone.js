const express = require('express');
const router=express.Router();
const  upload=require('../middleware/multer')
const File=require('../config/mongoose')

router.post('/upload', upload.single('file'), async (req, res) => {
    const { originalname, path } = req.file;
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
      res.json(savedFile);
    } catch (err) {
      res.status(500).json({ error: 'Error saving file to database.' });
    }
  });

  module.exports=router;