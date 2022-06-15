const PostModel = require("../models/PostModel")

const getPost = async ( req , res ) => {
    try {
        const posts = await PostModel.find() ;    
        res.status(200).json({message: 'Get Succesfully', posts}) ;
    } 
    catch (error) {
        res.status(500).json({error: error}) ;
    }
}

const postPost = async ( req, res ) => {
    try {
        const data = req.body ;
        const post = new PostModel(data) ;
        await post.save() ;

        res.status(200).json({message: 'Create Sucesfully', post}) ;

    } 
    catch (error) {
        res.status(500).json({error: error}) ;
    }
}

const deletePost = async ( req, res ) => {
    try {
        const post = await PostModel.findByIdAndRemove({
            _id: req.params.id,
        })
        res.status(200).json( {message: 'Delete Sucesfully', post } ) ;
    } 
    catch (error) {
        res.status(500).json({error: error}) ;
    }
}

const putPost = async ( req, res ) => {
    try {
        const data = req.body ;
        const post = await PostModel.findOneAndUpdate(
            {_id: req.params.id }, data , {new : true , upsert: true} )
        res.status(200).json( {message: 'Update Sucesfully', post } ) ;

    } 
    catch (error) {
        res.status(500).json({error: error}) ;
    }
}

module.exports = { getPost , postPost , deletePost ,putPost }
