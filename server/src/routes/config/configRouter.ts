import express, { Request, Response } from 'express';
import Me from 'src/models/config/Me';
import me from 'src/config/about/me';

const configRouter = express.Router();

configRouter.get('/me', async (req: Request, res: Response) => {
    res.send((new Me()).deserialize(me));
});

export default configRouter;
