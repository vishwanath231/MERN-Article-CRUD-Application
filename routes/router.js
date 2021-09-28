const express = require('express');
const router = express.Router();
const cloundinary = require('../utils/cloudinary');
const upload = require('../utils/multer');
const Article = require('../model/Article.model');



/**
 * @description New Article
 * @method POST
 * @access Public
 */


router.post('/new', upload.single('image'), async (req, res) => {

    try {

        

        const result = await cloundinary.uploader.upload(req.file.path);

        const articles = new Article({
            title: req.body.title,
            author: req.body.author,
            image: result.url,
            article: req.body.article,
            cloudinary_id: result.public_id
        })

        await articles.save();

        return res.status(200).json({
            success: true,
            msg: 'Article Posted',
            data: articles
        });

    } catch (err) {

        if (err.name === "ValidationError") {
            const errMsg = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                msg: errMsg
            })
            
        }else{
            return res.status(500).json({
                success: false,
                msg: "Server Error"
            })
        }
    }
})





/**
 * @description Get all article
 * @method GET
 * @access Public
 */


router.get('/', async (req, res) => {

    try {

        const allArticles = await Article.find();

        return res.status(200).json({
            success: true,
            count: allArticles.length,
            data: allArticles
        })
        
    } catch (err) {
        
        return res.status(500).json({
            success: false,
            msg: "Server Error"
        });
    }

})




/**
 * @description Get article id and data
 * @method GET
 * @access Public
 */


router.get('/:id', async (req, res) => {

    try {
        const articleID = await Article.findById(req.params.id);

        if (!articleID) {
            return res.status(404).json({
                success: false,
                msg: 'Not Found' 
            });
        }

        return res.status(200).json({
            success: true,
            data: articleID
        });
        
    } catch (err) {
       
        return res.status(500).json({
            success: false,
            msg: "Server Error"
        });
    }

})





/**
 * @description Update Article
 * @method PUT
 * @access Public
 */


router.put('/update/:id', upload.single('image'), async (req, res) => {

    try {
       
        const articleData = await Article.findById(req.params.id)

        await cloundinary.uploader.destroy(articleData.cloudinary_id);

        const result = await cloundinary.uploader.upload(req.file.path);

        const data = {
            title: req.body.title || articleData.title,
            author: req.body.author || articleData.author,
            image: result.url || articleData.articleImage,
            article: req.body.article || articleData.article,
            cloudinary_id: result.public_id || articleData.cloudinary_id,
        }

        const updateData = await Article.findByIdAndUpdate(req.params.id , data);

        return res.status(200).json({
            success: true,
            msg:'Update Successfull!',
            data: updateData
        })
        
    } catch (err) {

        return res.status(500).json({
            success: false,
            msg: "Internal server error"
        });
    }

})






/**
 * @description Delete Article
 * @method DELETE
 * @access Public
 */

router.delete('/delete/:id', async (req, res) => {

    try {

        const deleteArticle = await Article.findById(req.params.id);

        await cloundinary.uploader.destroy(deleteArticle.cloudinary_id);

        await deleteArticle.remove();

        return res.status(200).json({
            success: true,
            msg: 'Delete successfull!'
        });
        
    } catch (err) {

        return res.status(500).json({
            success: false,
            msg: "Server Error"
        });
    }

})




module.exports = router;