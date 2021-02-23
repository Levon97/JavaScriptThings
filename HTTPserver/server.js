const http = require('http');
const controllers = require('./controllers/userController.js')

const server = http.createServer((req, res) => {
    if (req.url === '/api/users' && req.method === 'GET') {
        controllers.getUsers(req, res)

    } else if (req.url.match(/\/api\/users\/\d+/) && req.method === 'GET') {
        const id = req.url.split('/')[3];
        controllers.getUser(req, res, id);

    } else if (req.url.match(/\/api\/users\/\w+/) && req.method === 'GET') {
        const searchedText = req.url.split('/')[3];
        controllers.searchUsers(req, res, searchedText);
    } else if (req.url === '/api/users' && req.method === 'POST') {
        controllers.creat(req, res);

    } else if (req.url.match(/\/api\/users\/\d+/) && req.method === 'PUT') {
        const id = req.url.split('/')[3];
        controllers.update(req, res, id);

    } else if (req.url.match(/\/api\/users\/\d+/) && req.method === 'DELETE') {
        const id = req.url.split('/')[3];
        controllers.deleteUser(req, res, id);

    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }

})

const PORT = 7000;

server.listen(PORT, () => console.log(`Server runing on port ${PORT}`))
