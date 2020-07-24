import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './Routing/app-routing.module';
import { AppComponent } from './app.component';
import { ModulesModule } from './Modules/modules.module';
import { FormsModule } from '@angular/forms';
import { BlockUIModule } from 'ng-block-ui';
import { BloqueadorUIComponent } from './Shared/block-ui/BloqueadorUIComponent';
import { SimpleGlobal } from 'ng2-simple-global';
import { HttpGenericoService } from './Services/HttpGenerico.service';
import { UtilService } from './Services/util.service';
import { SharedModule } from './Shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BloqueadorUIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModulesModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    BlockUIModule.forRoot({
      template: BloqueadorUIComponent
    })
  ],
  providers: [
    SimpleGlobal,
    HttpGenericoService,
    UtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
