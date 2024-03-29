import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { ListAnimalsComponent } from './list-animals/list-animals.component';
import { AnimalComponent } from './animal/animal.component';
import { AnimalPhotoGridComponent } from './animal-photo-grid/animal-photo-grid.component';
import { CardModule } from '../componets/card/card.module';


@NgModule({
  declarations: [
    ListAnimalsComponent,
    AnimalComponent,
    AnimalPhotoGridComponent
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    CardModule
  ]
})
export class AnimalsModule { }
