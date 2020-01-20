import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  constructor(
    // private http: HttpClient
  ) {
  }

  mockResponseItems() {
    // tslint:disable
    const items = {
      'author': {
        'name': 'Joaquin',
        'lastname': 'Reitú'
      },
      categories: ['Electrónica', 'Video'],
      items: [
        {
          'id': '123123',
          'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          'price': {
            'currency': 'ARS',
            'amount': 20000,
            'decimals': 23
          },
          'picture': 'http://mla-s1-p.mlstatic.com/854906-MLA31838701710_082019-I.jpg',
          'condition': 'new',
          'free_shipping': false
        },
        {
          'id': '123123',
          'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          'price': {
            'currency': 'ARS',
            'amount': 20000,
            'decimals': 23
          },
          'picture': 'http://mla-s2-p.mlstatic.com/658082-MLA31002769377_062019-I.jpg',
          'condition': 'new',
          'free_shipping': true
        },
        {
          'id': '123123',
          'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
          'price': {
            'currency': 'ARS',
            'amount': 20000,
            'decimals': 23
          },
          'picture': 'http://mla-s1-p.mlstatic.com/616548-MLA31822435005_082019-I.jpg',
          'condition': 'new',
          'free_shipping': true
        },
        {
          'id': '123123',
          'title': 'Lorem ipsum dolor sit amet.',
          'price': {
            'currency': 'ARS',
            'amount': 20000,
            'decimals': 23
          },
          'picture': 'http://mla-s2-p.mlstatic.com/991652-MLA31003118881_062019-I.jpg',
          'condition': 'new',
          'free_shipping': false
        }
      ]
    };
    // tslint:enable
    return items;
  }

  mockResponseItemDetails(id) {
    // tslint:disable
    const res = {
      'author': {
        'name': 'Joaquin',
        'lastname': 'Reitu'
      },
      'item': {
        'id': '2',
        'title': 'Lorem ipsum dolor sit amet',
        'price': {
          'currency': 'ARS',
          'amount': 1230,
          'decimals': 30,
        },
        'picture': 'http://mla-s1-p.mlstatic.com/854906-MLA31838701710_082019-O.jpg',
        'condition': 'Nuevo',
        'free_shipping': true,
        'sold_quantity': 2,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    };
    return res;
    // tslint:enable
  }
}
