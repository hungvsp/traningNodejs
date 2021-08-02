const news = require('./newsRoute');
const newsRoute = require('./newsRoute');
const siteRoute = require('./siteRoute');

function routes(app) {
  app.use('/new', newsRoute);
  app.get('/', (req, res) => {
    res.render('home');
  });
  app.post('/search', siteRoute);
}
module.exports = routes;
