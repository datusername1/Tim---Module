const express = require('express');
const db = require('../database/models.js');

// TO USE: db.Products.aMethodHere

const Controller = {
  get: (req, res) => {
    console.log(req.query);
    db.Products.findOne({ where: req.query })
      .then(data => res.status(200).send(data))
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
