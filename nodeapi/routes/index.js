var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/parametros/:id', function(req, res, next) {
  const id = req.params.id;
  console.log('params', req.params);
  res.send('ok');
});

router.get('/parametros', function(req, res, next){
  console.log('query', req.query);
  res.send('ok con query');
});

router.get('/parametros/piso/:piso/puerta/:puerta', function(req, res, next){
  console.log('piso', req.params.piso);
  console.log('puerta', req.params.puerta);
  res.send('ok con piso');
});

// parametros en el body

router.post('/parametros', function(req, res, next){
  console.log('req.body', req.body);
  res.send('OK, recibido post');
});

router.get('/', function(req, res, next){
  
  const segundo = (new Date()).getSeconds();

  res.render('index', {
    title: 'NodeApi',
    textoSinEscapar: '<p>Sin escapar</p>',
    condicion: {
      segundo: segundo,
      estado: segundo % 2 === 0
    },
    usuarios: [
      {nombre: 'Smith'},
      {nombre: 'Jones'}
    ]
  });
});

module.exports = router;
