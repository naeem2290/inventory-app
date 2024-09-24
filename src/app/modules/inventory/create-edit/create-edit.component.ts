import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class PokemonDetailComponent {
  @Output() newItem = new EventEmitter<{itemName: string, quantity: number, code: string}>();
  @Input() data!: {itemName: string, quantity: number, code: string};
  @Input() mode: 'Create' | 'Edit' = 'Create';
  public createForm: FormGroup = this.fb.group({
    itemName: ['', Validators.required],
    quantity: ['', Validators.required],
    code: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnChanges() {
    if(this.data) {
      this.createForm.patchValue(this.data);
    }
  }

  createNew() {
    this.newItem.emit(this.createForm.value)
  }
}
