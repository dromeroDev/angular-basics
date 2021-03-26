import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  imageWidth: number = 50;
  showImages: boolean = true;
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  errorMessage: string = '';
  sub!: Subscription;

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: (res) => {
        this.products = res;
        this.filteredProducts = this.products;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  toogleImage() {
    this.showImages = !this.showImages;
  }

  performFilter(filterBy: string): IProduct[] {
    return this.products.filter((product: IProduct) =>
      product.productName
        .toLocaleLowerCase()
        .includes(filterBy.toLocaleLowerCase())
    );
  }

  onRatingClicked(message: string): void {
    alert(message);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
