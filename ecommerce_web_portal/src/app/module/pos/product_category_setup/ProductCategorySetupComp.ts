import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { RxFormBuilder } from "@rxweb/reactive-form-validators";
import { Observable } from "rxjs";
import { ProductCategoryController } from "../../../controller/ProductCategoryController";
import { ProductCategorySearchDto } from "../../../controller/search_dto/ProductCategorySearchDto";
import { ProductCategory } from "../../../entity/ProductCategory";

@Component({
  selector: 'ProductCategorySetupComp',
  templateUrl: './ProductCategorySetupComp.html',
  styleUrls: ['./ProductCategorySetupComp.scss'],

  // standalone:true,
  // imports: [
  //   CommonModule,
  //   FormsModule,
  //   ReactiveFormsModule,
  //   RxReactiveFormsModule,
  //   NgSelectModule,
  //   HttpClientModule,
  //   CategoryRoutes
  // ],

})

export class ProductCategorySetupComp implements OnInit {

  productCategoryFg: FormGroup = this.rxFormBuilder.formGroup(ProductCategory);
  productCategoryList$: Observable<Array<ProductCategory>> = new Observable<Array<ProductCategory>>();

  constructor(
    public productCategoryController: ProductCategoryController,
    public rxFormBuilder: RxFormBuilder
  ) { }

  ngOnInit() {
    this.search();
  }

  save() {
    this.productCategoryController.save(this.productCategoryFg.value).subscribe((e) => { this.search(); });
  }

  onUpdateClick(productCategory: ProductCategory) {
    this.productCategoryFg.patchValue(productCategory);
    this.productCategoryFg.patchValue({ updateMode: true });
    console.log(this.productCategoryFg.value);
  }

  update() {
    this.productCategoryController.update(this.productCategoryFg.value).subscribe((e) => { this.search(); });
  }

  delete(productCategory: ProductCategory) {
    this.productCategoryController.delete(productCategory).subscribe((e) => { this.search(); });
  }

  search() {
    this.productCategoryList$ = this.productCategoryController.search(new ProductCategorySearchDto({ "idList": [] }));
  }
}