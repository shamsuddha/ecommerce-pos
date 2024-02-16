import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductCategory } from "../entity/ProductCategory";
import { ProductCategorySearchDto } from "./search_dto/ProductCategorySearchDto";


@Injectable({ providedIn: 'root' })
export class ProductCategoryController {

  constructor(private httpClient: HttpClient) { }

  save(ProductCategory: ProductCategory): Observable<ProductCategory> {
    return this.httpClient.post<ProductCategory>('http://localhost:8080/ProductCategory/save', ProductCategory);
  }

  update(ProductCategory: ProductCategory): Observable<ProductCategory> {
    return this.httpClient.put<ProductCategory>('http://localhost:8080/ProductCategory/update', ProductCategory);
  }

  delete(ProductCategory: ProductCategory): Observable<boolean> {
    return this.httpClient.delete<boolean>('http://localhost:8080/ProductCategory/delete', { body: ProductCategory })
    //.subscribe((e)=>{ });
  }

  search(ProductCategorySearchDto: ProductCategorySearchDto): Observable<Array<ProductCategory>> {
    return this.httpClient.post<Array<ProductCategory>>('http://localhost:8080/ProductCategory/search', ProductCategorySearchDto);
  }
}
