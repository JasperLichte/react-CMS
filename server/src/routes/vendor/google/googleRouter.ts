import express, { Request, Response } from 'express';
import credentials from '../../../config/credentials';

const googleRouter = express.Router();

googleRouter.get('/maps/api-key', async (req: Request, res: Response) => {
    res.send({key: credentials.vendor.google_maps_api_token});
});

export default googleRouter;
