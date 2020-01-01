import app from './Server';
import env from './config/env';

const port = env.port;
app.listen(port, () => {
    console.info('Express server started on port: ' + port);
});
