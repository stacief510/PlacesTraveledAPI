// controllers/apiController.js
function index(req, res) {
  res.json({
    message: 'Welcome to Stacies European Vacations!',
    documentation_url: 'https://github.com/stacief510/PlacesTraveledAPI.git',
    base_url: 'localhost:3000',
    endpoints: [
      {
        method: 'GET', path: '/api', description: 'Describes available endpoints'
      }
    ]
  });
}

//research endpoints. Our endpoints needed are GET and POST.

module.exports = {
  index: index
}