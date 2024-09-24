import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class PokemonListComponent {
  public displayedColumns: string[] = ['name', 'quantity', 'code', 'action'];
  public dataSource: {itemName: string, quantity: number, code: string}[] = [];
  public filtered: {itemName: string, quantity: number, code: string}[] = [];
  public selectedItem!: {itemName: string, quantity: number, code: string};
  public previewMode: 'List' | 'Create' | 'Edit' = 'List';
  public selectedIndex!: number;

  constructor() {}

  newItemAdded(item: {itemName: string, quantity: number, code: string}) {
    if(this.previewMode === 'Edit') {
      this.dataSource[this.selectedIndex] = item;
    }
    else {
      this.dataSource.push(item);
    }
    this.filtered = this.dataSource;
    this.previewMode = 'List';
  }

  searchItem(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    console.log(inputValue);
    if(inputValue === '') {
      this.filtered = this.dataSource;
    }
    else {
      this.filtered = this.dataSource.filter(ele => ele.itemName.includes(inputValue) || ele.code.includes(inputValue));
    }
  }

  setMode() {
    this.previewMode = 'Create';
    this.selectedItem={itemName: '', quantity: 0, code: ''};
  }
  
  onRowClick(element: {itemName: string, quantity: number, code: string}, index: number) {
    this.selectedIndex = index;
    this.selectedItem = element
    this.previewMode = "Edit";
  }
}
