import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';
import { SelectableListComponent } from './components/selectable-list/selectable-list.component';
import { PrettyCamelPipe } from './pipes/pretty-camel.pipe';

@NgModule({
  imports: [
    BrowserModule,
    ClarityModule
  ],
  declarations: [
    SelectableListComponent,
    PrettyCamelPipe
  ],
  exports: [
    SelectableListComponent
  ]
})
export class CommonModule { }
