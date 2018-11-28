const express = require('express');
const db = require('../database/models.js');
const Sequelize = require('sequelize');
const { gt } = Sequelize.Op;


// TO USE: db.Products.aMethodHere

const Controller = {
  get: (req, res) => {
    console.log(req.query); 
    // db.Products.findAll({ where: req.query , limit: 10 })
    //   .then(data => res.status(200).send(data[0]))
    //   .catch(err => console.error(err));
    
    let category;
    let response = [];
    db.Products.findByPk(req.query.id)
      .then(data => {
        response.push(data.dataValues);
        category = data.dataValues.category;
      })
      .then(() => {
        console.log(category);
        db.Products.findAll({ where: { category, id: { [gt]: req.query.id } }, limit: 16 })
          .then(data => {
            for ( let shoe of data ) {
              response.push(shoe.dataValues);
            }
          })
          .then(() => {
            console.log(response);
            res.status(200).send(response);
          })
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  },

  post: (req, res) => {
    res.send('hello from post');
  },

  update: (req, res) => {
    res.send('hello from update');
  },

  delete: (req, res) => {
    res.send('hello from delete');
  },
};

module.exports = { Controller };
