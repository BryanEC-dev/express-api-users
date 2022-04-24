const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    let data = ""
    data = await userController.getAllUser()
    res.json({users : data})
  } catch (error) {
    console.log(error); 
  }
});

router.get('/:id', async function(req, res, next) {
  try {
    console.log("Estas pasando el id");
    let data = ""
    data = await userController.getUser(req.params.id)
    res.json({users : data})
  } catch (error) {
    console.log(error); 
  }
});

router.post('/', async function(req, res, next) {
  try {
    let data = ""
    
    data = await userController.insertUser(req.body)
    res.json({users : data})
  } catch (error) {
    console.log(error); 
  }
});

router.put('/:id', async function(req, res, next) {
  try {
    let data = ""
    
    data = await userController.updatetUser(req.params.id, req.body)
    res.json({users : data})
  } catch (error) {
    console.log(error); 
  }
});

router.delete('/:id', async function(req, res, next){
  try {
    let data = ""
    
    data = await userController.deleteUser(req.params.id)
    res.json({users : data})
  } catch (error) {
    console.log(error); 
  }
})

module.exports = router;
