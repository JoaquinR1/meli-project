const SearchItem = require('./searchItem.model');

const result = {
  'author': {
    'name': String,
    'lastname': String
  },
  categories: [String],
  items: [SearchItem]
};

module.exports = result;