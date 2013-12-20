var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.use(express.responseTime());
app.set('view engine', 'jade');
app.set('views', __dirname + '/app/views');

app.configure('development', function () {
  app.use(express.static(__dirname + '/app/public'));
  app.use(express.logger('dev'));
});

app.configure('production', function () {
  app.use(express.static(__dirname + '/built-assets'));
  app.use(express.logger('default'));
  app.disable('x-powered-by');
});

[
  'default',
].forEach(function (routePath) {
  require('./app/routes/' + routePath)(app);
});

console.log('Starting app(' + app.get('env') +') on port', port);
app.listen(port);