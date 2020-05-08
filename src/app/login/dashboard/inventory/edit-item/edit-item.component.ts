import { Component, OnInit, Input } from '@angular/core';
import { InventoryService } from 'app/inventory.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  @Input() item: {
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
    this.item = this.inventoryServices.itemToEdit;
  }

}
