const API_SERVER = 'https://localhost/3000/api';

export function searchItems(query) {
  return `${API_SERVER}/items?q=${query}`;
}

export function getItemDetails(id) {
  return `${API_SERVER}/items/${id}`;
}

export const environment = {
  production: false,
  items: searchItems,
  itemDetails: getItemDetails,
};
