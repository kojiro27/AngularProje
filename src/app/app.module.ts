import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';
import { PortfoyComponent } from './portfoy/portfoy.component';
import { IletisimComponent } from './iletisim/iletisim.component';
import { BlogComponent } from './blog/blog.component';
import { HizmetlerimizComponent } from './hizmetlerimiz/hizmetlerimiz.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HakkimizdaComponent,
    PortfoyComponent,
    IletisimComponent,
    BlogComponent,
    HizmetlerimizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
