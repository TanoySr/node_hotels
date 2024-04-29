const express = require('express');
const router = express.Router();

const Menu = require('./../models/menu');

router.post('/', async (req,res)=>{
    try {
  
      const data =req.body;
      const newMenu = new Menu(data);
      const savedMenu = await newMenu.save();
      console.log('Menu data saved');
      res.status(200).json(savedMenu);
  
    } catch (error) {
  
      console.log(error);
      res.status(500).json({error:'internal server error'});
  
    }
  
  })
  
  router.get('/', async(req,res)=>{
    try {
      const data = await Menu.find();
      console.log('data fatch');
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({error:'internal server error'});
    }
  })

  router.get('/:tasteType', async (req,res)=>{
    try {
        const tasteType = req.params.tasteType;
        if (tasteType == 'sweet' || tasteType == 'spicy' || tasteType == 'sour') {
            const tasteResponse  = await Menu.find({taste: tasteType});
            res.status(200).json(tasteResponse);
        }else{
            res.status(404).json({error:'invalid enter taste'});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json('internal server error');
    }
  })

  router.put('/:id', async (req,res)=>{
    try {
        const menuItemupdate =  req.params.id;
        const response = req.body;
        const upadateMenuItems = await Menu.findByIdAndUpdate(menuItemupdate,response,{
            new:true,
            runValidators:true,
        });
        if (!menuItemupdate) {
            res.status(404).json('menu id not found');
        }
        console.log("menu item update succsessfully");
        res.status(200).json(upadateMenuItems);
    } catch (error) {
        console.log(error);
        res.status(500).json('internal server error');
    }
  })
  router.delete('/:id', async (req,res)=>{
    try {
        const menuItemid =  req.params.id;
        const deleteMenuItems = await Menu.findByIdAndDelete(menuItemid);
        if (!deleteMenuItems) {
           return res.status(404).json({error: 'menu id not found'});

        }
            
        console.log("menu item delete succsessfully");
        res.status(200).json(deleteMenuItems);
        
    } catch (error) {
        console.log(error);
        res.status(500).json('internal server error');
    }
  })




  module.exports = router;