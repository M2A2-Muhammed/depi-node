const app = require('./app');
const host= '0.0.0.0';
const port = 3000;

const server = app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
    console.log(`Server address: ${server.address().address}:${server.address().port}`);
});
