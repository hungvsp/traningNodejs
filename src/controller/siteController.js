const {render} = require('node-sass');

class siteController {
  home(req, res) {
    res.render('home');
  }
  search(req, res) {
    res.render('search');
  }
}
module.exports = new siteController();
