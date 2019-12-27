import app from './Server';

const port = 5000;
app.listen(port, () => {
    console.info('Express server started on port: ' + port);
});
