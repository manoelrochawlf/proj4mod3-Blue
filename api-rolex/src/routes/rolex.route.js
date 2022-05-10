const express = require('express');
const router = express.Router();

const rolexController = require('../controllers/rolex.controller');
const { validId, validObjectBody } = require('../middlewares/rolex.middleware');

router.get('/all-rolex', rolexController.allRolexController);
router.get('/one-rolex/:id', validId, rolexController.rlxIdController);
router.post('/create-rolex', validObjectBody, rolexController.createRolexController);
router.put('/update-rolex/:id', validId, validObjectBody, rolexController.updateRolexController);
router.delete('/delete-rolex/:id', validId, rolexController.deleteRolexController);

module.exports = router;
