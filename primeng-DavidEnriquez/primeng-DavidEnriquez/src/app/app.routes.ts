import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginTestComponent } from './components/login-test/login-test.component';
import { OtherFormComponent } from './components/other-form/other-form.component';
import { OtherFormCbComponent } from './components/other-form-cb/other-form-cb.component';
import { LoginService } from './services/login.service';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'logintest',
        component: LoginTestComponent
    },
    {
        path: 'otherform',
        component: OtherFormComponent
    },
    {
        path: 'otherformcb',
        component: OtherFormCbComponent
    },
    {
        path:'loginservice',
        component: LoginService
    },







];
