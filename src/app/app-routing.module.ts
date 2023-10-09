import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { ManipulandoJsonComponent } from './pages/manipulando-json/manipulando-json.component';
import { SubRouteComponent } from './pages/sub-route/sub-route.component';
import { DetalheComponent } from './pages/detalhe/detalhe.component';
import { EmpresasComponent } from './pages/sub-route/empresas/empresas.component';
import { FundosComponent } from './pages/sub-route/fundos/fundos.component';
import { PrivadoComponent } from './pages/privado/privado.component';
import { AutorizadoGuard } from './guards/autorizado.guard';
import { ListSimplesComponent } from './pages/list-simples/list-simples.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ModalComponent } from './pages/modal/modal.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'editar', component: EditarComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'usuario', component: UserInfoComponent },
  { path: 'detalhe/:id/:phone', component: DetalheComponent },
  { path: 'list-simples', component: ListSimplesComponent },
  { path: 'detalhe/:id', component: DetalheComponent },
  { path: 'json', component: ManipulandoJsonComponent },
  {
    path: 'subroute', component: SubRouteComponent,
    children: [
      { path: 'empresas', component: EmpresasComponent },
      { path: 'fundos', component: FundosComponent },
    ]
  },
  { path: 'privado', component: PrivadoComponent, canActivate: [AutorizadoGuard] },
  { path: 'pages/lazy', loadChildren: () => import('./pages/lazy/lazy.module').then(m => m.LazyModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
