const express = require('express');

const router  = express.Router();

// Import class methods
const {getClass, saveClass, deleteClass, updateClass, searchClass,showClassForm} =  require("../controllers/class-controller.js")

router.get('/showClass',showClassForm);
router.get('/',getClass);
router.post('/insert',saveClass);
router.delete('/:id', deleteClass);
router.put('/updaate:id',updateClass);
router.get('/search/:grade', searchClass);

module.exports = router;
