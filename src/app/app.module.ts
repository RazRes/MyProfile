import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {en_US} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzImageModule} from "ng-zorro-antd/image";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzCarouselModule} from "ng-zorro-antd/carousel";
import {NzWaveModule} from "ng-zorro-antd/core/wave";
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzCardModule} from "ng-zorro-antd/card";
import {NzToolTipModule} from "ng-zorro-antd/tooltip";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzMenuModule} from "ng-zorro-antd/menu";
import { LoginComponent } from './login/login.component';
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzFormModule} from "ng-zorro-antd/form";
import { RegisterComponent } from './register/register/register.component';
import {NzSpinModule} from "ng-zorro-antd/spin";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzCollapseModule} from "ng-zorro-antd/collapse";
import {NgxChartsModule} from "@swimlane/ngx-charts";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzGridModule,
    NzPageHeaderModule,
    NzIconModule,
    NzImageModule,
    NzDividerModule,
    NzCarouselModule,
    NzWaveModule,
    NzButtonModule,
    NzCardModule,
    NzToolTipModule,
    NzInputModule,
    NzMenuModule,
    NzDropDownModule,
    ReactiveFormsModule,
    NzFormModule,
    NzSpinModule,
    NzTypographyModule,
    NzCollapseModule,
    NgxChartsModule,
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
