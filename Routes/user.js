const express = require('express');
const app = express();
const userController = require('../Controllers/user');
const multer = require('multer');

const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `${__dirname}/public`)
    },
    filename: function (req, file, cb) {
      const ext = file.mimetype.split("/")[1];
      cb(null, `/public-${file.fieldname}-${Date.now()}.${ext}`);
    }
  })

 const upload = multer({
      storage:diskStorage
  })

app.use(express.json());

app.post('/user', userController.createUser);
app.get('/user', userController.getAllUser)
app.post('/sendEmail', userController.sendEmail);
app.post('/saveImage', upload.single('file'),userController.saveImage)


module.exports = app;












