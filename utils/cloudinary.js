const  cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUNDINARY_CLOUND_NAME,
    api_key: process.env.CLOUNDINARY_API_KRY,
    api_secret: process.env.CLOUNDINARY_SECRET_KEY
});

module.exports = cloudinary;