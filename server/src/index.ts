import app from './Server';
import config from './config/config';

const port = config.port;
app.listen(port, () => {
    console.info('Express server started on port: ' + port);
});
