import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

const rotasApp: Routes = [
    {
        path: 'cadastro',
        loadChildren: () => import('./modules/cadastro/cadastro.module').then(m => m.CadastroModule)
    },
    {
        path: 'inbox',
        loadChildren: () => import('./modules/caixa-de-entrada/caixa-de-entrada.module').then(m => m.CaixaDeEntradaModule) 
    },
    {
        path: 'login',
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) 
    },
    {
        path: '',
        redirectTo: 'inbox',
        pathMatch: 'full'
    },
    {
        path:'**',
        redirectTo: 'cadastro',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(rotasApp)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}

