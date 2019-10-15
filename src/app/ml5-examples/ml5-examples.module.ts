import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ml5ExamplesRoutingModule } from './ml5-examples-routing.module';
import { ImageClassificationComponent } from './image-classification/image-classification.component';


@NgModule({
  declarations: [ImageClassificationComponent],
  imports: [
    CommonModule,
    Ml5ExamplesRoutingModule
  ],
  exports: [ImageClassificationComponent]
})
export class Ml5ExamplesModule { }
