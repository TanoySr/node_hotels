const express = require('express');
const router = express.Router();

const Tabel_place = require('./../models/table_place');

router.post('/', async (req,res)=>{
    try {

        const table_place_data = req.body;
        const new_table_place = new Tabel_place(table_place_data);
        const save_table_place = await new_table_place.save();
        console.log("Add table place data");
        res.status(200).json(save_table_place);

    } catch (error) {

        console.log(error);
        res.status(500).json({error: 'enternal server error'});
    }
})

router.get('/', async (req,res)=>{
    try {

        const table_place_data = await Tabel_place.find();
        console.log("Facth table_place data");
        res.status(200).json(table_place_data);

    } catch (error) {
        
        console.log(error);
        res.status(500).json({error: 'enternal server error'});
    }
})

router.get('/:typeshit', async (req,res)=>{
    try {
        const typeshit = req.params.typeshit;

        
        if (typeshit == 'wooden' || typeshit == 'sponce' || typeshit == 'conkrit') {
            
            const responseData = await Tabel_place.find({typeOfshit: typeshit});
            console.log('Type Of Shit Data Facth');
            res.status(200).json(responseData);

        } else {
           
            res.status(404).json({error: 'invalid entry'});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json('internal server error');
    }
});


  // PUT Request: Update a person's data based on their ID
  router.put('/:id', async (req, res) => {
    try {
        const tableId = req.params.id;
        const updatedTableData = req.body;
        
        const response = await Tabel_place.findByIdAndUpdate(tableId, updatedTableData, { 
            new: true, 
            runValidators: true, 
        })
        
        if (!response) { 
            return res.status(404).json({ error: 'Table not found' });
        }
        console.log('Table data updated');
        res.status(200).json(response); 
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'internal server error' });
    }
  });


  router.delete('/:id', async (req, res)=>{
    try {
        const deleteTableID = req.params.id;
        const deleteTable = await Tabel_place.findByIdAndDelete(deleteTableID) ;
        
        res.status(200).json(deleteTable);
        console.log('table delete');
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'internal server error' });
    }
  })


module.exports =  router;
