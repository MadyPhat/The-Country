import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeNamePipe } from './native-name.pipe';



@NgModule({
  declarations: [
    NativeNamePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NativeNamePipe
  ]
})
export class PipesModule { }
