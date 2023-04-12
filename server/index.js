const app = require('./app.js');

const PORT = 3000;
const HOST = 'localhost';

app.listen(PORT, () => console.log(`Server started.\nhttp://${HOST}:${PORT}`));
