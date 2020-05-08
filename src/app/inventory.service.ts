import { Injectable } from '@angular/core';

export type EditorType = 'display' | 'edit' | 'add';

@Injectable()
export class InventoryService {

  items = [
    {
      itemID: 349,
      itemName: 'Shampoo',
      quantity: 512,
      location: 'AB02',
      receiveDate: '3/12/20',
      toBeStocked: '',
      quantityChecked: 'Yes',
      restockOrdered: ''
    },
    {
      itemID: 6745,
      itemName: 'Toothpaste',
      quantity: 384,
      location: 'JD13',
      receiveDate: '8/21/19',
      toBeStocked: '',
      quantityChecked: 'Yes',
      restockOrdered: ''
    },
    {
      itemID: 392,
      itemName: 'Pizza',
      quantity: 100,
      location: 'HD04',
      receiveDate: '4/5/20',
      toBeStocked: 'Yes',
      quantityChecked: '',
      restockOrdered: ''
    },
    {
      itemID: 49,
      itemName: 'Bottled Water',
      quantity: 0,
      location: 'AA02',
      receiveDate: '6/25/20',
      toBeStocked: '',
      quantityChecked: 'Yes',
      restockOrdered: 'Yes'
    },
    {
      itemID: 6489,
      itemName: 'Beyblades',
      quantity: 0,
      location: 'CC11',
      receiveDate: '12/7/19',
      toBeStocked: '',
      quantityChecked: 'Yes',
      restockOrdered: 'Yes'
    },
    {
      itemID: 2278,
      itemName: 'Keychains',
      quantity: 65,
      location: 'HG13',
      receiveDate: '10/17/19',
      toBeStocked: 'Yes',
      quantityChecked: '',
      restockOrdered: ''
    },
    {
      itemID: 966,
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

  get showAddItem(){
    return this.editor === 'add';
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
    this.items[this.itemIndex] = {
      itemID: a,
      itemName: b,
      quantity: c,
      location: d,
      receiveDate: e,
      toBeStocked: f,
      quantityChecked: g,
      restockOrdered: h
    };

    this.toggleEditor('display');
  }

  addItem(a, b, c, d, e, f, g, h){
    this.itemToEdit = {
      itemID: a,
      itemName: b,
      quantity: c,
      location: d,
      receiveDate: e,
      toBeStocked: f,
      quantityChecked: g,
      restockOrdered: h
    };

    this.items.push(this.itemToEdit);
    this.toggleEditor('display');
  }
}
