import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficoComponent } from './components/grafico/grafico.component';

const sharedComponents = [
  GraficoComponent
]

@NgModule({
  declarations: [
    ...sharedComponents
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...sharedComponents
  ]
})
export class SharedModule { }
