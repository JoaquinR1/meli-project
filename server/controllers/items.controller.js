const API_SEARCH = 'https://api.mercadolibre.com/sites/MLA/search'; // ?q=:query
const API_ITEM = 'https://api.mercadolibre.com/items/'; // :id :id/description

var request = require('request');
var searchResult = require('../models/searchResult.model');

var itemCtrl = {};

itemCtrl.searchItem = (req, res) => {
  var query = req.query.q;
  var url = `${API_SEARCH}?q=${query}`;

  searchResult.author.name = 'Joaquín';
  searchResult.author.lastname = 'Reitú Gastaldo';
  searchResult.categories = [];
  searchResult.items = [];

  if (!query) {
    res.status(200).send(searchResult);
  } else {
    request(encodeURI(url), (err, resp, body) => {
      var data = JSON.parse(body);
      searchResult.categories = getCategories(data.available_filters[0].values);

      var results = [];
      if (data.results.length > 4) {
        results = data.results.slice(0, 4);
      } else {
        results = data.results;
      }

      searchResult.items = getResults(results);

      res.send(searchResult);
    });
  }
}

itemCtrl.getItemById = (req, res) => {
  // Hacer las llamadas en paralelo a :id y :id/description
  // Promise.all() q.controller
}

function getResults(respItems) {
  var items = [];

  respItems.forEach(element => {
    var item = createItem(element);
    items.push(item);
  });
  return items;
}

function getCategories(filters) {
  var categories = [];
  if (filters.length > 0) {
    filters.forEach(cat => {
      categories.push(cat.name);
    });
  }
  return categories;
}

function createItem(element) {
  return {
    id: element.id,
    title: element.title,
    price: {
      currency: element.currency_id,
      amount: element.price,
      decimals: element.decimals || 00
    },
    picture: element.thumbnail,
    condition: element.condition,
    free_shipping: element.shipping.free_shipping,
    address: element.address.state_name
  }
}

module.exports = itemCtrl;