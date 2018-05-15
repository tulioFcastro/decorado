import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModules } from '../material.module';
import { CommonModule } from '@angular/common';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModules,
    BsDropdownModule.forRoot(),
    AngularFontAwesomeModule
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModules
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
