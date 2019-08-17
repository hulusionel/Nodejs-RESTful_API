const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const MovieSchema=new Schema({
    director_id:Schema.Types.ObjectId,
    title:{
        type:String,
        required:true,
    },
    category:String,
    country:String,
    year:Number,
    imdb:Number,
    createdAt:{
        type:Date,
        default:Date.now,
    },
    status:{
        type:Boolean,
        default:1
    }
});
module.exports=mongoose.model('movie',MovieSchema);