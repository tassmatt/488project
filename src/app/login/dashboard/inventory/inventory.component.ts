import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'app/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private inventoryServices: InventoryService) {}

  ngOnInit() {
  }

}
