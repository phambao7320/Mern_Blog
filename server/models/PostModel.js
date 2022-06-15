const mongoose = require('mongoose')
const Schema = mongoose.Schema ;


const PostModel = new Schema({
    title: {
        type: String,
        required : true
    },
    desciption: {
        type: String,
        require : true
    },
    author: {
        type: String,
        require : true,
        default : 'Anonymous'
    },
    attachment: String,
    likeCount: { 
        type : Number,
        default: 0
    }

},{ timestamps : true })

module.exports = mongoose.model('PostModel',PostModel)