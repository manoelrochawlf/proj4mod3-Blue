const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const rolex = req.body;
  if (
    !rolex ||
    !rolex.name ||
    !rolex.description ||
    !rolex.img
  ) {
    return res
      .status(400)
      .send({ message: 'Envie o todos os campos do relógio!' });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
