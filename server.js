const https = require('https')
const http = require('http')
const fs = require('fs')
const { parse } = require('url')
const next = require('next')
if (process.env.NODE_ENV === 'production') {
  var c = {
    key: fs.readFileSync(process.env.PRODUCTION_TLSKEYPATH_DOTBLUE),
    cert: fs.readFileSync(process.env.PRODUCTION_TLSCRTPATH_DOTBLUE),
  }
} else {
  var c = {
    key: fs.readFileSync('./macbook.martin.local-key.pem'),
    cert: fs.readFileSync('./macbook.martin.local.pem'),
  }
}
const options = c // gotta love const only being block scoped smh
const dev = process.env.NODE_ENV !== 'production'
if (dev) {
  console.log('Running in development mode')
  var h = 'macbook.martin.local'
} else {
  console.log('Running in production mode')
  var h = 'ldn1.euwest.martinservers.cloud'
}
const hostname = h // gotta love const only being block scoped AGAIN smh
const httpsPort = 443
const httpPort = 80
const app = next({ dev, hostname, httpsPort })
const handle = app.getRequestHandler()
 
app.prepare().then(() => {
  http.createServer((req, res) => {
    res.writeHead(301, { "Location": "https://" + hostname + req.url });
    res.end();
  }).listen(httpPort, () => {
    console.log(`> Redirecting http://${hostname}:${httpPort} to https://${hostname}:${httpsPort}`)
  });
  https.createServer(options, async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true)  
      const { pathname, query } = parsedUrl
 
      if (pathname === '/a') {
        await app.render(req, res, '/a', query)
      } else if (pathname === '/b') {
        await app.render(req, res, '/b', query)
      } else {
        await handle(req, res, parsedUrl)
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(httpsPort, () => {
      console.log(`> Ready on http://${hostname}:${httpsPort}`)
    })
})
