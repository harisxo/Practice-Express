// Initializing router:
const express = require('express');
const router = express.Router();
const members = require('../../Members');
const uuid = require('uuid');


// Get all members: 
router.get('/', (req,res) => res.json(members));
// Get single member:
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found){
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
} else {
    res.status(400).json({msg: `No student with the id of ${req.params.id}`});
}});

// Assigns random ID 
router.post('/', (req,res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'Unavailable'
}
if (!newMember.name || !newMember.email){
    return res.status(400).json({msg: 'Please provide a valid Name and Email'});
}
members.push(newMember);
res.json(members);

});

router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
})
// Update member

// Add updated member
router.put('/:id', (req,res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
if (found){
    const updMember = req.body;
    members.forEach(member => {
        if(member.id === parseInt(req.params.id)){
            member.name = updMember.name ? updMember.name : member.name;
            member.email = updMember.email ? updMember.email: member.email;
            res.json({msg: 'Student Name & Email updated', member});
        }
});
} else {
    res.status(400).json({msg: `No active or inactive student available with the ID: ${req.params.id}`});
}
});

module.exports = router;
