import express from 'express';
import JokesController from '../controllers/jokes';

const router = express.Router();

router.route('/jokes').get(JokesController.getJokes);

export default router;
