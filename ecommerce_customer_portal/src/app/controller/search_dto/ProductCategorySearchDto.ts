export class ProductCategorySearchDto {

  idList: Array<number> = [];

  constructor(o?: Partial<ProductCategorySearchDto>) {
    Object.assign(this, o);
  }
}