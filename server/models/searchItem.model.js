const searchItem = {
  'id': String,
  'title': String,
  'price': {
    'currency': String,
    'amount': Number,
    'decimals': Number
  },
  'picture': String,
  'condition': String,
  'free_shipping': Boolean,
  'address': String
}

module.exports = searchItem;