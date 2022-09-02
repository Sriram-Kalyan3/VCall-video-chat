module.exports.init = function(){
    const mongoose = require('mongoose')
    const dbname ='VideocallDB'
    const url =`mongodb+srv://sriram:sriram@cluster0.g05jg.mongodb.net/${dbname}?retryWrites=true&w=majority`
    mongoose.connect(url)
    .then(function(){
      console.log('db is live')
    })
    .catch(function(){
      console.log('error')
    })
  
  }