const API_SEARCH = 'https://api.mercadolibre.com/sites/MLA/search'; // ?q=:query
const API_ITEM = 'https://api.mercadolibre.com/items/'; // :id :id/description

var request = require('request');
var searchResult = require('../models/searchResult.model');
var description = require('../models/itemDescription.model');

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
  var id = req.params.id;
  description.author.name = 'Joaquín';
  description.author.lastname = 'Reitú Gastaldo';
  description.item = {};

  if (!id) {
    res.status(200).send(description)
  } else {
    const item = getItem(id);
    const itemDesc = getItemDescription(id)
    // Llamadas en paralelo
    Promise.all([item, itemDesc])
      .then(resp => {
        const itemResponse = outputItemResponse(resp);
        description.item = itemResponse;

        res.send(description);
      })
      .catch(e => res.send(`Error ${e}`));
  }
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

function getItem(id) {
  const url = `${API_ITEM}${id}`;
  var response = {};
  return new Promise((resolve, reject) => {
    request(encodeURI(url), (err, resp, body) => {
      resolve(JSON.parse(body));
    });
  });
}

function getItemDescription(id) {
  const url = `${API_ITEM}${id}/description`;
  var response = {};
  return new Promise((resolve, reject) => {
    request(encodeURI(url), (err, resp, body) => {
      resolve(JSON.parse(body));
    });
  });
}

function outputItemResponse(data) {
  const itemResp = data[0];
  const descriptionResp = data[1];
  return {
    id: itemResp.id,
    title: itemResp.title,
    price: {
      currency: itemResp.currency_id,
      amount: itemResp.price,
      decimals: itemResp.decimals || 00
    },
    picture: itemResp.pictures[0].url,
    condition: itemResp.condition,
    sold_quantity: itemResp.sold_quantity,
    free_shipping: itemResp.shipping.free_shipping,
    address: itemResp.seller_address.state.name,
    description: descriptionResp.plain_text
  };
}

module.exports = itemCtrl;