const express = require('express');
const next = require('next');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = 80;

app.prepare().then(() => {
  const server = express();

  // Create a rate limiter for /api/postoffice/deliver
  const postOfficeDeliverRateLimiter = rateLimit({
    windowMs: 12 * 60 * 60 * 1000, // 12 hours
    max: 2, // limit each IP to 1 requests per windowMs, you'd have to be mental (or a bot) (or a mental bot) to send more than 1 email per 12 hours
    handler: (req, res, next) => {
        let file = path.join(process.cwd(), 'private', 'mailerror', 'limit.html');
        let html = fs.readFileSync(file, 'utf8');
        res.status(429).send(html);
    },
  });

  // Apply the rate limiter only to /api/postoffice/deliver
  server.use('/api/postoffice/deliver', postOfficeDeliverRateLimiter);

  // Default Next.js handler for all other routes
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});