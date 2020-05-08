import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'app/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

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

  constructor(private inventoryServices: InventoryService) {}

  ngOnInit() {
  }

  onEditClick(i: number){
    this.inventoryServices.toggleEditor('edit');
    this.inventoryServices.setItemToEdit(i);
  }

  onAddClick(){
    this.inventoryServices.toggleEditor('add');
  }
}
