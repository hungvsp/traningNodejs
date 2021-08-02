class NewController {
  //GET /new
  index(req, res) {
    res.render('new');
  }

  //GET //new/:slug
  show(req, res) {
    res.send('this is detail');
  }
}
module.exports = new NewController();
