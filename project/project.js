const express = require("express");
const Project = require("../data/helpers/projectModel");


const router = express.Router();


// router.get('/:id', (req, res) => {
//     Project.getProjectActions(req.params.id)
//     .then(pro => {
//     res.status(200).json(pro)
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json({
//       message: 'Error getting the Projects'
//     })
// })


router.get('/', (req, res) =>{
  Project.get()
  .then(pro => {
    res.status(200).json(pro);
  })
  .catch(err => {
    res.status(500).json({
      message: 'Error retrieving the project',
    })
  })
});


router.post('/', (req, res) =>{
    Project.insert(req.body)
    .then(pro => {
       res.status(201).json(pro);
    })
    .catch(err => {
        res.status(500).json({ message: 'Error adding the project', err})
    })
 });

router.delete('/:id', (req, res) => {
    Action.remove(req.params.id)
    .then(count => {
        if(count > 0){
            res.status(200).json({ message: "The project is deleted"});
        } else {
            res.status(404).json({ message: "The project could not be found"});
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Error removing the project', err})
    })
})


router.put('/:id', (req, res) => {
    const changes = req.body;

    Project.update(req.params.id, changes)
    .then(pro => {
        if (pro){
            res.status(200).json(pro);
        } else {
            res.status(404).json({ message: "The project could not be found"})
        }
    })
    .catch(err => {
        res.status(500).json({
            message: "error updating the project"
        })
    })
})



 module.exports = router;