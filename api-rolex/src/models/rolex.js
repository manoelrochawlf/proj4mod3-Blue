const mongoose = require('mongoose');

const rolexSchema = new mongoose.Schema({

    name: {
      type: String, 
      required: true, 
    },

    description: { 
      type: String, 
      required: true,
    },

    img: {
    type: String, 
    required: true,
    },

  });

  const Rolex = mongoose.model('rolexes', rolexSchema);

 module.exports = Rolex;
