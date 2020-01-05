import express, { Request, Response } from 'express';
import router from './routes/routes';
import Connection from './database/Connection';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';
import AuthHelper from './routes/auth/AuthHelper';
import cookieSession from 'cookie-session';
import credentials from './config/credentials';
import env from './config/env';

const app = express();

AuthHelper.initPassport(passport);

app.use(cors({
  credentials: true,
  origin: env.production ? env.prod_client_url : env.dev_client_url
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieSession({
  name: 'session',
  keys: [credentials.session_key],
  maxAge: 24 * 60 * 60 * 1000,
  secure: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', router);

app.use((_, __, next) => {
  Connection.getInstance().end();
  next();
});

app.get('*', (req: Request, res: Response) => {
  res.status(404).send('404');
});

export default app;
