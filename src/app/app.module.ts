import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ManipulandoJsonComponent } from './pages/manipulando-json/manipulando-json.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';

import { SubRouteComponent } from './pages/sub-route/sub-route.component';
import { DetalheComponent } from './pages/detalhe/detalhe.component';
import { EmpresasComponent } from './pages/sub-route/empresas/empresas.component';
import { FundosComponent } from './pages/sub-route/fundos/fundos.component';
import { PrivadoComponent } from './pages/privado/privado.component';
import { ListSimplesComponent } from './pages/list-simples/list-simples.component';
import { EditarComponent } from './pages/editar/editar.component';
import { DialogContentExampleDialog, ModalComponent } from './pages/modal/modal.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';

import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask'
import { UserService } from './services/user.service';

// *************** POPUPS & MODALS ***************
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListarComponent,
    HeaderComponent,
    FooterComponent,
    CadastroComponent,
    LoginComponent,
    MainComponent,
    ManipulandoJsonComponent,
    SubRouteComponent,
    DetalheComponent,
    EmpresasComponent,
    FundosComponent,
    PrivadoComponent,
    ListSimplesComponent,
    EditarComponent,
    ModalComponent,
    DialogContentExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatTooltipModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    LayoutModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [UserService, provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
