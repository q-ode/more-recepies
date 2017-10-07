const Recipie = require('../models').Recipie;

const recipiesCtrl = {
  addRecipie(req, res) {
    const name = req.body.name;
    const ingredients = req.body.ingredients;
    const description = req.body.description;



    return Recipie.create({
      name, ingredients, description
    })
      .then(recipie => {
        res.status(201).send({message:'Recipie created successfully.'});
      }).catch(error => {
        res.status(400).send({message: error});
      })
  },

  listRecipies(req, res) {
    return Recipie.all()
      .then(recipies => {
        res.status(200).send({recipies: recipies});
      })
      .catch(error => {
        res.status(400).send({message: error});
      })
  }
}

module.exports = recipiesCtrl;