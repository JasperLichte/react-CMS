import express, { Request, Response } from 'express';
import Me from '../../models/config/Me';
import me from '../../config/about/me';

const configRouter = express.Router();

configRouter.get('/me', async (req: Request, res: Response) => {
    res.send((new Me()).deserialize(me));
});

export default configRouter;
