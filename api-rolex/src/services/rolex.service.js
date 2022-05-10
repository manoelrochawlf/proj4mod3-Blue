const Rolex = require('../models/rolex');


const allRolexService = async () => {
    const allRolex = await Rolex.find();
    return allRolex;
};

const rlxIdService = async (id) => {
  const rolexId = await Rolex.findById(id);
  return rolexId
};

const createRolexService = async (newRlx) => {
    const rolexCreate = await Rolex.create(newRlx)
    return rolexCreate;
};

const updateRolexService = async (id, rolexEdited) => {
    const rolexUpdate = await Rolex.findByIdAndUpdate(id, rolexEdited);
    return rolexUpdate;
};

const deleteRolexService = async (id) => {
    return await Rolex.findByIdAndDelete(id);
};
  
module.exports = {
    allRolexService,
    rlxIdService,
    createRolexService,
    updateRolexService,
    deleteRolexService,
};
