import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';
import { HizmetlerimizComponent } from './hizmetlerimiz/hizmetlerimiz.component';
import { HomeComponent } from './home/home.component';
import { IletisimComponent } from './iletisim/iletisim.component';
import { PortfoyComponent } from './portfoy/portfoy.component';

const routes: Routes = [

{
  path:'',
  component:HomeComponent
},
{
  path:'home',
  component:HomeComponent
},
{
  path:'hizmetlerimiz',
  component:HizmetlerimizComponent
},
{
  path:'hakkimizda',
  component:HakkimizdaComponent
},
{
  path:'blog',
  component:BlogComponent
},
{
  path:'iletisim',
  component:IletisimComponent
},
{
  path:'portfoy',
  component:PortfoyComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
