import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  template: `
   <h1>New Product</h1>
   <form [formGroup]="frm">
    <div class="col-md-6">
        <div class="form-group">
            <input type="text" placeholder="Brand" class="form-control" name="brand" formControlName="brand" />
            <span class="text-danger" *ngIf="frm.controls.brand.touched && frm.controls.brand.errors?.required">Required</span>
            <span class="text-danger" *ngIf="frm.controls.brand.touched && frm.controls.brand.errors?.minlength">Min 3 Chars</span>
            <span class="text-danger" *ngIf="frm.controls.brand.touched && frm.controls.brand.errors?.maxlength">Max 10 Chars</span>
        </div>
        <div class="form-group">
            <input type="text" placeholder="Model" class="form-control" name="model" formControlName="model" />
        </div>
        <div class="form-group">
            <input type="text" placeholder="Price" class="form-control" name="price" formControlName="price" />
        </div>
        <div class="form-group">
            InStock
            <input type="checkbox" name="inStock" formControlName="inStock" />
        </div>
        <div class="form-group">
            <button [disabled]="frm.invalid" (click)="onSave()" class="btn btn-success">Save Product</button>
        </div>
    </div>
</form>
  `,
  styles: []
})
export class NewProductComponent {
  frm: FormGroup;

  constructor(private svc: ProductService, private fb: FormBuilder, private route: Router) {
    this.frm = fb.group({
      brand: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      model: [''],
      price: [''],
      inStock: [true]
    });
  }
  onSave() {
    if (this.frm.valid) {
      this.svc.save(this.frm.value)
        .subscribe(
        res => this.route.navigate(["/products"]),
        err => this.route.navigate(["/products"]),
      )
    }
    else {
      console.log(this.frm.controls);
      console.log("Validations failed");
    }
  }
}
