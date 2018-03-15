import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { TemplateReferencevariableComponent } from './template-referencevariable/template-referencevariable.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { ComponentinteractionComponent } from './componentinteraction/componentinteraction.component';
import { PipesComponent } from './pipes/pipes.component';
import { ListComponent } from './list/list.component';
import { ListdetailComponent } from './listdetail/listdetail.component';
import { UsinghttpComponent } from './usinghttp/usinghttp.component';

import { StudentrecordsService } from './studentrecords.service';
import { HttpstudentService } from './httpstudent.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EventbindingComponent,
    StylebindingComponent,
    ClassbindingComponent,
    TemplateReferencevariableComponent,
    TwowaybindingComponent,
    InterpolationComponent,
    PropertybindingComponent,
    NgifComponent,
    NgswitchComponent,
    NgforComponent,
    ComponentinteractionComponent,
    PipesComponent,
    ListComponent,
    ListdetailComponent,
    UsinghttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentrecordsService,HttpstudentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
