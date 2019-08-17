const mongoose=require('mongoose');
module.exports=()=>{
    mongoose.connect('mongodb+srv://movies:1234asdf@cluster0-sp60w.mongodb.net/test?retryWrites=true&w=majority')
mongoose.connection.on('open',()=>{
    console.log('MongoDB:Connected');
});
mongoose.connection.on('error',(err)=>{
    console.log('MongoDB:Error',err);
});
mongoose.Promise=global.Promise;
};