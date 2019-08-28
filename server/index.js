// const path = require('path')
const express = require('express');
const compression = require('compression');
const next = require('next');
const helmet = require('helmet');

require('custom-env').env(true);

const routes = require('../routes');

console.log("process env port---->",process.env.PORT);

const port = parseInt(process.env.PORT, 10) || 3100;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  server.use(helmet());
  server.use(compression());

  server.get('*', (req, res) => handler(req, res));


  function startServer() {
    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`);
    });
  }

  startServer();
});
