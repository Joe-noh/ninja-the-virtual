var express = require('express');
var router = express.Router();

const https = require('https');

router.get('/', function(req, res, next) {
  const token = process.env.SUZURI_TOKEN;
  const opts = {
    protocol: 'https:',
    host: 'suzuri.jp',
    path: `/api/v1/products?limit=50`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  https.get(opts, response => {
    let body = '';
    response.setEncoding('utf8');

    response.on('data', (chunk) => { body += chunk; });

    response.on('end', (_) => {
      const json = JSON.parse(body);

      const products = json.products.map(product => {
        return {...product, sampleImageUrl: `/image?url=${encodeURIComponent(product.sampleImageUrl)}`}
      });
      res.render('index', {products});
    });
  });
});

module.exports = router;
