import { ChangeDetectionStrategy, Component, OnChanges, SimpleChanges, input } from '@angular/core';
import { ProductRecommendationsComponent } from './product-recommendations/product-recommendations.component';
import { map, of } from 'rxjs';
import { Product } from '../../types/product.type';
import { ProductService } from '../../services/product.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductPreviewPriceComponent } from './product-preview-price/product-preview-price.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { RouterLink } from '@angular/router';
import { RichNavigationComponent } from '../../shared/rich-navigation/rich-navigation.component';
import { AboutComponent } from '../../shared/about/about.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    AsyncPipe,
    ProductPreviewPriceComponent,
    ProductInfoComponent,
    GalleryComponent,
    ProductRecommendationsComponent,
    RichNavigationComponent,
    AboutComponent,
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent implements OnChanges {
  product$ = of(null as Product | null);
  id = input.required<string>();

  constructor(private _productService: ProductService) { }

  ngOnChanges(_changes: SimpleChanges): void {
    this.product$ = this._productService.products$.pipe(
      map(products => {
        const product = products.find(product => product.id === this.id());
        return product ?? null;
      })
    );
  }
}
