import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa FormsModule y ReactiveFormsModule

import { FooterComponent } from './footer/footer.component';
import { BaseComponent } from './base.component';
import { CoreModule } from '../../core/core.module';
import { HeaderComponent } from './header/header.component';
import { MenuLeftComponent } from './menu-left/menu-left.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from '../../Auth/register/register.component'; // Cambié Auth a auth
import { LogRecoveryComponent } from '../../Auth/recovery/log-recovery.component'; // Cambié Auth a auth
import { LoginComponent } from '../../Auth/login/login.component'; // Cambié Auth a auth
import { IndexViewComponent } from '../index-view/index-view.component';
import { BaseRoutingModule } from '../../routing/base-routing.module'; // Importa tu módulo de rutas

@NgModule({
  declarations: [
    BaseComponent,
    WelcomeComponent,
    FooterComponent,
    HeaderComponent,
    MenuLeftComponent,
    IndexViewComponent,
    LoginComponent,
    LogRecoveryComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule, // Añade RouterModule aquí
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    BaseRoutingModule
  ],
  providers: [],
  exports: [
    BaseComponent,
    FooterComponent,
    HeaderComponent,
    MenuLeftComponent,
    IndexViewComponent,
    LoginComponent,
    LogRecoveryComponent,
    RegisterComponent,
  ],
})
export class BaseModule {}