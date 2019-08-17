const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const MovieSchema=new Schema({
    director_id:Schema.Types.ObjectId,
    title:{
        type:String,
        required:[true,'`{PATH}`,is required'],
        maxlength:[15,'`{PATH}`({maxlength}) karakterden küçük olmalı']
    },
    category:String,
    country:String,
    year:Number,
    imdb:{
        type:Number,
        max:10,
        min:0
    },
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