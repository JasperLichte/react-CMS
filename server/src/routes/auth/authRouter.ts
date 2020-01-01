import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import AuthHelper from './AuthHelper';
import User from 'src/models/user/User';
import passport from 'passport';

const authRouter = express.Router();

authRouter.post('/check', (req: Request, res: Response) => {
    if (req.user) {
        return res.send({user: req.user});
    }
    return res.send({user: null});
});

authRouter.post('/register', async (req: Request, res: Response) => {
    const user: User|null = await AuthHelper.userByEmail(req.body.email);

    if (user === null) {
        await AuthHelper.insertNewUser((new User()).deserialize({
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10),
        }));
    }

    passport.authenticate('local', (err, user) => {
        if (err || !user) {
            return res.send({success: false, user: null});
        }
        req.login(user, (err) => {
            if (err) {
                return res.send({success: false, user: null});
            }
            res.send({success: true, user: user});
        });
    })(req, res);
});

authRouter.post('/login', (req: Request, res: Response) => {
    passport.authenticate('local', (err, user) => {
        if (err || !user) {
            return res.send({success: false, user: null});
        }
        req.login(user, (err) => {
            if (err) {
                return res.send({success: false, user: null});
            }
            res.send({success: true, user: user});
        });
    })(req, res);
});

authRouter.get('/logout', (req: Request, res: Response) => {
    req.logOut();
    res.send(null);
});

export default authRouter;
