const express = require('express');
const router = express.Router();

const Person = require('./../models/person');

router.post('/', async (req, res) => {
  try {
      
      const data = req.body; // Extracting data from the request body
      const newPerson = new Person(data); // Creating a new instance of the Person model with the extracted data
      const savedData = await newPerson.save(); // Saving the new Person instance to the database
      console.log('data saved'); // Logging a message indicating successful data saving
      res.status(200).json(savedData); // Sending a response with status 200 and the saved data as JSON
  } catch (error) {
      
      console.log(error); // Catching any errors that occur during the process
      res.status(500).json({ error: 'internal server error' });// Sending a response with status 500 and an error message if an error occurs
  }
})

 
router.get('/', async (req, res) => {
  try {
      
      const data = await Person.find(); // Fetching all data from the Person model
      console.log('data fetched'); // Logging a message indicating successful data fetching
      res.status(200).json(data); // Sending a response with status 200 and the fetched data as JSON
  } catch (error) {

      console.log(error); // Catching any errors that occur during the process
      res.status(500).json({ error: 'internal server error' }); // Sending a response with status 500 and an error message if an error occurs
  }
})


router.get('/:workType', async (req, res) => {
  try {
      
      const workType = req.params.workType; // Extracting the workType parameter from the request URL
      
      // Checking if the workType is one of the accepted values ('chef', 'manager', 'waiter')
      if (workType == 'chef' || workType == 'managar' || workType == 'waiter') {
         
          const responseWorktype = await Person.find({ work: workType }); // Querying the database for entries with the specified workType
          console.log('response fetched'); // Logging a message indicating successful data fetching
          res.status(200).json(responseWorktype); // Sending a response with status 200 and the fetched data as JSON
      } else {
         
          res.status(404).json({ error: 'invalid entry' });  // Sending a response with status 404 and an error message for invalid input
      }
  } catch (error) {
      
      console.log(error); // Catching any errors that occur during the process
      
      res.status(500).json({ error: 'internal server error' }); // Sending a response with status 500 and an error message if an error occurs
  }
})


  // PUT Request: Update a person's data based on their ID
router.put('/:id', async (req, res) => {
  try {
      
      const personId = req.params.id; // Extracting the person's ID from the request parameters
      const updatedPersonData = req.body; // Extracting the updated data from the request body
      // Finding and updating the person's data in the database
      const response = await Person.findByIdAndUpdate(personId, updatedPersonData, { // Setting options for the update operation
          new: true, // Return the updated document
          runValidators: true, // Run validation on the updated data
      })
      
      if (!response) {         // If the person is not found, send a response with status 404 and an error message
          return res.status(404).json({ error: 'person not found' });
      }

      
      console.log('Person data updated'); // Logging a message indicating successful data update
      
      res.status(200).json(response); // Sending a response with status 200 and the updated data as JSON
  } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'internal server error' });
  }
});

// DELETE Request: Delete a person's data based on their ID
router.delete('/:id', async (req, res) => {
  try {
      
      const personId = req.params.id; // Extracting the person's ID from the request parameters
      const response = await Person.findByIdAndDelete(personId); // Finding and deleting the person's data from the database
      
      if (!response) {   // If the person is not found, send a response with status 404 and an error message
          return res.status(404).json({ error: 'person not found' });
      }
      
      
      console.log('Person data deleted successfully'); // Logging a message indicating successful data deletion
      
      res.status(200).json(response); // Sending a response with status 200 and the deleted data as JSON
  } catch (error) {
      
      console.log(error);
      res.status(500).json({ error: 'internal server error' });
  }
});

  module.exports = router;
