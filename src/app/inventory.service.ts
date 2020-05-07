import { Injectable } from '@angular/core';

@Injectable()
export class InventoryService {

  items = [
    {
      itemID: 1,
      itemName: 'Shampoo',
      quantity: 512,
      location: 'AB02',
      receiveDate: '3/12/20',
      toBeStocked: false,
      quantityChecked: true,
      restockOrdered: false
    },
    {
      itemID: 2,
      itemName: 'Toothpaste',
      quantity: 384,
      location: 'JD13',
      receiveDate: '8/21/19',
      toBeStocked: false,
      quantityChecked: true,
      restockOrdered: false
    },
    {
      itemID: 3,
      itemName: 'Pizza',
      quantity: 100,
      location: 'HD04',
      receiveDate: '4/5/20',
      toBeStocked: true,
      quantityChecked: false,
      restockOrdered: false
    },
    {
      itemID: 4,
      itemName: 'Bottled Water',
      quantity: 0,
      location: 'AA02',
      receiveDate: '6/25/20',
      toBeStocked: false,
      quantityChecked: true,
      restockOrdered: true
    },
    {
      itemID: 5,
      itemName: 'Beyblades',
      quantity: 0,
      location: 'CC11',
      receiveDate: '12/7/19',
      toBeStocked: false,
      quantityChecked: true,
      restockOrdered: true
    }
  ];

  constructor() { }

}
