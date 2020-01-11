import express, { Request, Response } from 'express';
import fs from 'fs';

const aboutRouter = express.Router();

aboutRouter.get('/me', async (req: Request, res: Response) => {
    try {
        const content = fs.readFileSync(`${process.cwd()}/public/about-me.md`).toString();
        res.send({content: content});
    } catch(e) {
        res.send({error: e.message})
    }
});

aboutRouter.get('/me/social-media', async (req: Request, res: Response) => {
    try {
        const content = fs.readFileSync(`${process.cwd()}/public/social-media.json`).toString();
        const jsonObj = JSON.parse(content);

        res.send({'social-media': jsonObj});
    } catch(e) {
        res.send({error: e.message})
    }
});

export default aboutRouter;
