import express, { Request, Response } from 'express';
import router from './routes/routes';

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
app.use('/', router);
app.get('*', (req: Request, res: Response) => {
    res.status(404).send('404');
});

// Export express instance
export default app;
