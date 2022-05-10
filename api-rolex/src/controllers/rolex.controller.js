const rolexService = require('../services/rolex.service');
const mongoose = require('mongoose');

const allRolexController = async (req, res) => {
  const allRlx = await rolexService.allRolexService();

  if (allRlx.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum relógio cadastrad!' });
  }

  res.send(allRlx);
}

const rlxIdController = async (req, res) => {

  const idParam = req.params.id;

  const chosenRolex = await rolexService.rlxIdService(idParam);
  if (!chosenRolex) {
    return res.status(404).send({ message: 'Relógio não encontrado!' });
  }
  res.send(chosenRolex);
}

const createRolexController = async (req, res) => {
    const rlx = req.body;
    const newRlx = await rolexService.createRolexService(rlx);
    res.status(201).send(newRlx);
};
  
const updateRolexController = async (req, res) => {
    const idParam = req.params.id;
    const rolexEdit = req.body;
    const updateRolex = await rolexService.updateRolexService(idParam, rolexEdit);

    res.send(updateRolex);
};
  
const deleteRolexController = async (req, res) => {
  const idParam = req.params.id;
  await rolexService.deleteRolexService(idParam);
    res.send({ message: 'Relógio deletado com sucesso!' });
};

module.exports = {
    allRolexController,
    rlxIdController,
    createRolexController,
    updateRolexController,
    deleteRolexController,
};
