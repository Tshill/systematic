import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpModule, XSRFStrategy, CookieXSRFStrategy} from '@angular/http';


import {AppComponent } from './app.component';
import {LocationStrategy, HashLocationStrategy, PathLocationStrategy} from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { HeroAreaComponent } from './components/heroArea/hero-area.component';
import { PartnersComponent } from './components/partners/partners.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [AppComponent,
                 NavbarComponent,
                 FooterComponent,
                 ServicesComponent,
                 HeroAreaComponent,
                 PartnersComponent,
                 AboutComponent                 
  ],
  imports: [BrowserModule,],
  providers: [{provide:LocationStrategy, useClass:HashLocationStrategy},{
              provide:XSRFStrategy,useValue: new CookieXSRFStrategy('csrftoken', 'X-CSRFToken')}
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
