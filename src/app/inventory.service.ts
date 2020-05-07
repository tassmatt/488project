import { Injectable } from '@angular/core';

export type EditorType = 'display' | 'edit';

@Injectable()
export class InventoryService {

  items = [
    {
      itemID: 1,
      itemName: 'Shampoo',
      quantity: 512,
      location: 'AB02',
      receiveDate: '3/12/20',
      toBeStocked: '',
      quantityChecked: 'Yes',
      restockOrdered: ''
    },
    {
      itemID: 2,
      itemName: 'Toothpaste',
      quantity: 384,
      location: 'JD13',
      receiveDate: '8/21/19',
      toBeStocked: '',
      quantityChecked: 'Yes',
      restockOrdered: ''
    },
    {
      itemID: 3,
      itemName: 'Pizza',
      quantity: 100,
      location: 'HD04',
      receiveDate: '4/5/20',
      toBeStocked: 'Yes',
      quantityChecked: '',
      restockOrdered: ''
    },
    {
      itemID: 4,
      itemName: 'Bottled Water',
      quantity: 0,
      location: 'AA02',
      receiveDate: '6/25/20',
      toBeStocked: '',
      quantityChecked: 'Yes',
      restockOrdered: 'Yes'
    },
    {
      itemID: 5,
      itemName: 'Beyblades',
      quantity: 0,
      location: 'CC11',
      receiveDate: '12/7/19',
      toBeStocked: '',
      quantityChecked: 'Yes',
      restockOrdered: 'Yes'
    },
    {
      itemID: 6,
      itemName: 'Keychains',
      quantity: 65,
      location: 'HG13',
      receiveDate: '10/17/19',
      toBeStocked: 'Yes',
      quantityChecked: '',
      restockOrdered: ''
    },
    {
      itemID: 7,
      itemName: 'Energy Drinks',
      quantity: 0,
      location: 'AC03',
      receiveDate: '2/27/18',
      toBeStocked: '',
      quantityChecked: 'Yes',
      restockOrdered: 'Yes'
    }
  ];

  editor: EditorType = 'display';

  itemToEdit: {
    itemID: number,
    itemName: string,
    quantity: number,
    location: string,
    receiveDate: string,
    toBeStocked: string,
    quantityChecked: string,
    restockOrdered: string
  };

  itemIndex: number;

  constructor() {}

  get showEditItem(){
    return this.editor === 'edit';
  }

  get showDisplayTable(){
    return this.editor === 'display';
  }

  toggleEditor(type: EditorType){
    this.editor = type;
  }

  getItemToEdit(){
    return this.itemToEdit;
  }

  setItemToEdit(i: number){
    this.itemToEdit = this.items[i];
    this.itemIndex = i;
  }

  deleteItem(){
    this.items.splice(this.itemIndex, 1);
    this.toggleEditor('display');
  }

  updateItem(a, b, c, d, e, f, g, h){
    this.items[this.itemIndex].itemID = a;
    this.items[this.itemIndex].itemName = b;
    this.items[this.itemIndex].quantity = c;
    this.items[this.itemIndex].location = d;
    this.items[this.itemIndex].receiveDate = e;
    this.items[this.itemIndex].toBeStocked = f;
    this.items[this.itemIndex].quantityChecked = g;
    this.items[this.itemIndex].restockOrdered = h;

    this.toggleEditor('display');
  }

}
