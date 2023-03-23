const jwt = require('jsonwebtoken');

const admin = { username: 'admin', password: 'password' };
const secret = 'your_secret_key_here';
const token = jwt.sign({ sub: admin.username }, secret, { expiresIn: '1h' });
