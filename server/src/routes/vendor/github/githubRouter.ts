import express, { Request, Response } from 'express';
import fetch from 'node-fetch';
import credentials from '../../../config/credentials';

const githubRouter = express.Router();

githubRouter.get('/user-profile/:user_name', async (req: Request, res: Response) => {
    const userName = req.params.user_name;
    if (!userName) {
        return res.send();
    }

    if (!credentials.vendor.github_access_token) {
        return res.send();
    }

    const apiResponse = await fetch(`https://api.github.com/users/${userName}`, {
        headers: {
            Authorization: `token ${credentials.vendor.github_access_token}`
        }
    });

    if (!apiResponse.ok) {
        return res.send();
    }

    res.send(await apiResponse.json());
});

export default githubRouter;
