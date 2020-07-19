const express = require('express');
const Company = require('../../models/Company');

const router = express.Router();

//get companies
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts);
})

//get companies/list
router.get('/list', async (req, res) => {
    const posts = await Company.find({userId: req.user._id}).sort({_id: req.params.sort === 'desc' ? -1 : 1});
    res.send(await posts);
})

//add company
router.post('/', async (req, res) => {
    const post = await new Company({
        name: req.body.name,
        address: req.body.address,
        service_of_activity: req.body.service_of_activity,
        number_of_employees: req.body.number_of_employees,
        description: req.body.description,
        type: req.body.type,
        createdAt: new Date()
    });
    post.save();
    res.status(201).send();
})

//get company
router.get('/:id', async (req, res) => {
    const post = await Company.findById(req.params.id);
    res.status(200).json(post);
})

//update company
router.put('/:id', async (req, res) => {
    const post = await Company.findById(req.params.id);
    await post.updateOne({
        name: req.body.name,
        address: req.body.address,
        service_of_activity: req.body.service_of_activity,
        number_of_employees: req.body.number_of_employees,
        description: req.body.description,
        type: req.body.type,
        updatedAt: new Date()
    });
    res.status(201).send();
})

//delete company
router.delete('/:id', async (req, res) => {
    await Company.deleteOne({_id: req.params.id});
    res.status(200).send();
})

async function loadPostsCollection() {
    return await Company.find({}).sort({_id: -1});
}

module.exports = router;