const express = require('express');
const chirpsStore = require('../chirpstore')
let router = express.Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id
    if(id) {
        res.json(chirpsStore.GetChirp(id));
    } else {
    res.send(chirpsStore.GetChirps());
    }
});

router.post('/', (req, res) => {
    const chirp = req.body;
    chirpsStore.CreateChirp(req.body);
    res.sendStatus(200);
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const chirp = req.body;
    chirpsStore.UpdateChirp(req.params.id, req.body)
    res.sendStatus(200)
  })

router.delete('/:id', (req, res) => {
    const nid = req.params.id;
    const chirp = req.body;
    chirpsStore.DeleteChirp(req.params.id)
    res.sendStatus(200)
  })

module.exports = router;